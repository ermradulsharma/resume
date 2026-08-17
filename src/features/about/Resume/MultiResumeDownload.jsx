import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumeDocument from './ResumeDocument';
import { trackEvent } from "../../../utils/analytics/ga";

const MultiResumeDownload = () => {
    const [selectedRole, setSelectedRole] = useState('fullstack');

    const handleDownload = () => {
        trackEvent({ name: "download_resume", category: "Engagement", label: `PDF Download - ${selectedRole}` });
    };

    return (
        <div className="mt-4 d-flex flex-column flex-sm-row gap-2 align-items-start align-items-sm-stretch">
            <select className="form-select w-auto shadow-none" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} style={{ cursor: 'pointer', border: '1px solid #ddd', borderRadius: '4px' }} aria-label="Select Resume Profile">
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="laravel">Laravel Developer</option>
                <option value="mern">MERN Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="techlead">Technical Lead</option>
                <option value="sde">Senior SDE</option>
                <option value="freelancer">Freelancer</option>
            </select>

            <PDFDownloadLink document={<ResumeDocument variant={selectedRole} />} fileName={`Mradul_Sharma_${selectedRole}_Resume.pdf`} className="btn-brand d-inline-flex align-items-center justify-content-center text-decoration-none" onClick={handleDownload}>{({ loading }) => (loading ? 'Generating PDF...' : '⚡ Download PDF ⚡')}</PDFDownloadLink>
        </div>
    );
};

export default MultiResumeDownload;
