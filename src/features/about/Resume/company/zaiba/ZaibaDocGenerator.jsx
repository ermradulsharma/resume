import React, { useState } from 'react';
import { usePDF } from '@react-pdf/renderer';
import { ZAIBA_COMPANY_INFO, ZAIBA_OFFER_LETTER, ZAIBA_JOINING_LETTER, ZAIBA_RELIEVING_LETTER, ZAIBA_SALARY_SLIP } from './data/zaibaData';

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
        <iframe src={`${instance.url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="pdf-viewer-frame" title="Zaiba InfoTech Preview" />
    );
};

const ZaibaDocGenerator = () => {
    const [activeTab, setActiveTab] = useState('offer');
    const [companyInfo] = useState(ZAIBA_COMPANY_INFO);
    const [offerData] = useState(ZAIBA_OFFER_LETTER);
    const [joiningData] = useState(ZAIBA_JOINING_LETTER);
    const [relievingData] = useState(ZAIBA_RELIEVING_LETTER);
    const [salaryData] = useState(ZAIBA_SALARY_SLIP);

    const renderDocument = () => {
        switch (activeTab) {
            case 'offer': return <OfferLetterDocument companyInfo={companyInfo} offerData={offerData} logoUrl={null} />;
            case 'joining': return <JoiningLetterDocument companyInfo={companyInfo} joiningData={joiningData} logoUrl={null} />;
            case 'relieving': return <RelievingLetterDocument companyInfo={companyInfo} relievingData={relievingData} logoUrl={null} />;
            case 'salary': return <SalarySlipDocument companyInfo={companyInfo} salaryData={salaryData} logoUrl={null} />;
            default: return null;
        }
    };

    const docInstance = renderDocument();

    return (
        <div className="company-docs-container">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                    <div>
                        <h4 className="company-docs-title mb-1">Zaiba InfoTech — Documents</h4>
                        <p className="text-secondary small mb-0">Agra Branch | Laravel Developer</p>
                    </div>
                    {/* Document Selector Tabs */}
                    <div className="d-flex flex-wrap card-glass p-2 gap-2">
                        <button type="button" className={`doc-nav-tab ${activeTab === 'offer' ? 'active' : ''}`} onClick={() => setActiveTab('offer')}>Offer Letter</button>
                        <button type="button" className={`doc-nav-tab ${activeTab === 'joining' ? 'active' : ''}`} onClick={() => setActiveTab('joining')}>Joining Letter</button>
                        <button type="button" className={`doc-nav-tab ${activeTab === 'relieving' ? 'active' : ''}`} onClick={() => setActiveTab('relieving')}>Relieving Letter</button>
                        <button type="button" className={`doc-nav-tab ${activeTab === 'salary' ? 'active' : ''}`} onClick={() => setActiveTab('salary')}>Salary Slip</button>
                    </div>
                </div>

                {/* Full Width PDF Document Viewer */}
                <div className="card-glass pdf-viewer-wrapper" style={{ height: '900px' }}>
                    <CustomPdfPreview key={`${activeTab}-zaiba`} document={docInstance} />
                </div>
            </div>
        </div>
    );
};

export default ZaibaDocGenerator;
