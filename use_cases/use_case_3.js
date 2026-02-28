// -------------------------------
// Switch to the banking database
// -------------------------------
db = db.getSiblingDB("banking");

const customerId = db.customers.findOne({ first_name: "Mikko", last_name: "Virtanen" })._id;
const applicationId = db.loan_applications.findOne({ customer_id: customerId, status: "PENDING" })._id;

// -------------------------------
// Q3: Find loan applications by loan application id
// -------------------------------
var loan = db.loans.findOne({ application_id: applicationId })

if (!loan) {
    print("No loan found by loan application id:", applicationId);
} else {
    print("Loan by loan application id: ", loan);
}