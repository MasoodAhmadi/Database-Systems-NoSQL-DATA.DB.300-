// -------------------------------
// Switch to the banking database
// -------------------------------
db = db.getSiblingDB("banking");

const customerId = db.customers.findOne({ first_name: "Mikko", last_name: "Virtanen" })._id;

// -------------------------------
// Q1: Find loan applications by customer id
// -------------------------------
var customerLoanApps = db.loan_applications.find({ customer_id: customerId }).toArray();

if (customerLoanApps.length === 0) {
    print("No loan applications found for customer:", customerId);
} else {
    print("Loan applications for customer:", customerId);
    customerLoanApps.forEach(app => printjson(app));
}