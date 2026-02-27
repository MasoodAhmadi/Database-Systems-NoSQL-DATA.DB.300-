// ===============================
// USE CASE SCRIPT - MONGODB
// ===============================

// -------------------------------
// 0️⃣ Switch to the banking database
// -------------------------------
db = db.getSiblingDB("banking");

// -------------------------------
// 1️⃣ Find loan applications by customer id
// -------------------------------
var customerId = ObjectId("69a037189e60e244a648e7de");
var customerLoanApps = db.loan_applications.find({ customerId: customerId }).toArray();

if (customerLoanApps.length === 0) {
    print("⚠️ No loan applications found for customer:", customerId);
} else {
    print("✅ Loan applications for customer:", customerId);
    customerLoanApps.forEach(app => printjson(app));
}

// -------------------------------
// 2️⃣ Get bank account(s) for the customer
// -------------------------------
var customerId = ObjectId("69a037189e60e244a648e7de");
var bankAccounts = db.bank_accounts.find({ customerId: customerId }).toArray();

if (bankAccounts.length === 0) {
    print("⚠️ No bank accounts found for customer:", customerId);
} else {
    print("✅ Bank accounts for customer:", customerId);
    bankAccounts.forEach(acc => printjson(acc));
}

// -------------------------------
// 3️⃣ Find loan applications by bank account id (if available)
// -------------------------------
if (bankAccounts.length > 0) {
    var customerId = bankAccounts[0].customerId; // get the customerId
    var loanAppsByCustomer = db.loan_applications.find({ customerId: customerId }).toArray();

    if (loanAppsByCustomer.length === 0) {
        print("⚠️ No loan applications found for customer:", customerId);
    } else {
        print("✅ Loan applications for customer:", customerId);
        loanAppsByCustomer.forEach(app => printjson(app));
    }
}

// -------------------------------
// 4️⃣ Create loan by loan application id (if exists)
// -------------------------------
// ================================

// Replace this with the ObjectId of your loan application
var applicationId = ObjectId("69a037189e60e244a648e7e1");

// Find the loan application
var loanApp = db.loan_applications.findOne({ _id: applicationId });

if (!loanApp) {
    print("⚠️ Loan application not found:", applicationId);
} else {
    // Prepare the new loan document
    var newLoan = {
        applicationId: loanApp._id,
        customerId: loanApp.customerId,
        principalAmount: loanApp.requestedAmount,
        interestRate: 3.2,               // example interest rate
        tenureMonths: loanApp.requestedTenure,
        monthlyEmi: 1410,                // can calculate dynamically
        outstandingBalance: loanApp.requestedAmount,
        status: "Active",
        disbursedAt: new Date()
    };

    // Insert the loan into the 'loans' collection
    var result = db.loans.insertOne(newLoan);

    if (result.acknowledged) {
        print("✅ Loan created successfully for application:", applicationId);
        printjson(newLoan);
    } else {
        print("❌ Failed to create loan for application:", applicationId);
    }
}

print("🎉 Use case completed!");
