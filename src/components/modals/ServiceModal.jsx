import React from "react";
import { Modal } from "react-bootstrap";
import BrandButton from "../common/BrandButton";
import Maintenance from "../Maintenance/Maintenance";
import * as ServiceComponents from "../../components/frontend/serviceContents";
import "../modals/ServiceModal.css"

import { getServiceIcon } from "../../utils/serviceIcons";

const ServiceModal = ({ show, handleClose, title, icon, content }) => {
    const SelectedContent = ServiceComponents[content];
    const IconComponent = getServiceIcon(icon);
    return (
        <Modal show={show} onHide={handleClose} centered size="lg" className="service-modal">
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold d-flex align-items-center text-white">
                    {IconComponent && <IconComponent className="me-2" />}
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-content-wrapper">
                    {content ? (<SelectedContent />) : (<Maintenance />)}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <BrandButton variant="brand-outline" onClick={handleClose}>Close </BrandButton>
                <BrandButton href="#contact" onClick={handleClose}>Let's Connect</BrandButton>
            </Modal.Footer>
        </Modal>
    );
};

export default ServiceModal;
