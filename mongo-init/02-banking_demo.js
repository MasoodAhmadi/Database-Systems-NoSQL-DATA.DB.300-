// ===============================
// BANKING SYSTEM DEMO - MONGODB
// ===============================

// Use database
db = db.getSiblingDB("banking");

// Create all ids
const customerId = ObjectId();
const homeLoanId = ObjectId();
const carLoanId = ObjectId();
const applicationId = ObjectId();
const loanId = ObjectId();
const scheduleId = ObjectId();

// -------------------------------
// 1️⃣ Customers
// -------------------------------
try {
    db.customers.insertOne({
        _id: customerId,
        national_id: "131052-308T",
        first_name: "Mikko",
        last_name: "Virtanen",
        date_of_birth: ISODate("1985-10-13"),
        email: "mikko.virtanen@example.fi",
        phone: "+358401234567",
        created_at: new Timestamp(),
        addresses: [
            {
                street: "Mannerheimintie 10",
                city: "Helsinki",
                postal_code: "00100",
                country: "Finland"
            }
        ],
        employment_details: [
            {
                employer_name: "Nokia",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("4500"),
                years_employed: NumberInt(5)
            }
        ],
        bank_accounts: {
            iban: "FI2112345600000785",
            balance: NumberDecimal("15000")
        }
    });
} catch (error) {
    print("Insert customers failed. Error message:", error.message);
}


// -------------------------------
// 2️⃣ Loan Products
// -------------------------------
try {
    db.loan_products.insertMany([
        {
            _id: homeLoanId,
            product_name: "Home Loan",
            min_interest_rate: NumberDecimal("2.5"),
            max_interest_rate: NumberDecimal("6.5"),
            max_tenure_months: NumberInt(360),
            requires_collateral: true
        },
        {
            _id: carLoanId,
            product_name: "Car Loan",
            min_interest_rate: NumberDecimal("3.0"),
            max_interest_rate: NumberDecimal("8.0"),
            max_tenure_months: NumberInt(84),
            requires_collateral: true
        }
    ]);
} catch (error) {
    print("Insert loan products failed. Error message:", error.message);
}

// -------------------------------
// 3️⃣ Loan Application
// -------------------------------
try {
    db.loan_applications.insertOne({
        _id: applicationId,
        customer_id: customerId,
        product_id: homeLoanId,
        requested_amount: NumberDecimal("250000"),
        requested_tenure: NumberInt(240),
        status: "PENDING",
        applied_at: new Timestamp()
    });
} catch (error) {
    print("Insert loan application failed. Error message:", error.message);
}

// -------------------------------
// 4️⃣ Loans
// -------------------------------
try {

    db.loans.insertOne({
        _id: loanId,
        application_id: applicationId,
        principal_amount: NumberDecimal("250000"),
        interest_rate: NumberDecimal("3.2"),
        tenure_months: NumberInt(240),
        monthly_emi: NumberDecimal("1410"),
        outstanding_balance: NumberDecimal("250000"),
        status: "ACTIVE",
        disbursed_at: new Timestamp(),
        collateral: [
            {
                collateral_type: "REAL_ESTATE",
                estimated_value: NumberDecimal("300000"),
                description: "Apartment in Helsinki"
            }
        ]
    });
} catch (error) {
    print("Insert loans failed. Error message:", error.message);
}

// -------------------------------
// 5️⃣ Repayment schedules
// -------------------------------
try {
    db.repayment_schedules.insertMany([
        {
            schedule_id: scheduleId,
            loan_id: loanId,
            installment_number: NumberInt(1),
            due_date: ISODate("2026-03-01"),
            amount_due: NumberDecimal("1410"),
            amount_paid: NumberDecimal("1410"),
            status: "PAID",
            paid_date: new Timestamp(),
            late_fees: NumberDecimal("0")
        },
        {
            schedule_id: scheduleId,
            loan_id: loanId,
            installment_number: NumberInt(2),
            due_date: ISODate("2026-04-01"),
            amount_due: NumberDecimal("1410"),
            amount_paid: NumberDecimal("0"),
            status: "PENDING",
            paid_date: null,
            late_fees: NumberDecimal("0")
        }
    ]);
} catch (error) {
    print("Insert repayment schedules failed. Error message:", error.message);
}

// -------------------------------
// 6️⃣ Repayments 
// -------------------------------
try {
    db.repayments.insertOne({
        _id: ObjectId(),
        loan_id: loanId,
        schedule_id: db.repayment_schedules.findOne({ loan_id: loanId, status: "PAID" }).schedule_id,
        amount_paid: NumberDecimal("1410"),
        payment_date: new Timestamp(),
        payment_method: "AUTO_DEBIT"
    });
} catch (error) {
    print("Insert repayments collection failed. Error message:", error.message);
}

// -------------------------------
// 7️⃣ Audit Logs
// -------------------------------
try {
    db.audit_logs.insertOne({
        _id: ObjectId(),
        entity_name: "Loan",
        entity_id: loanId,
        action: "APPROVE",
        performed_by: "risk_engine",
        performed_at: new Timestamp()
    });

    db.audit_logs.insertOne({
        _id: ObjectId(),
        entity_name: "Repayment",
        entity_id: loanId,
        action: "UPDATE",
        performed_by: "direct_debit",
        performed_at: new Timestamp()
    });
} catch (error) {
    print("Insert audit logs failed. Error message:", error.message);
}

