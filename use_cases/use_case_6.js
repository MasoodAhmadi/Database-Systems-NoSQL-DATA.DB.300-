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
// Q6: Get Get collateral by loan id
// -------------------------------
// ================================

let loanCollateral = db.loans.findOne(
    { _id: loanId },
    { collateral: 1, _id: 0 }
);

if (!loanCollateral) {
    print("No loan collateral found by loan id: ", loanId);
} else {
    print("Collateral by loan id: ", loanCollateral)
}