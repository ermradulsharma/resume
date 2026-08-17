import React from 'react';
import './AnimatedWebResume.css';
import resumeData from "../../../../data/resumeData.json";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const renderBoldText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} style={{ color: '#2c3e50' }}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

const AnimatedWebResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <div style={{ padding: '40px 20px', background: '#e9ecef', minHeight: '100%', width: '100%', overflowY: 'auto' }}>
            <div className="animated-resume-container">
                <div className="anim-header anim-section">
                    <div className="anim-name">{data.header.name}</div>
                    <div className="anim-title">{data.header.title}</div>
                    <div className="anim-contact">
                        <span><FaPhone className="me-1"/> {data.header.phone}</span>
                        <span><FaEnvelope className="me-1"/> <a href={`mailto:${data.header.email}`}>{data.header.email}</a></span>
                        <span><FaLinkedin className="me-1"/> <a href={data.header.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span>
                        <span><FaGithub className="me-1"/> <a href={data.header.github} target="_blank" rel="noreferrer">GitHub</a></span>
                        <span><FaMapMarkerAlt className="me-1"/> {data.header.address}</span>
                    </div>
                </div>

                <div className="anim-section">
                    <h3 className="anim-heading">Professional Summary</h3>
                    <p style={{ lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
                        {renderBoldText(data.summary)}
                    </p>
                </div>

                <div className="anim-section" style={{ marginTop: '30px' }}>
                    <h3 className="anim-heading">Experience</h3>
                    {data.experience.map((exp, idx) => (
                        <div key={idx} className="anim-item">
                            <div className="anim-item-header">
                                <div className="anim-item-title">{exp.title}</div>
                                <div className="anim-item-date">{exp.date}</div>
                            </div>
                            <div className="anim-item-subtitle">{exp.company}</div>
                            <div>
                                {exp.points.map((pt, pIdx) => (
                                    <div key={pIdx} className="anim-bullet">{renderBoldText(pt)}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="anim-section" style={{ marginTop: '30px' }}>
                    <h3 className="anim-heading">Projects</h3>
                    {data.projects.map((proj, idx) => (
                        <div key={idx} className="anim-item">
                            <div className="anim-item-header">
                                <div className="anim-item-title">{proj.title}</div>
                                <div className="anim-item-date">{proj.role}</div>
                            </div>
                            <div className="anim-item-subtitle">Tech Stack: {proj.techStack}</div>
                            <div>
                                {proj.points.map((pt, pIdx) => (
                                    <div key={pIdx} className="anim-bullet">{renderBoldText(pt)}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="anim-section" style={{ marginTop: '30px' }}>
                    <h3 className="anim-heading">Skills</h3>
                    <div className="anim-skills">
                        {data.skills.map((skill, idx) => (
                            <div key={idx} className="anim-skill-row">
                                <div className="anim-skill-cat">{skill.category}</div>
                                <div className="anim-skill-det">{skill.details}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="anim-section" style={{ marginTop: '30px' }}>
                    <h3 className="anim-heading">Education</h3>
                    {data.education.map((edu, idx) => (
                        <div key={idx} className="anim-item">
                            <div className="anim-item-header">
                                <div className="anim-item-title">{edu.degree}</div>
                                <div className="anim-item-date">{edu.year}</div>
                            </div>
                            <div className="anim-item-subtitle">{edu.school}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnimatedWebResume;
