import React, { useState, useMemo, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import {
    Container,
    Card,
    Modal,
    Badge,
    Form,
    InputGroup,
    Row,
    Link,
    Col
} from "react-bootstrap";
import BrandButton from "../../common/BrandButton";
import { BiSearch, BiX } from "react-icons/bi";
import data from "../../database/portfolio.json";
import "./Calendar.css";

const PublicCalendar = () => {
    const projects = data.projects.projectsList;

    const calendarRef = useRef(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    /* =========================
       Filter Projects
    ========================== */
    const filteredProjects = useMemo(() => {
        const search = searchTerm.toLowerCase();
        return projects.filter(project =>
            project.title.toLowerCase().includes(search) ||
            project.technologies.some(tech =>
                tech.toLowerCase().includes(search)
            ) ||
            project.category.toLowerCase().includes(search)
        );
    }, [searchTerm, projects]);

    /* =========================
       Jump to Project
    ========================== */
    const handleJumpToProject = (project) => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.gotoDate(project.startDate || "2025-01-01");
    };


    /* =========================
       Calendar Events
    ========================== */
    const events = useMemo(() => {
        return filteredProjects.map((project, index) => {
            let endDate = project.endDate;

            // FullCalendar end is exclusive
            if (endDate) {
                const d = new Date(endDate);
                d.setDate(d.getDate() + 1);
                endDate = d.toISOString().split("T")[0];
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

    /* =========================
       Event Click
    ========================== */
    const handleEventClick = (info) => {
        if (info.event.id.startsWith("project-")) {
            setSelectedProject(info.event.extendedProps);
            setShowModal(true);
        }
    };

    return (
        <Container className="public-calendar-container py-4">
            <div className="calendar-header-actions mb-4">
                <InputGroup className="search-bar-wrapper shadow-sm rounded-pill overflow-hidden ms-auto" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                    <InputGroup.Text className="border-0 ps-4" style={{ backgroundColor: 'transparent', color: 'var(--text-muted)' }}><BiSearch size={20} /></InputGroup.Text>
                    <Form.Control placeholder="Search projects..." className="border-0 py-3 shadow-none" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)' }} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    {searchTerm && <BrandButton variant="brand-outline" size="sm" className="border-0 pe-4 text-decoration-none" style={{ color: 'var(--text-muted)' }} onClick={() => setSearchTerm("")}><BiX size={20} /></BrandButton>}
                </InputGroup>
            </div>

            <Row>
                <Col lg={9} md={8}>
                    <Card className="shadow-sm rounded-4 h-100" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                        <Card.Body className="p-0">
                            <div className="calendar-wrapper p-3">
                                <FullCalendar
                                    ref={calendarRef}
                                    plugins={[dayGridPlugin, listPlugin]}
                                    initialView="dayGridMonth"
                                    headerToolbar={{
                                        left: "prev,next today",
                                        center: "title",
                                        right: "dayGridMonth,listWeek"
                                    }}
                                    events={events}
                                    height="auto"
                                    dayMaxEventRows
                                    eventClick={handleEventClick}
                                    dayHeaderContent={(args) => args.text}
                                    dayCellContent={(args) => args.dayNumberText}
                                    dayHeaderDidMount={(arg) => {
                                        const cushion = arg.el.querySelector('.fc-col-header-cell-cushion');
                                        if (cushion && cushion.tagName === 'A') {
                                            cushion.setAttribute('href', '#calendar');
                                        }
                                    }}
                                    dayCellDidMount={(arg) => {
                                        const cushion = arg.el.querySelector('.fc-daygrid-day-number');
                                        if (cushion && cushion.tagName === 'A') {
                                            cushion.setAttribute('href', '#calendar');
                                        }
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} md={4}>
                    <Card className="shadow-sm rounded-4 h-100 border" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                        <Card.Header className="py-3 ps-4" style={{ backgroundColor: 'transparent', borderBottom: '1px solid var(--border-color)' }}><h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-dark)' }}>Projects</h3></Card.Header>
                        <Card.Body className="p-0 overflow-auto" style={{ maxHeight: 600 }}>
                            {filteredProjects.length ? filteredProjects.map((project, idx) => (
                                <div key={idx} className="p-2 border-bottom cursor-pointer project-sidebar-item" style={{ borderColor: 'var(--border-color)' }} onClick={() => handleJumpToProject(project)}>
                                    <h6 className="fw-bold m-0 small" style={{ color: 'var(--text-primary)' }}>{project.title}</h6>
                                </div>)) : (<div className="p-4 text-center small" style={{ color: 'var(--text-muted)' }}>No projects found for "{searchTerm}"</div>)}
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
