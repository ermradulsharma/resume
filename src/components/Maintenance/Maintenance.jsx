import React from "react";
import { Container, Image } from "react-bootstrap";
import soon from "../../assets/under-maintenance.svg";
import "../Maintenance/Maintenance.css";

const Maintenance = () => {
    return (
        <section id="maintenances" className="maintenance section position-relative">
            <div className="watermark-overlay">© Mradul Sharma</div>
            <Container className="text-center p-2">
                <Image fluid src={soon} width={1006} />
            </Container>
        </section>
    );
};
export default Maintenance;
