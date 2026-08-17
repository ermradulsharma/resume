import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import BrandButton from '../../../components/ui/BrandButton';

const ProjectDetailSidebar = ({ project }) => {
    const { period, technologies, case_study } = project;

    return (
        <div className="sticky-top" style={{ top: '100px' }}>
            <Card className="border-0 shadow-lg p-4 mb-4">
                <h4 className="fw-bold mb-4">Project Summary</h4>

                <div className="summary-grid">
                    <div className="summary-item mb-3">
                        <p className="small text-muted mb-1 text-uppercase">Role</p>
                        <p className="fw-bold mb-0">{case_study.project_details?.role || "Senior Full-Stack Developer"}</p>
                    </div>

                    {case_study.project_details?.team_size && (
                        <div className="summary-item mb-3">
                            <p className="small text-muted mb-1 text-uppercase">Team</p>
                            <p className="fw-bold mb-0">{case_study.project_details.team_size}</p>
                        </div>
                    )}

                    <div className="summary-item mb-3">
                        <p className="small text-muted mb-1 text-uppercase">Timeline</p>
                        <p className="fw-bold mb-0">{case_study.project_details?.year || period}</p>
                    </div>
                </div>

                <hr />
                <div className="summary-item">
                    <p className="small text-muted mb-2 text-uppercase">Core Stack</p>
                    <div className="d-flex flex-wrap gap-1">
                        {(case_study.project_details?.technologies || technologies).slice(0, 5).map(t => (
                            <Badge key={t} bg="light" text="dark" className="border">{t}</Badge>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <BrandButton href={project.link === "#" ? "#" : (case_study.project_details?.live_link || project.link)} disabled={project.link === "#" && !case_study.project_details?.live_link} target="_blank" className="w-100 py-3 fw-bold">
                        {project.link === "#" && !case_study.project_details?.live_link ? "Internal Platform" : "Visit Project Website"}
                    </BrandButton>
                </div>
            </Card>
        </div>
    );
};

export default ProjectDetailSidebar;
