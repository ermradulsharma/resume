import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../components/frontend/TechStack/TechStack.css";
import data from "../../database/techStack.json";
import TechStackCard from "./TechStackCard";
import {
    BsCodeSlash, BsServer, BsBox, BsHdd, BsCloud, BsTools,
    BsCurrencyExchange, BsLock, BsLightning, BsShield, BsSpeedometer,
    BsGlobe, BsEye, BsFileText, BsBug, BsGit, BsTrophy, BsDiagram3, BsCircle
} from "react-icons/bs";
import SectionHeader from "../../common/SectionHeader";

const TechStack = () => {
    const techData = data.techStack.technology;
    const iconMap = {
        frontend: BsCodeSlash,
        backend: BsServer,
        frameworks: BsBox,
        database: BsHdd,
        cloudsAndDevOps: BsCloud,
        tools: BsTools,
        paymentGateway: BsCurrencyExchange,
        authentication: BsLock,
        api: BsLightning,
        security: BsShield,
        performance: BsSpeedometer,
        scalability: BsGlobe,
        maintenance: BsTools,
        deployment: BsCloud,
        monitoring: BsEye,
        documentation: BsFileText,
        testing: BsBug,
        versionControl: BsGit,
    };
    return (
        <Container id="skills" className="skills section" data-aos="fade-up" data-aos-delay="100">
            <SectionHeader title={data.techStack.name} description={data.techStack.description} />
            <Row>
                <Col lg={8}>
                    <div className="skills-grid">
                        <Row className="g-4">
                            {Object.keys(techData).map((type, index) => (
                                <TechStackCard key={type} type={type} Icon={iconMap[type] || BsCircle} aosDelay={200 + index * 100} />
                            ))}
                        </Row>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="skills-summary" data-aos="fade-left" data-aos-delay="200">
                        <h3>Professional Expertise</h3>
                        <p>Experienced in full stack development, DevOps, cloud infrastructure, API design, and building scalable applications with Laravel, React, and Node.js. Strong background in leading teams and delivering reliable, production-ready systems.</p>
                        <div className="summary-stats m-0 d-lg-block d-flex align-items-center gap-3">
                            <div className="stat-item mb-lg-3" data-aos="zoom-in" data-aos-delay="300">
                                <div className="stat-circle"><BsTrophy /></div>
                                <div className="stat-info">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                            </div>

                            <div className="stat-item" data-aos="zoom-in" data-aos-delay="400">
                                <div className="stat-circle"><BsDiagram3 /></div>
                                <div className="stat-info">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default TechStack;
