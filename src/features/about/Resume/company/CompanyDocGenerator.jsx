import React, { useState } from 'react';
import W3InfoDocGenerator from './w3info/W3InfoDocGenerator';
import ZaibaDocGenerator from './zaiba/ZaibaDocGenerator';
import ProgrammingParkDocGenerator from './programmingpark/ProgrammingParkDocGenerator';
import './CompanyDocGenerator.css';

const CompanyDocGenerator = () => {
    const [selectedCompany, setSelectedCompany] = useState('w3info');

    return (
        <div className="company-docs-container">
            <div className="container">
                {/* Top Header & Company Selection Bar */}
                <div className="company-docs-header mb-4 d-flex flex-wrap align-items-center justify-content-between gap-3">
                    <div>
                        <h3 className="company-docs-title mb-1">Company Document Hub</h3>
                        <p className="text-secondary small mb-0">Select a company from your resume experience to manage & generate dedicated documents.</p>
                    </div>

                    {/* Company Switcher Pills */}
                    <div className="d-flex flex-wrap gap-2">
                        <button
                            type="button"
                            className={`doc-nav-tab ${selectedCompany === 'w3info' ? 'active' : ''}`}
                            onClick={() => setSelectedCompany('w3info')}
                        >
                            🏢 W3 Info Solutions (Lucknow)
                        </button>
                        <button
                            type="button"
                            className={`doc-nav-tab ${selectedCompany === 'zaiba' ? 'active' : ''}`}
                            onClick={() => setSelectedCompany('zaiba')}
                        >
                            🏢 Zaiba InfoTech (Agra)
                        </button>
                        <button
                            type="button"
                            className={`doc-nav-tab ${selectedCompany === 'programmingpark' ? 'active' : ''}`}
                            onClick={() => setSelectedCompany('programmingpark')}
                        >
                            🏢 Programming Park InfoTech (Agra)
                        </button>
                    </div>
                </div>

                {/* Render Selected Dedicated Company Page */}
                {selectedCompany === 'w3info' && <W3InfoDocGenerator />}
                {selectedCompany === 'zaiba' && <ZaibaDocGenerator />}
                {selectedCompany === 'programmingpark' && <ProgrammingParkDocGenerator />}
            </div>
        </div>
    );
};

export default CompanyDocGenerator;
