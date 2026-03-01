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
// Q10: Update repayment by loan id
// -------------------------------
// ================================

let result = db.repayments.updateOne(
    {
        loan_id: loanId,
    },
    {
        $set: {
            amount_paid: NumberDecimal("2401"),
            payment_method: "CASH"
        }
    }
)

if (result.acknowledged) {
    print("Repayments updated successfully by loan id:");
    let repayments = db.repayments.findOne({ loan_id: loanId });
    printjson(repayments);
} else {
    print("Failed to update loan by loan id: ", loanId)
}