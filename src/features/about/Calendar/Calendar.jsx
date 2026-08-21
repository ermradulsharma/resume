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
            <Row className="g-4">
                <Col lg={8} md={7}>
                    <Card className="shadow-sm rounded-4 h-100 border" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                        <Card.Body className="p-3 position-relative">
                            <div className="calendar-wrapper">
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
                            {events.length === 0 && (
                                <div className="alert alert-light border text-center p-4 my-3 rounded-3" role="status">
                                    <p className="mb-1 fw-medium text-dark">No public projects or events found for your search.</p>
                                    <small className="text-muted">Try adjusting your search terms or view all projects in the portfolio.</small>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={5}>
                    <Card className="shadow-sm rounded-4 border overflow-hidden" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                        <Card.Header className="py-3 px-3 border-bottom d-flex flex-column gap-2" style={{ backgroundColor: 'transparent', borderColor: 'var(--border-color)' }}>
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-dark)' }}>Projects</h3>
                                <Badge bg="primary-subtle" className="text-primary">{filteredProjects.length}</Badge>
                            </div>
                            <InputGroup className="search-bar-wrapper shadow-none rounded-pill border" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                                <InputGroup.Text className="border-0 ps-3 py-1" style={{ backgroundColor: 'transparent', color: 'var(--text-muted)' }}><BiSearch size={16} /></InputGroup.Text>
                                <Form.Control placeholder="Search projects..." size="sm" className="border-0 py-1 shadow-none" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)' }} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                {searchTerm && <BrandButton variant="brand-outline" size="sm" className="border-0 pe-3 text-decoration-none py-0" style={{ color: 'var(--text-muted)' }} aria-label="Clear project search" onClick={() => setSearchTerm("")}><BiX size={16} aria-hidden="true" /></BrandButton>}
                            </InputGroup>
                        </Card.Header>
                        <Card.Body className="p-0 overflow-auto" style={{ maxHeight: 380 }}>
                            {filteredProjects.length ? filteredProjects.map((project, idx) => (
                                <button key={idx} type="button" className="p-3 border-0 border-bottom cursor-pointer project-sidebar-item w-100 text-start d-flex align-items-center gap-2 transition-base" style={{ backgroundColor: 'transparent', borderColor: 'var(--border-color)' }} onClick={() => handleJumpToProject(project)}>
                                    <span className="p-2 rounded-circle bg-primary-subtle text-primary d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 28, height: 28 }}>
                                        <BiSearch size={14} />
                                    </span>
                                    <span className="fw-semibold small text-truncate" style={{ color: 'var(--text-primary)' }}>{project.title}</span>
                                </button>)) : (<div className="p-4 text-center small text-muted">No projects found matching "{searchTerm}"</div>)}
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
