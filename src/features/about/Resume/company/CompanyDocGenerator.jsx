import React, { useState, useEffect } from 'react';
import { PDFDownloadLink, usePDF } from '@react-pdf/renderer';
import { DEFAULT_COMPANY_INFO, DEFAULT_OFFER_LETTER, DEFAULT_JOINING_LETTER, DEFAULT_RELIEVING_LETTER, DEFAULT_SALARY_SLIP } from './data/defaultCompanyDocData';
import companyLogoWebp from './company_logo.webp';

import OfferLetterDocument from './documents/OfferLetterDocument';
import JoiningLetterDocument from './documents/JoiningLetterDocument';
import RelievingLetterDocument from './documents/RelievingLetterDocument';
import SalarySlipDocument from './documents/SalarySlipDocument';

import OfferLetterForm from './forms/OfferLetterForm';
import JoiningLetterForm from './forms/JoiningLetterForm';
import RelievingLetterForm from './forms/RelievingLetterForm';
import SalarySlipForm from './forms/SalarySlipForm';

import './CompanyDocGenerator.css';

const CustomPdfPreview = ({ document }) => {
    const [instance] = usePDF({ document });

    if (instance.loading) return (
        <div className="d-flex align-items-center justify-content-center h-100 text-info">
            <div className="spinner-border spinner-border-sm me-2" role="status" />
            <span>Loading PDF Preview...</span>
        </div>
    );
    if (instance.error) return <div className="text-danger small p-3">Unable to preview PDF document</div>;
    return (
        <iframe src={`${instance.url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="pdf-viewer-frame" title="Company Document Preview" />
    );
};

const CompanyDocGenerator = () => {
    const [activeTab, setActiveTab] = useState('offer');
    const [viewMode, setViewMode] = useState('split');
    const [logoUrl, setLogoUrl] = useState(null);

    const [companyInfo, setCompanyInfo] = useState(DEFAULT_COMPANY_INFO);
    const [offerData, setOfferData] = useState(DEFAULT_OFFER_LETTER);
    const [joiningData, setJoiningData] = useState(DEFAULT_JOINING_LETTER);
    const [relievingData, setRelievingData] = useState(DEFAULT_RELIEVING_LETTER);
    const [salaryData, setSalaryData] = useState(DEFAULT_SALARY_SLIP);

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
                const pngData = canvas.toDataURL('image/png');
                setLogoUrl(pngData);
            } catch (e) {
                setLogoUrl(null);
            }
        };
        img.onerror = () => setLogoUrl(null);
        img.src = companyLogoWebp;
    }, []);

    const handleCompanyInfoChange = (e) => setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value });
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        if (activeTab === 'offer') setOfferData(prev => ({ ...prev, [name]: value }));
        else if (activeTab === 'joining') setJoiningData(prev => ({ ...prev, [name]: value }));
        else if (activeTab === 'relieving') setRelievingData(prev => ({ ...prev, [name]: value }));
        else if (activeTab === 'salary') setSalaryData(prev => ({ ...prev, [name]: value }));
    };

    const renderDocument = () => {
        switch (activeTab) {
            case 'offer': return <OfferLetterDocument companyInfo={companyInfo} offerData={offerData} logoUrl={logoUrl} />;
            case 'joining': return <JoiningLetterDocument companyInfo={companyInfo} joiningData={joiningData} logoUrl={logoUrl} />;
            case 'relieving': return <RelievingLetterDocument companyInfo={companyInfo} relievingData={relievingData} logoUrl={logoUrl} />;
            case 'salary': return <SalarySlipDocument companyInfo={companyInfo} salaryData={salaryData} logoUrl={logoUrl} />;
            default: return null;
        }
    };

    const getFileName = () => {
        const candidate = offerData.candidateName.replace(/\s+/g, '_');
        switch (activeTab) {
            case 'offer': return `Offer_Letter_${candidate}.pdf`;
            case 'joining': return `Joining_Letter_${candidate}.pdf`;
            case 'relieving': return `Relieving_Letter_${candidate}.pdf`;
            case 'salary': return `Salary_Slip_${candidate}.pdf`;
            default: return 'Company_Document.pdf';
        }
    };

    const docInstance = renderDocument();

    return (
        <div className="company-docs-container">
            <div className="container">
                <div className="row g-4">
                    <div className={`col-lg-6 ${viewMode === 'preview' ? 'd-none d-lg-block' : ''}`}>
                        <div className="d-flex flex-wrap card-glass mb-2 justify-content-between">
                            <button className={`doc-nav-tab ${activeTab === 'offer' ? 'active' : ''}`} onClick={() => setActiveTab('offer')}>Offer Letter</button>
                            <button className={`doc-nav-tab ${activeTab === 'joining' ? 'active' : ''}`} onClick={() => setActiveTab('joining')}>Joining Letter</button>
                            <button className={`doc-nav-tab ${activeTab === 'relieving' ? 'active' : ''}`} onClick={() => setActiveTab('relieving')}>Relieving Letter</button>
                            <button className={`doc-nav-tab ${activeTab === 'salary' ? 'active' : ''}`} onClick={() => setActiveTab('salary')}>Salary Slip</button>
                        </div>

                        <div className="card-glass mb-2">
                            <h5 className="text-info fw-bold mb-3">Company Details</h5>
                            <div className="row g-2">
                                <div className="col-md-6">
                                    <label className="form-label text-light small fw-bold">Company Name</label>
                                    <input type="text" name="companyName" value={companyInfo.companyName} onChange={handleCompanyInfoChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label text-light small fw-bold">HR Representative Name</label>
                                    <input type="text" name="hrName" value={companyInfo.hrName} onChange={handleCompanyInfoChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
                                </div>
                            </div>
                        </div>

                        <div className="card-glass">
                            <h5 className="text-warning fw-bold mb-3">Edit Document Details</h5>
                            {activeTab === 'offer' && <OfferLetterForm offerData={offerData} onChange={handleFormChange} />}
                            {activeTab === 'joining' && <JoiningLetterForm joiningData={joiningData} onChange={handleFormChange} />}
                            {activeTab === 'relieving' && <RelievingLetterForm relievingData={relievingData} onChange={handleFormChange} />}
                            {activeTab === 'salary' && <SalarySlipForm salaryData={salaryData} onChange={handleFormChange} />}
                        </div>
                    </div>

                    {/* Right Column: PDF Live Preview */}
                    <div className={`col-lg-6 ${viewMode === 'form' ? 'd-none d-lg-block' : ''}`}>
                        <div className="card-glass pdf-viewer-wrapper">
                            <CustomPdfPreview key={`${activeTab}-${logoUrl ? 'png' : 'none'}-${JSON.stringify(companyInfo)}`} document={docInstance} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDocGenerator;
