import React from "react";
import { Col, ProgressBar } from "react-bootstrap";
import data from "../../database/techStack.json";

const TechStackCard = ({ type, Icon, aosDelay = 200 }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const cardRef = React.useRef(null);

    const techItems = data.techStack.technology[type];
    const title = data.techStack.technologyTitles?.[type] || type.charAt(0).toUpperCase() + type.slice(1);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    if (!Array.isArray(techItems) || techItems.length === 0) return null;

    return (
        <Col md={6} data-aos="flip-left" data-aos-delay={aosDelay}>
            <div className="skill-card h-100" ref={cardRef}>
                <div className="skill-header">
                    <div className="stat-circle"><Icon /></div>
                    <h3>{title}</h3>
                </div>
                <div className="skills-animation">
                    {techItems.map((skill, index) => (
                        <div className="skill-item" key={`${type}-${index}`}>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.valueNow}%</span>
                            </div>
                            <ProgressBar
                                className="skill-bar"
                                now={isVisible ? skill.valueNow : 0}
                                style={{ transition: 'all 1.5s ease-out' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Col>
    );
};

export default TechStackCard;
