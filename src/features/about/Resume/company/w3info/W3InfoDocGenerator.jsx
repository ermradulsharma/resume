import React, { useState, useEffect } from 'react';
import { usePDF } from '@react-pdf/renderer';
import { W3INFO_COMPANY_INFO, W3INFO_OFFER_LETTER, W3INFO_JOINING_LETTER, W3INFO_RELIEVING_LETTER, W3INFO_SALARY_SLIP } from './data/w3infoData';
import companyLogoWebp from '../company_logo.webp';

import OfferLetterDocument from './documents/OfferLetterDocument';
import JoiningLetterDocument from './documents/JoiningLetterDocument';
import RelievingLetterDocument from './documents/RelievingLetterDocument';
import SalarySlipDocument from './documents/SalarySlipDocument';

import '../CompanyDocGenerator.css';

const CustomPdfPreview = ({ document }) => {
    const [instance] = usePDF({ document });

    if (instance.loading) return (
        <div className="d-flex align-items-center justify-content-center h-100 text-info">
            <div className="spinner-border spinner-border-sm me-2" role="status" />
            <span>Loading PDF Document...</span>
        </div>
    );
    if (instance.error) return <div className="text-danger small p-3">Unable to preview PDF document</div>;
    return (
        <iframe src={`${instance.url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="pdf-viewer-frame" title="W3 Info Document Preview" />
    );
};

const W3InfoDocGenerator = () => {
    const [activeTab, setActiveTab] = useState('offer');
    const [logoUrl, setLogoUrl] = useState(null);

    const [companyInfo] = useState(W3INFO_COMPANY_INFO);
    const [offerData] = useState(W3INFO_OFFER_LETTER);
    const [joiningData] = useState(W3INFO_JOINING_LETTER);
    const [relievingData] = useState(W3INFO_RELIEVING_LETTER);
    const [salaryData] = useState(W3INFO_SALARY_SLIP);

    useEffect(() => {
        const img = new window.Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth || img.width;
                canvas.height = img.naturalHeight || img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                setLogoUrl(canvas.toDataURL('image/png'));
            } catch (e) {
                setLogoUrl(null);
            }
        };
        img.onerror = () => setLogoUrl(null);
        img.src = companyLogoWebp;
    }, []);

    const renderDocument = () => {
        switch (activeTab) {
            case 'offer': return <OfferLetterDocument companyInfo={companyInfo} offerData={offerData} logoUrl={logoUrl} />;
            case 'joining': return <JoiningLetterDocument companyInfo={companyInfo} joiningData={joiningData} logoUrl={logoUrl} />;
            case 'relieving': return <RelievingLetterDocument companyInfo={companyInfo} relievingData={relievingData} logoUrl={logoUrl} />;
            case 'salary': return <SalarySlipDocument companyInfo={companyInfo} salaryData={salaryData} logoUrl={logoUrl} />;
            default: return null;
        }
    };

    const docInstance = renderDocument();

    return (
        <div className="company-docs-container">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2 card-glass">
                    <div>
                        <h4 className="company-docs-title mb-1">W3 Info Solutions — Documents</h4>
                        <p className="text-secondary small mb-0">Lucknow Branch | Senior Full-Stack Developer</p>
                    </div>
                    {/* Document Selector Tabs */}
                    <div className="d-flex flex-wrap p-2 gap-2">
                        <button type="button" className={`doc-nav-tab ${activeTab === 'offer' ? 'active' : ''}`} onClick={() => setActiveTab('offer')}>Offer Letter</button>
                        <button type="button" className={`doc-nav-tab ${activeTab === 'joining' ? 'active' : ''}`} onClick={() => setActiveTab('joining')}>Joining Letter</button>
                        <button type="button" className={`doc-nav-tab ${activeTab === 'relieving' ? 'active' : ''}`} onClick={() => setActiveTab('relieving')}>Relieving Letter</button>
                        <button type="button" className={`doc-nav-tab ${activeTab === 'salary' ? 'active' : ''}`} onClick={() => setActiveTab('salary')}>Salary Slip</button>
                    </div>
                </div>

                {/* Full Width PDF Document Viewer */}
                <div className="card-glass pdf-viewer-wrapper">
                    <CustomPdfPreview key={`${activeTab}-${logoUrl ? 'logo' : 'noid'}`} document={docInstance} />
                </div>
            </div>
        </div>
    );
};

export default W3InfoDocGenerator;
