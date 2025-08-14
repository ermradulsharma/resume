import React from "react";
import { Modal, Button } from "react-bootstrap";
import Maintenance from "../Maintenance/Maintenance";
import * as ServiceComponents from "../../components/frontend/serviceContents";
import "../modals/ServiceModal.css"

const ServiceModal = ({ show, handleClose, title, icon, content }) => {
    const SelectedContent = ServiceComponents[content];
    return (
        <Modal show={show} onHide={handleClose} centered size="lg" className="service-modal">
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold d-flex align-items-center"><i className={`bi ${icon} me-2`}></i>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-content-wrapper">
                    {content ? (<SelectedContent /> ) : ( <Maintenance /> )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close </Button>
                <a href="#contact" className="btn btn-primary" onClick={handleClose}>Let's Connect</a>
            </Modal.Footer>
        </Modal>
    );
};

export default ServiceModal;
