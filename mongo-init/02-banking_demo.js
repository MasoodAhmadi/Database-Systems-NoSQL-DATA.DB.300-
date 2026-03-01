// ===============================
// BANKING SYSTEM DEMO - MONGODB
// ===============================

db = db.getSiblingDB("banking");


// -------------------------------
// 1️⃣ Customers
// -------------------------------
const customerId = ObjectId();

try {

    const result = db.customers.insertMany([

        {
            _id: new ObjectId(),
            national_id: "120390-123A",
            first_name: "Anna",
            last_name: "Korhonen",
            date_of_birth: new Date("1990-03-12"),
            email: "anna.korhonen@example.fi",
            phone: "+358401111111",
            created_at: Timestamp(),
            addresses: [{
                street: "Aleksanterinkatu 15",
                city: "Helsinki",
                postal_code: "00100",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "Kone",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("4200"),
                years_employed: NumberInt(4)
            }],
            bank_accounts: {
                iban: "FI1112345600000001",
                balance: NumberDecimal("12000")
            }
        },

        {
            _id: new ObjectId(),
            national_id: "230585-456B",
            first_name: "Jussi",
            last_name: "Lahtinen",
            date_of_birth: new Date("1985-05-23"),
            email: "jussi.lahtinen@example.fi",
            phone: "+358402222222",
            created_at: Timestamp(),
            addresses: [{
                street: "Hämeenkatu 20",
                city: "Tampere",
                postal_code: "33100",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "UPM",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("3800"),
                years_employed: NumberInt(6)
            }],
            bank_accounts: {
                iban: "FI1112345600000002",
                balance: NumberDecimal("8000")
            }
        },

        {
            _id: new ObjectId(),
            national_id: "150478-789C",
            first_name: "Laura",
            last_name: "Makinen",
            date_of_birth: new Date("1978-04-15"),
            email: "laura.makinen@example.fi",
            phone: "+358403333333",
            created_at: Timestamp(),
            addresses: [{
                street: "Satakunnankatu 5",
                city: "Turku",
                postal_code: "20100",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "Neste",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("5200"),
                years_employed: NumberInt(10)
            }],
            bank_accounts: {
                iban: "FI1112345600000003",
                balance: NumberDecimal("25000")
            }
        },

        {
            _id: new ObjectId(),
            national_id: "080692-111D",
            first_name: "Petri",
            last_name: "Nieminen",
            date_of_birth: new Date("1992-06-08"),
            email: "petri.nieminen@example.fi",
            phone: "+358404444444",
            created_at: Timestamp(),
            addresses: [{
                street: "Kauppakatu 7",
                city: "Oulu",
                postal_code: "90100",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "TietoEVRY",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("4600"),
                years_employed: NumberInt(3)
            }],
            bank_accounts: {
                iban: "FI1112345600000004",
                balance: NumberDecimal("14000")
            }
        },

        {
            _id: new ObjectId(),
            national_id: "010180-222E",
            first_name: "Sari",
            last_name: "Heikkinen",
            date_of_birth: new Date("1980-01-01"),
            email: "sari.heikkinen@example.fi",
            phone: "+358405555555",
            created_at: Timestamp(),
            addresses: [{
                street: "Puistokatu 3",
                city: "Jyvaskyla",
                postal_code: "40100",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "Valmet",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("3900"),
                years_employed: NumberInt(7)
            }],
            bank_accounts: {
                iban: "FI1112345600000005",
                balance: NumberDecimal("9500")
            }
        },

        {
            _id: new ObjectId(),
            national_id: "300887-333F",
            first_name: "Markus",
            last_name: "Salonen",
            date_of_birth: new Date("1987-08-30"),
            email: "markus.salonen@example.fi",
            phone: "+358406666666",
            created_at: Timestamp(),
            addresses: [{
                street: "Torikatu 12",
                city: "Kuopio",
                postal_code: "70100",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "StoraEnso",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("4700"),
                years_employed: NumberInt(8)
            }],
            bank_accounts: {
                iban: "FI1112345600000006",
                balance: NumberDecimal("18000")
            }
        },

        {
            _id: new ObjectId(),
            national_id: "140295-444G",
            first_name: "Emilia",
            last_name: "Koskinen",
            date_of_birth: new Date("1995-02-14"),
            email: "emilia.koskinen@example.fi",
            phone: "+358407777777",
            created_at: Timestamp(),
            addresses: [{
                street: "Linnankatu 9",
                city: "Lahti",
                postal_code: "15100",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "Finnair",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("4100"),
                years_employed: NumberInt(2)
            }],
            bank_accounts: {
                iban: "FI1112345600000007",
                balance: NumberDecimal("6000")
            }
        },

        {
            _id: new ObjectId(),
            national_id: "220176-555H",
            first_name: "Timo",
            last_name: "Rantanen",
            date_of_birth: new Date("1976-01-22"),
            email: "timo.rantanen@example.fi",
            phone: "+358408888888",
            created_at: Timestamp(),
            addresses: [{
                street: "Keskuskatu 4",
                city: "Espoo",
                postal_code: "02100",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "ABB",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("5500"),
                years_employed: NumberInt(12)
            }],
            bank_accounts: {
                iban: "FI1112345600000008",
                balance: NumberDecimal("32000")
            }
        },

        {
            _id: new ObjectId(),
            national_id: "091299-666I",
            first_name: "Noora",
            last_name: "Lehtonen",
            date_of_birth: new Date("1999-12-09"),
            email: "noora.lehtonen@example.fi",
            phone: "+358409999999",
            created_at: Timestamp(),
            addresses: [{
                street: "Rautatienkatu 2",
                city: "Vantaa",
                postal_code: "01300",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "Wartsila",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("3700"),
                years_employed: NumberInt(1)
            }],
            bank_accounts: {
                iban: "FI1112345600000009",
                balance: NumberDecimal("4000")
            }
        },

        {
            _id: new ObjectId(),
            national_id: "170483-777J",
            first_name: "Ville",
            last_name: "Aaltonen",
            date_of_birth: new Date("1983-04-17"),
            email: "ville.aaltonen@example.fi",
            phone: "+358401010101",
            created_at: Timestamp(),
            addresses: [{
                street: "Merikatu 11",
                city: "Helsinki",
                postal_code: "00140",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "Supercell",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("6000"),
                years_employed: NumberInt(9)
            }],
            bank_accounts: {
                iban: "FI1112345600000010",
                balance: NumberDecimal("45000")
            }
        }

    ]);

    print("Customers inserted successfully. Count: " + result.insertedCount);

} catch (error) {
    printjson(error);
}


// -------------------------------
// 2️⃣ Loan Products
// -------------------------------
try {
    const result = db.loan_products.insertMany([
        {
            product_name: "Home Loan",
            min_interest_rate: NumberDecimal("2.5"),
            max_interest_rate: NumberDecimal("6.5"),
            max_tenure_months: NumberInt(360),
            requires_collateral: true
        },
        {
            product_name: "Car Loan",
            min_interest_rate: NumberDecimal("3.0"),
            max_interest_rate: NumberDecimal("7.0"),
            max_tenure_months: NumberInt(84),
            requires_collateral: true
        },
        {
            product_name: "Personal Loan",
            min_interest_rate: NumberDecimal("5.0"),
            max_interest_rate: NumberDecimal("15.0"),
            max_tenure_months: NumberInt(60),
            requires_collateral: false
        },
        {
            product_name: "Education Loan",
            min_interest_rate: NumberDecimal("4.0"),
            max_interest_rate: NumberDecimal("10.0"),
            max_tenure_months: NumberInt(120),
            requires_collateral: false
        },
        {
            product_name: "Business Loan",
            min_interest_rate: NumberDecimal("6.0"),
            max_interest_rate: NumberDecimal("20.0"),
            max_tenure_months: NumberInt(180),
            requires_collateral: true
        },
        {
            product_name: "Agricultural Loan",
            min_interest_rate: NumberDecimal("4.5"),
            max_interest_rate: NumberDecimal("12.0"),
            max_tenure_months: NumberInt(120),
            requires_collateral: true
        },
        {
            product_name: "Microfinance Loan",
            min_interest_rate: NumberDecimal("8.0"),
            max_interest_rate: NumberDecimal("25.0"),
            max_tenure_months: NumberInt(36),
            requires_collateral: false
        },
        {
            product_name: "Green Loan",
            min_interest_rate: NumberDecimal("3.5"),
            max_interest_rate: NumberDecimal("9.0"),
            max_tenure_months: NumberInt(120),
            requires_collateral: true
        },
        {
            product_name: "Gold Loan",
            min_interest_rate: NumberDecimal("7.0"),
            max_interest_rate: NumberDecimal("18.0"),
            max_tenure_months: NumberInt(60),
            requires_collateral: true

        },
        {
            product_name: "Payday Loan",
            min_interest_rate: NumberDecimal("10.0"),
            max_interest_rate: NumberDecimal("30.0"),
            max_tenure_months: NumberInt(12),
            requires_collateral: false
        }
    ]);

    print("Loan products inserted successfully. Count: " + result.insertedCount);
} catch (error) {
    print("Error inserting loan products: " + error);
}


// -------------------------------
// 3️⃣ Loan Application
// -------------------------------
try {
    const result = db.loan_applications.insertMany([
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c01"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b01"),
            requested_amount: NumberDecimal("50000.00"),
            requested_tenure: NumberInt(36),
            status: "PENDING",
            applied_at: Timestamp()
        },
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c02"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b02"),
            requested_amount: NumberDecimal("150000.00"),
            requested_tenure: NumberInt(120),
            status: "APPROVED",
            applied_at: Timestamp()
        },
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c03"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b03"),
            requested_amount: NumberDecimal("25000.00"),
            requested_tenure: NumberInt(24),
            status: "REJECTED",
            applied_at: Timestamp()
        },
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c04"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b04"),
            requested_amount: NumberDecimal("80000.00"),
            requested_tenure: NumberInt(60),
            status: "IN_REVIEW",
            applied_at: Timestamp()
        },
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c05"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b05"),
            requested_amount: NumberDecimal("120000.00"),
            requested_tenure: NumberInt(180),
            status: "PENDING",
            applied_at: Timestamp()
        },
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c06"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b06"),
            requested_amount: NumberDecimal("40000.00"),
            requested_tenure: NumberInt(48),
            status: "WITHDRAWN",
            applied_at: Timestamp()
        },
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c07"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b07"),
            requested_amount: NumberDecimal("90000.00"),
            requested_tenure: NumberInt(72),
            status: "APPROVED",
            applied_at: Timestamp()
        },
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c08"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b08"),
            requested_amount: NumberDecimal("60000.00"),
            requested_tenure: NumberInt(36),
            status: "PENDING",
            applied_at: Timestamp()
        },
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c09"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b09"),
            requested_amount: NumberDecimal("70000.00"),
            requested_tenure: NumberInt(60),
            status: "REJECTED",
            applied_at: Timestamp()
        },
        {
            customer_id: ObjectId("64f1c5e0a5c8f2001a2b1c10"),
            product_id: ObjectId("64f1c5e0a5c8f2001a2b1b10"),
            requested_amount: NumberDecimal("100000.00"),
            requested_tenure: NumberInt(120),
            status: "IN_REVIEW",
            applied_at: Timestamp()
        }
    ]);

    print("Loan applications inserted successfully. Count: " + result.insertedCount);
} catch (error) {
    print("Error inserting loan applications: " + error);
}


// -------------------------------
// 4️⃣ risk assessments
// -------------------------------
const loanApps = db.loan_applications.find().limit(10).toArray();

if (loanApps.length < 10) {
    print("Not enough loan applications to insert 10 risk assessments.");
} else {
    const riskGrades = ["AAA", "AA", "A", "BBB", "BB", "B", "CCC", "CC", "C", "D"];

    const riskAssessments = loanApps.map((app, idx) => ({
        _id: new ObjectId(),
        application_id: app._id,
        credit_score: NumberInt(850 - idx * 40),
        debt_to_income_ratio: NumberDecimal((0.25 + idx * 0.07).toFixed(2)),
        risk_grade: riskGrades[idx],
        approved: ["AAA", "AA", "A", "BBB", "BB"].includes(riskGrades[idx]),
        assessed_at: new Timestamp(Math.floor(Date.now() / 1000), idx + 1)
    }));

    try {
        const res = db.risk_assessments.insertMany(riskAssessments);
        print("Inserted risk assessments:", res.insertedCount);
    } catch (e) {
        print("Error inserting risk assessments:", e);
    }
}


// -------------------------------
// 5️⃣ Loans
// -------------------------------
if (loanApps.length < 10) {
    print("Not enough loan applications to insert loans.");
} else {

    const loans = [
        {
            principal_amount: "250000",
            interest_rate: "3.5",
            tenure_months: 240,
            monthly_emi: "1450",
            outstanding_balance: "240000",
            status: "ACTIVE",
            collateral: [{ collateral_type: "REAL_ESTATE", estimated_value: "320000", description: "Helsinki residential apartment" }]
        },
        {
            principal_amount: "30000",
            interest_rate: "5.0",
            tenure_months: 60,
            monthly_emi: "566",
            outstanding_balance: "25000",
            status: "ACTIVE",
            collateral: [{ collateral_type: "VEHICLE", estimated_value: "28000", description: "Toyota Corolla 2023" }]
        },
        {
            principal_amount: "15000",
            interest_rate: "8.0",
            tenure_months: 48,
            monthly_emi: "366",
            outstanding_balance: "14000",
            status: "ACTIVE"
        },
        {
            principal_amount: "40000",
            interest_rate: "4.5",
            tenure_months: 120,
            monthly_emi: "414",
            outstanding_balance: "38000",
            status: "ACTIVE"
        },
        {
            principal_amount: "75000",
            interest_rate: "6.0",
            tenure_months: 180,
            monthly_emi: "632",
            outstanding_balance: "72000",
            status: "ACTIVE",
            collateral: [{ collateral_type: "GOLD", estimated_value: "85000", description: "Gold assets pledged" }]
        },
        {
            principal_amount: "180000",
            interest_rate: "7.5",
            tenure_months: 300,
            monthly_emi: "1335",
            outstanding_balance: "175000",
            status: "DEFAULTED",
            collateral: [{ collateral_type: "REAL_ESTATE", estimated_value: "210000", description: "Commercial property" }]
        },
        {
            principal_amount: "20000",
            interest_rate: "9.0",
            tenure_months: 72,
            monthly_emi: "398",
            outstanding_balance: "18000",
            status: "ACTIVE"
        },
        {
            principal_amount: "10000",
            interest_rate: "10.0",
            tenure_months: 24,
            monthly_emi: "461",
            outstanding_balance: "0",
            status: "CLOSED"
        },
        {
            principal_amount: "5000",
            interest_rate: "12.0",
            tenure_months: 36,
            monthly_emi: "166",
            outstanding_balance: "4500",
            status: "RESTRUCTURED"
        },
        {
            principal_amount: "220000",
            interest_rate: "3.8",
            tenure_months: 360,
            monthly_emi: "1030",
            outstanding_balance: "215000",
            status: "PENDING_DISBURSEMENT",
            collateral: [{ collateral_type: "REAL_ESTATE", estimated_value: "300000", description: "Detached house" }]
        }
    ];

    const loansToInsert = loans.map((loan, idx) => ({
        _id: new ObjectId(),
        application_id: loanApps[idx]._id,
        principal_amount: NumberDecimal(loan.principal_amount),
        interest_rate: NumberDecimal(loan.interest_rate),
        tenure_months: NumberInt(loan.tenure_months),
        monthly_emi: NumberDecimal(loan.monthly_emi),
        outstanding_balance: NumberDecimal(loan.outstanding_balance),
        status: loan.status,
        disbursed_at: new Timestamp(Math.floor(Date.now() / 1000), idx + 1),
        collateral: loan.collateral ? loan.collateral.map(c => ({
            collateral_type: c.collateral_type,
            estimated_value: NumberDecimal(c.estimated_value),
            description: c.description
        })) : []
    }));

    try {
        const result = db.loans.insertMany(loansToInsert);
        print("Loans inserted successfully. Count: " + result.insertedCount);
    } catch (error) {
        print("Error inserting loans:", error);
    }
}

// -------------------------------
// 6️⃣ Repayments Collection (Optional / separate)
// -------------------------------
const loans = db.loans.find().limit(10).toArray();

const repaymentSchedules = loans.map((loan, idx) => ({
    loan_id: loan._id,
    schedule_id: new ObjectId()
}));

const repaymentsData = [
    1450, 566, 366, 414, 632, 1335, 398, 461, 166, 1030
];

const paymentMethods = [
    "AUTO_DEBIT", "BANK_TRANSFER", "DEBIT_CARD", "CREDIT_CARD", "AUTO_DEBIT",
    "CHEQUE", "BANK_TRANSFER", "AUTO_DEBIT", "CASH", "AUTO_DEBIT"
];

const repaymentsToInsert = repaymentSchedules.map((sched, idx) => ({
    _id: new ObjectId(),
    loan_id: sched.loan_id,
    schedule_id: sched.schedule_id,
    amount_paid: NumberDecimal(repaymentsData[idx].toString()),
    payment_date: new Timestamp(Math.floor(Date.now() / 1000), idx + 1),
    payment_method: paymentMethods[idx]
}));

try {
    const result = db.repayments.insertMany(repaymentsToInsert);
    print("Repayments inserted successfully. Count: " + result.insertedCount);
} catch (error) {
    print("Error inserting repayments:", error);
}

// -------------------------------
// 7️⃣ Audig logs
// -------------------------------
const riskAssessments = db.risk_assessments.find().limit(10).toArray();
const repayments = db.repayments.find().limit(10).toArray();
const customers = db.customers.find().limit(10).toArray();

const auditLogs = [
    {
        entity_name: "LOAN_APPLICATION",
        entity_id: loanApps[0]._id,
        action: "CREATE",
        performed_by: "customer_portal",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 1),
        details: { note: "Loan application submitted by customer" }
    },
    {
        entity_name: "RISK_ASSESSMENT",
        entity_id: riskAssessments[1]._id,
        action: "APPROVE",
        performed_by: "risk_engine",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 2),
        details: { credit_score: 780, risk_grade: "AA" }
    },
    {
        entity_name: "LOAN",
        entity_id: loans[2]._id,
        action: "CREATE",
        performed_by: "loan_service",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 3),
        details: { status: "ACTIVE" }
    },
    {
        entity_name: "LOAN",
        entity_id: loans[3]._id,
        action: "UPDATE",
        performed_by: "loan_service",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 4),
        details: { field_updated: "outstanding_balance" }
    },
    {
        entity_name: "REPAYMENT",
        entity_id: repayments[4]._id,
        action: "CREATE",
        performed_by: "auto_debit_system",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 5),
        details: { payment_method: "AUTO_DEBIT" }
    },
    {
        entity_name: "LOAN_APPLICATION",
        entity_id: loanApps[5]._id,
        action: "REJECT",
        performed_by: "risk_engine",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 6),
        details: { reason: "Low credit score" }
    },
    {
        entity_name: "CUSTOMER",
        entity_id: customers[6]._id,
        action: "VIEW",
        performed_by: "admin_user",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 7)
    },
    {
        entity_name: "LOAN",
        entity_id: loans[7]._id,
        action: "UPDATE",
        performed_by: "collection_team",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 8),
        details: { status_changed_to: "RESTRUCTURED" }
    },
    {
        entity_name: "LOAN",
        entity_id: loans[8]._id,
        action: "DELETE",
        performed_by: "system_admin",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 9),
        details: { note: "Loan record archived" }
    },
    {
        entity_name: "LOAN_APPLICATION",
        entity_id: loanApps[9]._id,
        action: "APPROVE",
        performed_by: "credit_committee",
        performed_at: new Timestamp(Math.floor(Date.now() / 1000), 10),
        details: { approved_amount: NumberDecimal("220000") }
    }
];

try {
    const result = db.audit_logs.insertMany(auditLogs);
    print("Audit logs inserted successfully. Count: " + result.insertedCount);
} catch (error) {
    print("Error inserting audit logs:", error);
}

// -------------------------------
// 8️⃣ Repayment Schedules
// -------------------------------
var loanMap = {};
loans.forEach(function (loan, index) {
    loanMap["loan" + (index + 1)] = loan._id;
});

const repaymentSchedule = [];

for (const [key, loanId] of Object.entries(loanMap)) {
    for (let i = 1; i <= 10; i++) {
        repaymentSchedule.push({
            schedule_id: ObjectId(),                 // unique ID
            loan_id: loanId,                         // reference to loan
            installment_number: NumberInt(i),        // must be int
            due_date: new Date(2026, i - 1, 1),      // month index 0-based
            amount_due: NumberDecimal("1450.00"),    // decimal
            amount_paid: NumberDecimal("0.00"),      // decimal
            status: "PENDING",                        // enum
            paid_date: null,                          // nullable timestamp
            late_fees: NumberDecimal("0.00")         // decimal
        });
    }
}

db.repayment_schedules.insertMany(repaymentSchedule);
print("Inserted repayment schedules:", repaymentSchedule.length);


// db.bank_accounts.insertMany([
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(0).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000001",
//         balance: 15000,
//         accountType: "Savings",
//         currency: "EUR",
//         createdAt: new Date()
//     },
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(1).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000002",
//         balance: 8200,
//         accountType: "Checking",
//         currency: "EUR",
//         createdAt: new Date()
//     },
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(2).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000003",
//         balance: 12000,
//         accountType: "Savings",
//         currency: "EUR",
//         createdAt: new Date()
//     },
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(3).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000004",
//         balance: 4300,
//         accountType: "Checking",
//         currency: "EUR",
//         createdAt: new Date()
//     },
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(4).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000005",
//         balance: 9800,
//         accountType: "Savings",
//         currency: "EUR",
//         createdAt: new Date()
//     },
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(5).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000006",
//         balance: 25000,
//         accountType: "Savings",
//         currency: "EUR",
//         createdAt: new Date()
//     },
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(6).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000007",
//         balance: 6100,
//         accountType: "Checking",
//         currency: "EUR",
//         createdAt: new Date()
//     },
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(7).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000008",
//         balance: 32000,
//         accountType: "Savings",
//         currency: "EUR",
//         createdAt: new Date()
//     },
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(8).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000009",
//         balance: 5400,
//         accountType: "Checking",
//         currency: "EUR",
//         createdAt: new Date()
//     },
//     {
//         _id: ObjectId(),
//         customerId: db.customers.find().skip(9).limit(1).toArray()[0]._id,
//         iban: "FI0012345600000010",
//         balance: 41000,
//         accountType: "Savings",
//         currency: "EUR",
//         createdAt: new Date()
//     }
// ]);



print("✅ Banking demo data inserted successfully!");
