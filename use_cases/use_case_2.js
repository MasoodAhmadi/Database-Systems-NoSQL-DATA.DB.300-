// -------------------------------
// Switch to the banking database
// -------------------------------
db = db.getSiblingDB("banking");

const customerId = db.customers.findOne({ first_name: "Mikko", last_name: "Virtanen" })._id;

// -------------------------------
// Q2: Get bank account(s) for the customer
// -------------------------------
var bankAccounts = db.customers.findOne({ _id: customerId }).bank_accounts;

if (bankAccounts.length === 0) {
    print("No bank accounts found for customer:", customerId);
} else {
    print("Bank accounts for customer:", customerId);
    bankAccounts.forEach(acc => printjson(acc));
}