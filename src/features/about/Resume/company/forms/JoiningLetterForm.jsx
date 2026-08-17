import React from 'react';

const JoiningLetterForm = ({ joiningData, onChange }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                onChange({ target: { name: 'signatureUrl', value: event.target.result } });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveSignature = () => {
        onChange({ target: { name: 'signatureUrl', value: null } });
    };

    return (
        <div className="row g-2">
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Ref No</label>
                <input type="text" name="refNo" value={joiningData.refNo || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="W3/JOIN/2022/0105" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Date of Issue</label>
                <input type="text" name="date" value={joiningData.date || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="01-Mar-2022" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Employee ID</label>
                <input type="text" name="employeeId" value={joiningData.employeeId || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="W3-2022-412" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Candidate Name</label>
                <input type="text" name="candidateName" value={joiningData.candidateName || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Mradul Sharma" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Designation</label>
                <input type="text" name="designation" value={joiningData.designation || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Senior Full-Stack Developer" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Department</label>
                <input type="text" name="department" value={joiningData.department || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Software Engineering" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Reporting Manager</label>
                <input type="text" name="reportingManager" value={joiningData.reportingManager || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Anurag Shukla (Director)" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Office Timings</label>
                <input type="text" name="officeTimings" value={joiningData.officeTimings || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="9:30 AM to 6:30 PM (Mon-Fri)" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Probation Period (Months)</label>
                <input type="number" name="probationMonths" value={joiningData.probationMonths || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="3" />
            </div>
            <div className="col-md-12 mt-2">
                <label className="form-label text-light small fw-bold">Original Signature Image (PNG / JPG)</label>
                <input type="file" accept="image/*" onChange={handleFileChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
                {joiningData.signatureUrl && (
                    <div className="d-flex align-items-center justify-content-between mt-2 p-2 bg-dark rounded border border-secondary">
                        <img src={joiningData.signatureUrl} alt="Signature Preview" style={{ height: '35px', objectFit: 'contain' }} />
                        <button type="button" onClick={handleRemoveSignature} className="btn btn-outline-danger btn-sm py-0">Remove Signature</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JoiningLetterForm;
