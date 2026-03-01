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
// Q7: Update collateral by loan id
// -------------------------------
// ================================

let result = db.loans.updateOne(
    { _id: loanId },
    {
        $push: {
            collateral: {
                collateral_type: "REAL_ESTATE",
                estimated_value: NumberDecimal("150000"),
                description: "Apartment in Tampere"
            }
        }
    }
)

if (result.acknowledged) {
    print("Collateral updated successfully by loan id:");
    let loan = db.loans.findOne({ _id: loanId });
    printjson(loan);
} else {
    print("Failed to update loan by loan id: ", loanId)
}
