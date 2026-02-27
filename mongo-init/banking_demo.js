// ===============================
// BANKING SYSTEM DEMO - MONGODB
// ===============================

// Use database
db = db.getSiblingDB("banking");

// -------------------------------
// 1️⃣ Customers
// -------------------------------
const customerId = ObjectId();
db.customers.insertOne({
    _id: customerId,
    nationalId: "131052-308T",
    firstName: "Mikko",
    lastName: "Virtanen",
    dateOfBirth: ISODate("1985-10-13"),
    email: "mikko.virtanen@example.fi",
    phone: "+358401234567",
    createdAt: new Date(),
    addresses: [
        {
            street: "Mannerheimintie 10",
            city: "Helsinki",
            postalCode: "00100",
            country: "Finland"
        }
    ],
    employment: {
        employerName: "Nokia",
        employmentType: "Permanent",
        monthlyIncome: 4500,
        yearsEmployed: 5
    },
    bankAccounts: [
        {
            iban: "FI2112345600000785",
            balance: 15000
        }
    ]
});

// -------------------------------
// 2️⃣ Loan Products
// -------------------------------
const homeLoanId = ObjectId();
const carLoanId = ObjectId();
db.loan_products.insertMany([
    {
        _id: homeLoanId,
        productName: "Home Loan",
        minInterestRate: 2.5,
        maxInterestRate: 6.5,
        maxTenureMonths: 360,
        requiresCollateral: true
    },
    {
        _id: carLoanId,
        productName: "Car Loan",
        minInterestRate: 3.0,
        maxInterestRate: 8.0,
        maxTenureMonths: 84,
        requiresCollateral: true
    }
]);

// -------------------------------
// 3️⃣ Loan Application
// -------------------------------
const applicationId = ObjectId();
db.loan_applications.insertOne({
    _id: applicationId,
    customerId: customerId,
    productId: homeLoanId,
    requestedAmount: 250000,
    requestedTenure: 240,
    status: "Under Review",
    appliedAt: new Date(),
    riskAssessment: {
        creditScore: 720,
        debtToIncomeRatio: 35,
        riskGrade: "Low",
        approved: true,
        assessedAt: new Date()
    }
});

// -------------------------------
// 4️⃣ Loans
// -------------------------------
const loanId = ObjectId();
db.loans.insertOne({
    _id: loanId,
    applicationId: applicationId,
    customerId: customerId,
    principalAmount: 250000,
    interestRate: 3.2,
    tenureMonths: 240,
    monthlyEmi: 1410,
    outstandingBalance: 250000,
    status: "Active",
    disbursedAt: new Date(),
    collateral: {
        type: "Property",
        estimatedValue: 300000,
        description: "Apartment in Helsinki"
    },
    repaymentSchedule: [
        {
            scheduleId: ObjectId(),
            installmentNumber: 1,
            dueDate: ISODate("2026-03-01"),
            principalComponent: 800,
            interestComponent: 610,
            totalDue: 1410,
            status: "Paid"
        },
        {
            scheduleId: ObjectId(),
            installmentNumber: 2,
            dueDate: ISODate("2026-04-01"),
            principalComponent: 805,
            interestComponent: 605,
            totalDue: 1410,
            status: "Pending"
        }
    ],
    repayments: [
        {
            installmentNumber: 1,
            amountPaid: 1410,
            paymentDate: ISODate("2026-03-01"),
            paymentMethod: "Direct Debit"
        }
    ]
});

// -------------------------------
// 5️⃣ Repayments Collection (Optional / separate)
// -------------------------------
db.repayments.insertOne({
    _id: ObjectId(),
    loanId: loanId,
    scheduleId: db.loans.findOne({ _id: loanId }).repaymentSchedule[0].scheduleId,
    amountPaid: 1410,
    paymentDate: ISODate("2026-03-01"),
    paymentMethod: "Direct Debit"
});

// -------------------------------
// 6️⃣ Bank Accounts (Optional / separate)
// -------------------------------
db.bank_accounts.insertOne({
    _id: ObjectId(),
    customerId: customerId,
    iban: "FI2112345600000785",
    balance: 15000
});

// -------------------------------
// 7️⃣ Audit Logs
// -------------------------------
db.audit_logs.insertOne({
    _id: ObjectId(),
    entityName: "Loan",
    entityId: loanId,
    action: "Loan Approved",
    performedBy: "risk_engine",
    performedAt: new Date()
});

db.audit_logs.insertOne({
    _id: ObjectId(),
    entityName: "Repayment",
    entityId: loanId,
    action: "EMI Paid",
    performedBy: "direct_debit",
    performedAt: ISODate("2026-03-01")
});

print("✅ Banking demo data inserted successfully!");
