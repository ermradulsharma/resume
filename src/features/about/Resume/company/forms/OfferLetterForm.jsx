import React from 'react';

const OfferLetterForm = ({ offerData, onChange }) => {
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
                <input type="text" name="refNo" value={offerData.refNo || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="W3/OFF/2022/0312" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Date of Issue</label>
                <input type="text" name="issueDate" value={offerData.issueDate || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="15-Feb-2022" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Candidate Name</label>
                <input type="text" name="candidateName" value={offerData.candidateName || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Mradul Sharma" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Candidate Email</label>
                <input type="email" name="candidateEmail" value={offerData.candidateEmail || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="mradulsharma786@gmail.com" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Designation</label>
                <input type="text" name="designation" value={offerData.designation || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Senior Full-Stack Developer" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Department</label>
                <input type="text" name="department" value={offerData.department || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Software Engineering" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Joining Date</label>
                <input type="text" name="joiningDate" value={offerData.joiningDate || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="01-Mar-2022" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Work Location</label>
                <input type="text" name="workLocation" value={offerData.workLocation || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Lucknow / Remote" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Basic Monthly (INR)</label>
                <input type="number" name="basicMonthly" value={offerData.basicMonthly || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="30000" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">HRA Monthly (INR)</label>
                <input type="number" name="hraMonthly" value={offerData.hraMonthly || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="18000" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Special Allowance (INR)</label>
                <input type="number" name="specialAllowanceMonthly" value={offerData.specialAllowanceMonthly || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="12000" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Annual CTC (INR)</label>
                <input type="number" name="annualCtc" value={offerData.annualCtc || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="720000" />
            </div>
            <div className="col-md-12">
                <label className="form-label text-light small fw-bold">Candidate Address</label>
                <input type="text" name="candidateAddress" value={offerData.candidateAddress || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Rani Awanti Bai Nagar, Etah, Uttar Pradesh 207001" />
            </div>
            <div className="col-md-12 mt-2">
                <label className="form-label text-light small fw-bold">Original Signature Image (PNG / JPG)</label>
                <input type="file" accept="image/*" onChange={handleFileChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
                {offerData.signatureUrl && (
                    <div className="d-flex align-items-center justify-content-between mt-2 p-2 bg-dark rounded border border-secondary">
                        <img src={offerData.signatureUrl} alt="Signature Preview" style={{ height: '35px', objectFit: 'contain' }} />
                        <button type="button" onClick={handleRemoveSignature} className="btn btn-outline-danger btn-sm py-0">Remove Signature</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OfferLetterForm;
