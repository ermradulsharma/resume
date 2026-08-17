import React from 'react';

const SalarySlipForm = ({ salaryData, onChange }) => {
    return (
        <div className="row g-2">
            <h6 className="text-info fw-bold mb-2">Employee & Pay Period Info</h6>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Pay Month & Year</label>
                <input type="text" name="payMonthYear" value={salaryData.payMonthYear || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="e.g. September 2024" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Employee Name</label>
                <input type="text" name="employeeName" value={salaryData.employeeName || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Designation</label>
                <input type="text" name="designation" value={salaryData.designation || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Date of Joining</label>
                <input type="text" name="dateOfJoining" value={salaryData.dateOfJoining || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
            <div className="col-md-4">
                <label className="form-label text-light small fw-bold">Total Days</label>
                <input type="text" name="totalDays" value={salaryData.totalDays || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
            <div className="col-md-4">
                <label className="form-label text-light small fw-bold">LOPs</label>
                <input type="text" name="lops" value={salaryData.lops || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
            <div className="col-md-4">
                <label className="form-label text-light small fw-bold">Paid Days</label>
                <input type="text" name="paidDays" value={salaryData.paidDays || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>

            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">Bank Name</label>
                <input type="text" name="bankName" value={salaryData.bankName || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small fw-bold">A/c No.</label>
                <input type="text" name="accountNo" value={salaryData.accountNo || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>

            <h6 className="text-success fw-bold mt-3 mb-2">Earnings (Actual vs Earned)</h6>
            <div className="col-md-6">
                <label className="form-label text-light small">Basic (Actual / Earned)</label>
                <div className="input-group input-group-sm">
                    <input type="number" name="basicActual" value={salaryData.basicActual || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Actual" />
                    <input type="number" name="basicEarned" value={salaryData.basicEarned || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Earned" />
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small">HRA (Actual / Earned)</label>
                <div className="input-group input-group-sm">
                    <input type="number" name="hraActual" value={salaryData.hraActual || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Actual" />
                    <input type="number" name="hraEarned" value={salaryData.hraEarned || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Earned" />
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small">Conveyance (Actual / Earned)</label>
                <div className="input-group input-group-sm">
                    <input type="number" name="conveyanceActual" value={salaryData.conveyanceActual || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Actual" />
                    <input type="number" name="conveyanceEarned" value={salaryData.conveyanceEarned || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Earned" />
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small">Medical (Actual / Earned)</label>
                <div className="input-group input-group-sm">
                    <input type="number" name="medicalActual" value={salaryData.medicalActual || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Actual" />
                    <input type="number" name="medicalEarned" value={salaryData.medicalEarned || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Earned" />
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small">Other Allow (Actual / Earned)</label>
                <div className="input-group input-group-sm">
                    <input type="number" name="otherAllowActual" value={salaryData.otherAllowActual || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Actual" />
                    <input type="number" name="otherAllowEarned" value={salaryData.otherAllowEarned || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Earned" />
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label text-light small">Incentive (Actual / Earned)</label>
                <div className="input-group input-group-sm">
                    <input type="number" name="incentiveActual" value={salaryData.incentiveActual || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Actual" />
                    <input type="number" name="incentiveEarned" value={salaryData.incentiveEarned || ''} onChange={onChange} className="form-control bg-dark text-light border-secondary" placeholder="Earned" />
                </div>
            </div>

            <h6 className="text-warning fw-bold mt-3 mb-2">Deductions</h6>
            <div className="col-md-3">
                <label className="form-label text-light small">EPF</label>
                <input type="number" name="epfDeduction" value={salaryData.epfDeduction || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
            <div className="col-md-3">
                <label className="form-label text-light small">ESI/Health</label>
                <input type="number" name="esiDeduction" value={salaryData.esiDeduction || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
            <div className="col-md-3">
                <label className="form-label text-light small">Prof. Tax</label>
                <input type="number" name="professionalTax" value={salaryData.professionalTax || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
            <div className="col-md-3">
                <label className="form-label text-light small">Loan Rec.</label>
                <input type="number" name="loanRecovery" value={salaryData.loanRecovery || ''} onChange={onChange} className="form-control form-control-sm bg-dark text-light border-secondary" />
            </div>
        </div>
    );
};

export default SalarySlipForm;
