import React from 'react';

const RelievingLetterForm = ({ relievingData, onChange }) => {
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
                <label className="form-label text-light small fw-bold">Date of Issue</label>
                <input type="text" name="issueDate" value={relievingData.issueDate || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="30-Dec-2024" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Salutation</label>
                <select name="salutation" value={relievingData.salutation || 'Mr.'} onChange={onChange} className="form-select form-select-sm bg-dark text-light border-secondary">
                    <option value="Mr.">Mr.</option>
                    <option value="Miss.">Miss.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                </select>
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Full Employee Name</label>
                <input type="text" name="employeeName" value={relievingData.employeeName || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Mradul Sharma" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Gender (for Pronouns)</label>
                <select name="gender" value={relievingData.gender || 'male'} onChange={onChange} className="form-select form-select-sm bg-dark text-light border-secondary">
                    <option value="male">Male (He / His / Mr)</option>
                    <option value="female">Female (She / Her / Miss)</option>
                </select>
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Designation</label>
                <input type="text" name="designation" value={relievingData.designation || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Senior Full-Stack Developer" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Joining Date</label>
                <input type="text" name="joiningDate" value={relievingData.joiningDate || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="01-Mar-2022" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Relieving Date</label>
                <input type="text" name="relievingDate" value={relievingData.relievingDate || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="30-Dec-2024" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Signatory Name</label>
                <input type="text" name="signatoryName" value={relievingData.signatoryName || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Anurag Shukla" />
            </div>
            <div className="col-md-12 mt-3">
                <label className="form-label text-light small fw-bold">Upload Original Pen Signature (PNG / JPG)</label>
                <input type="file" accept="image/*" onChange={handleFileChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
                {relievingData.signatureUrl && (
                    <div className="d-flex align-items-center justify-content-between mt-2 p-2 bg-dark rounded border border-secondary">
                        <img src={relievingData.signatureUrl} alt="Signature Preview" style={{ height: '35px', objectFit: 'contain' }} />
                        <button type="button" onClick={handleRemoveSignature} className="btn btn-outline-danger btn-sm py-0">Remove Signature</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RelievingLetterForm;
