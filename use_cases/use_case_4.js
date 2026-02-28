// -------------------------------
// Switch to the banking database
// -------------------------------
db = db.getSiblingDB("banking");

const customerId = db.customers.findOne({ first_name: "Mikko", last_name: "Virtanen" })._id;
const applicationId = db.loan_applications.findOne({ customer_id: customerId, status: "PENDING" })._id;

// -------------------------------
// Q4: Create loan by loan application id
// -------------------------------
// ================================

// Find the loan application
var loanApp = db.loan_applications.findOne({ _id: applicationId });

if (!loanApp) {
    print("Loan application not found:", applicationId);
} else {
    // Prepare the new loan document
    var newLoan = {
        _id: ObjectId(),
        application_id: loanApp._id,
        principal_amount: loanApp.requested_amount,
        interest_rate: NumberDecimal("3.2"),
        tenure_months: loanApp.requested_tenure,
        monthly_emi: NumberDecimal("1410"),
        outstanding_balance: loanApp.requested_amount,
        status: "ACTIVE",
        disbursed_at: new Timestamp()
    };

    // Insert the loan into the 'loans' collection
    var result = db.loans.insertOne(newLoan);

    if (result.acknowledged) {
        print("Loan created successfully for application:", applicationId);
        printjson(newLoan);
    } else {
        print("Failed to create loan for application:", applicationId);
    }
}