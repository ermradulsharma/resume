import React from "react";
import { Modal } from "react-bootstrap";
import BrandButton from "../common/BrandButton";
import Maintenance from "../Maintenance/Maintenance";
import "../modals/ServiceModal.css"

import { getServiceIcon } from "../../utils/serviceIcons";

const ServiceModal = ({ show, handleClose, activeService }) => {
    const { title, icon, details } = activeService || {};
    const IconComponent = icon ? getServiceIcon(icon) : null;

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
                    {details ? (
                        <div className="service-details">
                            <p dangerouslySetInnerHTML={{ __html: details.introduction.replace(/\n/g, '<br />') }}></p>

                            {details.sections && details.sections.map((section, index) => (
                                <div key={index} className="mb-4">
                                    <h5>{section.title}</h5>
                                    <ul>
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className="mb-2">
                                                {typeof item === 'string' ? (
                                                    item
                                                ) : (
                                                    <>
                                                        <strong>{item.title}:</strong>{" "}
                                                        <span className="d-inline">{item.description}</span>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Maintenance />
                    )}
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
