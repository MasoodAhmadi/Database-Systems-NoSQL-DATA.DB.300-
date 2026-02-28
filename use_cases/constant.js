// -------------------------------
// Switch to the banking database
// -------------------------------
db = db.getSiblingDB("banking");

export const customerId = db.customers.findOne({ first_name: "Mikko", last_name: "Virtanen" })._id;
export const applicationId = db.loan_applications.findOne({ customer_id: customerId, status: "PENDING" })._id;
export const loanId = db.loans.findOne({ application_id: applicationId, principal_amount: NumberDecimal("250000") })._id;