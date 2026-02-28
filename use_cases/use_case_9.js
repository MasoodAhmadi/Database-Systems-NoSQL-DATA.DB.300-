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
// Q9: Update repayment schedule by loan id
// -------------------------------
// ================================

let result = db.repayment_schedules.updateOne(
    {
        loan_id: loanId,
    },
    {
        $set: {
            status: "OVERDUE",
            late_fees: NumberDecimal("50.00")
        }
    }
)

if (result.acknowledged) {
    print("Repayment schedule updated successfully by loan id:");
    let repaymentSchedules = db.repayment_schedules.findOne({ loan_id: loanId });
    printjson(repaymentSchedules);
} else {
    print("Failed to update loan by loan id: ", loanId)
}