// -------------------------------
// Switch to the banking database
// -------------------------------
db = db.getSiblingDB("banking");

const customerId = db.customers.findOne({ first_name: "Mikko", last_name: "Virtanen" })._id;
const applicationId = db.loan_applications.findOne({ customer_id: customerId, status: "PENDING" })._id;

// -------------------------------
// Q8: Get loan products by loan application id
// -------------------------------
// ================================

let productId = db.loan_applications.findOne({ _id: applicationId }).product_id;
let loanProducts = db.loan_products.find({ _id: productId }).toArray();

if (loanProducts.length === 0) {
    print("No loan products found by loan application id: ", loanProducts);
} else {
    print("Loan products for loan application id: ", productId);
    loanProducts.forEach(product => printjson(product));
}