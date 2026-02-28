// -------------------------------
// Switch to the banking database
// -------------------------------
db = db.getSiblingDB("banking");

const loanId = db.loans.findOne(
    {
        principal_amount: NumberDecimal("250000"),
        interest_rate: NumberDecimal("3.2"), tenure_months: NumberInt(240)
    })._id;

// -------------------------------
// Q5: Get risk assessments by loan id
// -------------------------------
// ================================

let loanApplicationId = db.loans.find({ _id: loanId }).applicationId;
var riskAssessment = db.risk_assessments({ application_id: loanApplicationId });

if (!riskAssessment) {
    print("No risk assessment found by loan id:", loanId);
} else {
    print("Risk assessment by loan id: ", riskAssessment);
}