// -------------------------------
// Switch to the banking database
// -------------------------------
db = db.getSiblingDB("banking");

const customerId = db.customers.findOne({ first_name: "Mikko", last_name: "Virtanen" })._id;
const applicationId = db.loan_applications.findOne({ customer_id: customerId, status: "PENDING" })._id;


// -------------------------------
// Q3: Find loan by loan application id
// -------------------------------

// Complex version
var loan = db.loans.aggregate([
    { $match: { application_id: applicationId } },
    {
        $lookup: {
            from: "collateral",
            localField: "_id",
            foreignField: "loan_id",
            as: "collateral"
        }
    },
    {
        $lookup: {
            from: "repayments",
            localField: "loan_id",
            foreignField: "loan_id",
            as: "repayments"
        }
    }
])

if (!loan) {
    print("No loan found by loan application id:", applicationId);
} else {
    print("Loan by loan application id: ", loan);
}

// Simple version

/*
var loan = db.loans.findOne({ application_id: applicationId })

if (!loan) {
    print("No loan found by loan application id:", applicationId);
} else {
    print("Loan by loan application id: ", loan);
}
*/