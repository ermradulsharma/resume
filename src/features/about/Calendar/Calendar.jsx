import React, { useState, useMemo, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import listPlugin from "@fullcalendar/react/list";
import classicTheme from "@fullcalendar/react/themes/classic";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/classic/palette.css";
import "@fullcalendar/react/themes/classic/theme.css";
import { Container, Card, Modal, Badge, Form, InputGroup, Row, Col } from "react-bootstrap";
import BrandButton from "../../../components/ui/BrandButton";
import { BiSearch, BiX } from "react-icons/bi";
import { usePortfolioProjects } from "../../../hooks/queries/usePortfolioData";
import { useProjectFilter } from "../../../hooks/ui/useProjectFilter";
import "./Calendar.css";

const PublicCalendar = () => {
    const { data: projects = [], isLoading } = usePortfolioProjects();
    const { searchTerm, setSearchTerm, filteredProjects } = useProjectFilter(projects);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const calendarRef = useRef(null);
    const handleJumpToProject = (project) => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.gotoDate(project.startDate || "2025-01-01");
    };
    const events = useMemo(() => {
        return filteredProjects.map((project, index) => {
            let endDate = project.endDate;
            if (endDate) {
                const d = endDate.toLowerCase() === "present" ? new Date() : new Date(endDate);
                if (!isNaN(d.getTime())) {
                    d.setDate(d.getDate() + 1);
                    endDate = d.toISOString().split("T")[0];
                } else {
                    endDate = undefined;
                }
            }

            return {
                id: `project-${index}`,
                title: project.title,
                start: project.startDate,
                end: endDate,
                backgroundColor: index % 2 === 0 ? "var(--primary-color)" : "var(--primary-light)",
                borderColor: index % 2 === 0 ? "var(--primary-color)" : "var(--primary-light)",
                extendedProps: { ...project }
            };
        });
    }, [filteredProjects]);
    const handleEventClick = (info) => {
        if (info.event.id.startsWith("project-")) {
            setSelectedProject(info.event.extendedProps);
            setShowModal(true);
        }
    };
    if (isLoading) {
        return <Container className="py-5 text-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading projects calendar...</span></div></Container>;
    }

    return (
        <Container className="public-calendar-container">
            <div className="calendar-header-actions my-4">
                <InputGroup className="search-bar-wrapper shadow-sm rounded-pill overflow-hidden ms-auto" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                    <InputGroup.Text className="border-0 ps-4" style={{ backgroundColor: 'transparent', color: 'var(--text-muted)' }}><BiSearch size={20} /></InputGroup.Text>
                    <Form.Control placeholder="Search projects..." className="border-0 py-3 shadow-none" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)' }} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    {searchTerm && <BrandButton variant="brand-outline" size="sm" className="border-0 pe-4 text-decoration-none" style={{ color: 'var(--text-muted)' }} aria-label="Clear project search" onClick={() => setSearchTerm("")}><BiX size={20} aria-hidden="true" /></BrandButton>}
                </InputGroup>
            </div>
            <Row>
                <Col lg={9} md={8}>
                    <Card className="shadow-sm rounded-4 h-100" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                        <Card.Body className="p-0">
                            <div className="calendar-wrapper p-3">
                                <FullCalendar ref={calendarRef} plugins={[dayGridPlugin, listPlugin, classicTheme]} initialView="dayGridMonth"
                                    headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,listWeek" }}
                                    events={events} height="auto" dayMaxEventRows eventClick={handleEventClick}
                                    dayHeaderDidMount={(arg) => {
                                        const cushion = arg.el.querySelector('.fc-col-header-cell-cushion');
                                        if (cushion && cushion.tagName === 'A') cushion.setAttribute('href', '#calendar');
                                    }}
                                    dayCellDidMount={(arg) => {
                                        const cushion = arg.el.querySelector('.fc-daygrid-day-number');
                                        if (cushion && cushion.tagName === 'A') cushion.setAttribute('href', '#calendar');
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={4}>
                    <Card className="shadow-sm rounded-4 h-100 border" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                        <Card.Header className="py-3 ps-4" style={{ backgroundColor: 'transparent', borderBottom: '1px solid var(--border-color)' }}><h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-dark)' }}>Projects</h3></Card.Header>
                        <Card.Body className="p-0 overflow-auto" style={{ maxHeight: 738 }}>
                            {filteredProjects.length ? filteredProjects.map((project, idx) => (
                                <button key={idx} type="button" className="p-2 border-0 border-bottom cursor-pointer project-sidebar-item" style={{ borderColor: 'var(--border-color)' }} onClick={() => handleJumpToProject(project)}>
                                    <span className="fw-bold m-0 small" style={{ color: 'var(--text-primary)' }}>{project.title}</span>
                                </button>)) : (<div className="p-4 text-center small" style={{ color: 'var(--text-muted)' }}>No projects found for "{searchTerm}"</div>)}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" className="project-detail-modal">
                <Modal.Header closeButton style={{ backgroundColor: 'var(--surface-color)', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)' }}><Modal.Title>{selectedProject?.title}</Modal.Title></Modal.Header>
                <Modal.Body style={{ backgroundColor: 'var(--surface-color)', color: 'var(--text-secondary)' }}>
                    <p>{selectedProject?.description}</p>
                    <div className="d-flex flex-wrap gap-2 mt-3">{selectedProject?.technologies.map(tech => <Badge key={tech} bg="primary-subtle" className="border border-primary-subtle" style={{ color: 'var(--primary-color)' }}>{tech}</Badge>)}</div>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'var(--surface-color)', borderTop: '1px solid var(--border-color)' }}>
                    <BrandButton variant="brand-outline" onClick={() => setShowModal(false)}>Close</BrandButton>
                    <BrandButton to={`/portfolio/${selectedProject?.slug}`}>View Project</BrandButton>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default PublicCalendar;
