import React, { useState, useMemo, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import {
    Container,
    Card,
    Modal,
    Button,
    Badge,
    Form,
    InputGroup,
    Row,
    Col
} from "react-bootstrap";
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
                backgroundColor: index % 2 === 0 ? "#198754" : "#0d6efd",
                borderColor: index % 2 === 0 ? "#198754" : "#0d6efd",
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
                <InputGroup className="search-bar-wrapper shadow-sm rounded-pill overflow-hidden ms-auto">
                    <InputGroup.Text className="bg-white border-0 ps-4"><BiSearch size={20} /></InputGroup.Text>
                    <Form.Control placeholder="Search projects..." className="border-0 py-3 shadow-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    {searchTerm && <Button variant="white" className="border-0 pe-4" onClick={() => setSearchTerm("")}><BiX size={20} /></Button>}
                </InputGroup>
            </div>

            <Row>
                <Col lg={9} md={8}>
                    <Card className="shadow-sm rounded-4 h-100">
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
                                    dayHeaderContent={(args) => (
                                        <span className="fc-col-header-cell-cushion">{args.text}</span>
                                    )}
                                    dayCellContent={(args) => (
                                        <span className="fc-daygrid-day-number">{args.dayNumberText}</span>
                                    )}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} md={4}>
                    <Card className="shadow-sm rounded-4 h-100 border-0">
                        <Card.Header className="py-3 ps-4"><h5 className="fw-bold mb-0">Projects</h5></Card.Header>
                        <Card.Body className="p-0 overflow-auto" style={{ maxHeight: 600 }}>
                            {filteredProjects.length ? filteredProjects.map((project, idx) => (
                                <div key={idx} className="p-2 border-bottom cursor-pointer" onClick={() => handleJumpToProject(project)}>
                                    <h6 className="fw-bold m-0 small">{project.title}</h6>
                                    {/* <Badge bg="success-subtle" text="success">{formatDate(project.startDate)}   {project.endDate && ` - ${formatDate(project.endDate)}`}</Badge> */}
                                </div>)) : (<div className="p-4 text-center text-muted">No projects found for "{searchTerm}"</div>)}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
                <Modal.Header closeButton><Modal.Title>{selectedProject?.title}</Modal.Title></Modal.Header>
                <Modal.Body>
                    <p>{selectedProject?.description}</p>
                    <div className="d-flex flex-wrap gap-2 mt-3">{selectedProject?.technologies.map(tech => <Badge key={tech} bg="light" text="dark">{tech}</Badge>)}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="success" onClick={() => window.location.href = `/portfolio/${selectedProject?.slug}`}>View Project</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default PublicCalendar;
