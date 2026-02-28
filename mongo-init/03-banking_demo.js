// ===============================
// BANKING SYSTEM DEMO - MONGODB
// ===============================

// Use database
db = db.getSiblingDB("banking");

// -------------------------------
// 1️⃣ Customers
// -------------------------------
const customerId = ObjectId();
try {
    const result = db.customers.insertMany([

        {
            _id: ObjectId(),
            national_id: "120390-123A",
            first_name: "Anna",
            last_name: "Korhonen",
            date_of_birth: ISODate("1990-03-12"),
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
                years_employed: 4
            }],
            bank_accounts: {
                iban: "FI1112345600000001",
                balance: NumberDecimal("12000")
            }
        },

        {
            _id: ObjectId(),
            national_id: "230585-456B",
            first_name: "Jussi",
            last_name: "Lahtinen",
            date_of_birth: ISODate("1985-05-23"),
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
                years_employed: 6
            }],
            bank_accounts: {
                iban: "FI1112345600000002",
                balance: NumberDecimal("8000")
            }
        },

        {
            _id: ObjectId(),
            national_id: "150478-789C",
            first_name: "Laura",
            last_name: "Mäkinen",
            date_of_birth: ISODate("1978-04-15"),
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
                years_employed: 10
            }],
            bank_accounts: {
                iban: "FI1112345600000003",
                balance: NumberDecimal("25000")
            }
        },

        {
            _id: ObjectId(),
            national_id: "080692-111D",
            first_name: "Petri",
            last_name: "Nieminen",
            date_of_birth: ISODate("1992-06-08"),
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
                years_employed: 3
            }],
            bank_accounts: {
                iban: "FI1112345600000004",
                balance: NumberDecimal("14000")
            }
        },

        {
            _id: ObjectId(),
            national_id: "010180-222E",
            first_name: "Sari",
            last_name: "Heikkinen",
            date_of_birth: ISODate("1980-01-01"),
            email: "sari.heikkinen@example.fi",
            phone: "+358405555555",
            created_at: Timestamp(),
            addresses: [{
                street: "Puistokatu 3",
                city: "Jyväskylä",
                postal_code: "40100",
                country: "Finland"
            }],
            employment_details: [{
                employer_name: "Valmet",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("3900"),
                years_employed: 7
            }],
            bank_accounts: {
                iban: "FI1112345600000005",
                balance: NumberDecimal("9500")
            }
        },

        {
            _id: ObjectId(),
            national_id: "300887-333F",
            first_name: "Markus",
            last_name: "Salonen",
            date_of_birth: ISODate("1987-08-30"),
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
                employer_name: "Stora Enso",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("4700"),
                years_employed: 8
            }],
            bank_accounts: {
                iban: "FI1112345600000006",
                balance: NumberDecimal("18000")
            }
        },

        {
            _id: ObjectId(),
            national_id: "140295-444G",
            first_name: "Emilia",
            last_name: "Koskinen",
            date_of_birth: ISODate("1995-02-14"),
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
                years_employed: 2
            }],
            bank_accounts: {
                iban: "FI1112345600000007",
                balance: NumberDecimal("6000")
            }
        },

        {
            _id: ObjectId(),
            national_id: "220176-555H",
            first_name: "Timo",
            last_name: "Rantanen",
            date_of_birth: ISODate("1976-01-22"),
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
                years_employed: 12
            }],
            bank_accounts: {
                iban: "FI1112345600000008",
                balance: NumberDecimal("32000")
            }
        },

        {
            _id: ObjectId(),
            national_id: "091299-666I",
            first_name: "Noora",
            last_name: "Lehtonen",
            date_of_birth: ISODate("1999-12-09"),
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
                employer_name: "Wärtsilä",
                employment_type: "FULL_TIME",
                monthly_income: NumberDecimal("3700"),
                years_employed: 1
            }],
            bank_accounts: {
                iban: "FI1112345600000009",
                balance: NumberDecimal("4000")
            }
        },

        {
            _id: ObjectId(),
            national_id: "170483-777J",
            first_name: "Ville",
            last_name: "Aaltonen",
            date_of_birth: ISODate("1983-04-17"),
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
                years_employed: 9
            }],
            bank_accounts: {
                iban: "FI1112345600000010",
                balance: NumberDecimal("45000")
            }
        }

    ]);

    print("Customers inserted successfully. Count: " + result.insertedCount);

} catch (error) {
    print("Error inserting customers: " + error);
}

// -------------------------------
// 2️⃣ Loan Products
// -------------------------------
try {
    const result = db.loan_products.insertMany([

        {
            _id: ObjectId(),
            product_name: "Home Loan",
            min_interest_rate: NumberDecimal("2.5"),
            max_interest_rate: NumberDecimal("6.5"),
            max_tenure_months: 360,
            requires_collateral: true
        },
        {
            _id: ObjectId(),
            product_name: "Car Loan",
            min_interest_rate: NumberDecimal("3.0"),
            max_interest_rate: NumberDecimal("8.0"),
            max_tenure_months: 84,
            requires_collateral: true
        },
        {
            _id: ObjectId(),
            product_name: "Personal Loan",
            min_interest_rate: NumberDecimal("5.5"),
            max_interest_rate: NumberDecimal("12.0"),
            max_tenure_months: 60,
            requires_collateral: false
        },
        {
            _id: ObjectId(),
            product_name: "Education Loan",
            min_interest_rate: NumberDecimal("2.0"),
            max_interest_rate: NumberDecimal("5.0"),
            max_tenure_months: 180,
            requires_collateral: false
        },
        {
            _id: ObjectId(),
            product_name: "Business Loan",
            min_interest_rate: NumberDecimal("4.5"),
            max_interest_rate: NumberDecimal("10.0"),
            max_tenure_months: 240,
            requires_collateral: true
        },
        {
            _id: ObjectId(),
            product_name: "Mortgage Loan",
            min_interest_rate: NumberDecimal("2.8"),
            max_interest_rate: NumberDecimal("6.0"),
            max_tenure_months: 300,
            requires_collateral: true
        },
        {
            _id: ObjectId(),
            product_name: "Renovation Loan",
            min_interest_rate: NumberDecimal("3.5"),
            max_interest_rate: NumberDecimal("9.0"),
            max_tenure_months: 120,
            requires_collateral: false
        },
        {
            _id: ObjectId(),
            product_name: "Travel Loan",
            min_interest_rate: NumberDecimal("6.0"),
            max_interest_rate: NumberDecimal("14.0"),
            max_tenure_months: 36,
            requires_collateral: false
        },
        {
            _id: ObjectId(),
            product_name: "Medical Loan",
            min_interest_rate: NumberDecimal("4.0"),
            max_interest_rate: NumberDecimal("9.5"),
            max_tenure_months: 72,
            requires_collateral: false
        },
        {
            _id: ObjectId(),
            product_name: "Agricultural Loan",
            min_interest_rate: NumberDecimal("3.2"),
            max_interest_rate: NumberDecimal("7.5"),
            max_tenure_months: 180,
            requires_collateral: true
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
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_1"),
            product_id: ObjectId("PRODUCT_ID_1"),
            requested_amount: NumberDecimal("250000"),
            requested_tenure: 240,
            status: "APPROVED",
            applied_at: Timestamp()
        },
        {
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_2"),
            product_id: ObjectId("PRODUCT_ID_2"),
            requested_amount: NumberDecimal("30000"),
            requested_tenure: 60,
            status: "APPROVED",
            applied_at: Timestamp()
        },
        {
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_3"),
            product_id: ObjectId("PRODUCT_ID_3"),
            requested_amount: NumberDecimal("15000"),
            requested_tenure: 48,
            status: "PENDING",
            applied_at: Timestamp()
        },
        {
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_4"),
            product_id: ObjectId("PRODUCT_ID_4"),
            requested_amount: NumberDecimal("40000"),
            requested_tenure: 120,
            status: "IN_REVIEW",
            applied_at: Timestamp()
        },
        {
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_5"),
            product_id: ObjectId("PRODUCT_ID_5"),
            requested_amount: NumberDecimal("75000"),
            requested_tenure: 180,
            status: "APPROVED",
            applied_at: Timestamp()
        },
        {
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_6"),
            product_id: ObjectId("PRODUCT_ID_6"),
            requested_amount: NumberDecimal("180000"),
            requested_tenure: 300,
            status: "REJECTED",
            applied_at: Timestamp()
        },
        {
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_7"),
            product_id: ObjectId("PRODUCT_ID_7"),
            requested_amount: NumberDecimal("20000"),
            requested_tenure: 72,
            status: "APPROVED",
            applied_at: Timestamp()
        },
        {
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_8"),
            product_id: ObjectId("PRODUCT_ID_8"),
            requested_amount: NumberDecimal("10000"),
            requested_tenure: 24,
            status: "WITHDRAWN",
            applied_at: Timestamp()
        },
        {
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_9"),
            product_id: ObjectId("PRODUCT_ID_9"),
            requested_amount: NumberDecimal("5000"),
            requested_tenure: 36,
            status: "PENDING",
            applied_at: Timestamp()
        },
        {
            _id: ObjectId(),
            customer_id: ObjectId("CUSTOMER_ID_10"),
            product_id: ObjectId("PRODUCT_ID_10"),
            requested_amount: NumberDecimal("220000"),
            requested_tenure: 360,
            status: "APPROVED",
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
try {
    const result = db.risk_assessments.insertMany([

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_1"),
            credit_score: 820,
            debt_to_income_ratio: NumberDecimal("0.25"),
            risk_grade: "AAA",
            approved: true,
            assessed_at: Timestamp()
        },
        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_2"),
            credit_score: 780,
            debt_to_income_ratio: NumberDecimal("0.32"),
            risk_grade: "AA",
            approved: true,
            assessed_at: Timestamp()
        },
        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_3"),
            credit_score: 740,
            debt_to_income_ratio: NumberDecimal("0.40"),
            risk_grade: "A",
            approved: true,
            assessed_at: Timestamp()
        },
        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_4"),
            credit_score: 690,
            debt_to_income_ratio: NumberDecimal("0.48"),
            risk_grade: "BBB",
            approved: true,
            assessed_at: Timestamp()
        },
        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_5"),
            credit_score: 650,
            debt_to_income_ratio: NumberDecimal("0.55"),
            risk_grade: "BB",
            approved: true,
            assessed_at: Timestamp()
        },
        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_6"),
            credit_score: 600,
            debt_to_income_ratio: NumberDecimal("0.62"),
            risk_grade: "B",
            approved: false,
            assessed_at: Timestamp()
        },
        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_7"),
            credit_score: 560,
            debt_to_income_ratio: NumberDecimal("0.70"),
            risk_grade: "CCC",
            approved: false,
            assessed_at: Timestamp()
        },
        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_8"),
            credit_score: 520,
            debt_to_income_ratio: NumberDecimal("0.78"),
            risk_grade: "CC",
            approved: false,
            assessed_at: Timestamp()
        },
        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_9"),
            credit_score: 480,
            debt_to_income_ratio: NumberDecimal("0.85"),
            risk_grade: "C",
            approved: false,
            assessed_at: Timestamp()
        },
        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_10"),
            credit_score: 420,
            debt_to_income_ratio: NumberDecimal("0.95"),
            risk_grade: "D",
            approved: false,
            assessed_at: Timestamp()
        }

    ]);

    print("Risk assessments inserted successfully. Count: " + result.insertedCount);

} catch (error) {
    print("Error inserting risk assessments: " + error);
}

// -------------------------------
// 5️⃣ Loans
// -------------------------------
try {
    const result = db.loans.insertMany([

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_1"),
            principal_amount: NumberDecimal("250000"),
            interest_rate: NumberDecimal("3.5"),
            tenure_months: 240,
            monthly_emi: NumberDecimal("1450"),
            outstanding_balance: NumberDecimal("240000"),
            status: "ACTIVE",
            disbursed_at: Timestamp(),
            collateral: [{
                collateral_type: "REAL_ESTATE",
                estimated_value: NumberDecimal("320000"),
                description: "Helsinki residential apartment"
            }]
        },

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_2"),
            principal_amount: NumberDecimal("30000"),
            interest_rate: NumberDecimal("5.0"),
            tenure_months: 60,
            monthly_emi: NumberDecimal("566"),
            outstanding_balance: NumberDecimal("25000"),
            status: "ACTIVE",
            disbursed_at: Timestamp(),
            collateral: [{
                collateral_type: "VEHICLE",
                estimated_value: NumberDecimal("28000"),
                description: "Toyota Corolla 2023"
            }]
        },

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_3"),
            principal_amount: NumberDecimal("15000"),
            interest_rate: NumberDecimal("8.0"),
            tenure_months: 48,
            monthly_emi: NumberDecimal("366"),
            outstanding_balance: NumberDecimal("14000"),
            status: "ACTIVE",
            disbursed_at: Timestamp()
        },

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_4"),
            principal_amount: NumberDecimal("40000"),
            interest_rate: NumberDecimal("4.5"),
            tenure_months: 120,
            monthly_emi: NumberDecimal("414"),
            outstanding_balance: NumberDecimal("38000"),
            status: "ACTIVE",
            disbursed_at: Timestamp()
        },

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_5"),
            principal_amount: NumberDecimal("75000"),
            interest_rate: NumberDecimal("6.0"),
            tenure_months: 180,
            monthly_emi: NumberDecimal("632"),
            outstanding_balance: NumberDecimal("72000"),
            status: "ACTIVE",
            disbursed_at: Timestamp(),
            collateral: [{
                collateral_type: "GOLD",
                estimated_value: NumberDecimal("85000"),
                description: "Gold assets pledged"
            }]
        },

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_6"),
            principal_amount: NumberDecimal("180000"),
            interest_rate: NumberDecimal("7.5"),
            tenure_months: 300,
            monthly_emi: NumberDecimal("1335"),
            outstanding_balance: NumberDecimal("175000"),
            status: "DEFAULTED",
            disbursed_at: Timestamp(),
            collateral: [{
                collateral_type: "REAL_ESTATE",
                estimated_value: NumberDecimal("210000"),
                description: "Commercial property"
            }]
        },

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_7"),
            principal_amount: NumberDecimal("20000"),
            interest_rate: NumberDecimal("9.0"),
            tenure_months: 72,
            monthly_emi: NumberDecimal("398"),
            outstanding_balance: NumberDecimal("18000"),
            status: "ACTIVE",
            disbursed_at: Timestamp()
        },

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_8"),
            principal_amount: NumberDecimal("10000"),
            interest_rate: NumberDecimal("10.0"),
            tenure_months: 24,
            monthly_emi: NumberDecimal("461"),
            outstanding_balance: NumberDecimal("0"),
            status: "CLOSED",
            disbursed_at: Timestamp()
        },

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_9"),
            principal_amount: NumberDecimal("5000"),
            interest_rate: NumberDecimal("12.0"),
            tenure_months: 36,
            monthly_emi: NumberDecimal("166"),
            outstanding_balance: NumberDecimal("4500"),
            status: "RESTRUCTURED",
            disbursed_at: Timestamp()
        },

        {
            _id: ObjectId(),
            application_id: ObjectId("APPLICATION_ID_10"),
            principal_amount: NumberDecimal("220000"),
            interest_rate: NumberDecimal("3.8"),
            tenure_months: 360,
            monthly_emi: NumberDecimal("1030"),
            outstanding_balance: NumberDecimal("215000"),
            status: "PENDING_DISBURSEMENT",
            collateral: [{
                collateral_type: "REAL_ESTATE",
                estimated_value: NumberDecimal("300000"),
                description: "Detached house"
            }]
        }

    ]);

    print("Loans inserted successfully. Count: " + result.insertedCount);

} catch (error) {
    print("Error inserting loans: " + error);
}
// -------------------------------
// 6  Repayments Collection (Optional / separate)
// -------------------------------
try {
    const result = db.repayments.insertMany([

        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_1"),
            schedule_id: ObjectId("SCHEDULE_ID_1"),
            amount_paid: NumberDecimal("1450"),
            payment_date: Timestamp(),
            payment_method: "AUTO_DEBIT"
        },
        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_2"),
            schedule_id: ObjectId("SCHEDULE_ID_2"),
            amount_paid: NumberDecimal("566"),
            payment_date: Timestamp(),
            payment_method: "BANK_TRANSFER"
        },
        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_3"),
            schedule_id: ObjectId("SCHEDULE_ID_3"),
            amount_paid: NumberDecimal("366"),
            payment_date: Timestamp(),
            payment_method: "DEBIT_CARD"
        },
        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_4"),
            schedule_id: ObjectId("SCHEDULE_ID_4"),
            amount_paid: NumberDecimal("414"),
            payment_date: Timestamp(),
            payment_method: "CREDIT_CARD"
        },
        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_5"),
            schedule_id: ObjectId("SCHEDULE_ID_5"),
            amount_paid: NumberDecimal("632"),
            payment_date: Timestamp(),
            payment_method: "AUTO_DEBIT"
        },
        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_6"),
            schedule_id: ObjectId("SCHEDULE_ID_6"),
            amount_paid: NumberDecimal("1335"),
            payment_date: Timestamp(),
            payment_method: "CHEQUE"
        },
        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_7"),
            schedule_id: ObjectId("SCHEDULE_ID_7"),
            amount_paid: NumberDecimal("398"),
            payment_date: Timestamp(),
            payment_method: "BANK_TRANSFER"
        },
        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_8"),
            schedule_id: ObjectId("SCHEDULE_ID_8"),
            amount_paid: NumberDecimal("461"),
            payment_date: Timestamp(),
            payment_method: "AUTO_DEBIT"
        },
        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_9"),
            schedule_id: ObjectId("SCHEDULE_ID_9"),
            amount_paid: NumberDecimal("166"),
            payment_date: Timestamp(),
            payment_method: "CASH"
        },
        {
            _id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_10"),
            schedule_id: ObjectId("SCHEDULE_ID_10"),
            amount_paid: NumberDecimal("1030"),
            payment_date: Timestamp(),
            payment_method: "AUTO_DEBIT"
        }

    ]);

    print("Repayments inserted successfully. Count: " + result.insertedCount);

} catch (error) {
    print("Error inserting repayments: " + error);
}


// -------------------------------
// 7️⃣ Audig logs
// -------------------------------

try {
    const result = db.audit_logs.insertMany([

        {
            _id: ObjectId(),
            entity_name: "LOAN_APPLICATION",
            entity_id: ObjectId("ENTITY_ID_1"),
            action: "CREATE",
            performed_by: "customer_portal",
            performed_at: Timestamp(),
            details: {
                note: "Loan application submitted by customer"
            }
        },

        {
            _id: ObjectId(),
            entity_name: "RISK_ASSESSMENT",
            entity_id: ObjectId("ENTITY_ID_2"),
            action: "APPROVE",
            performed_by: "risk_engine",
            performed_at: Timestamp(),
            details: {
                credit_score: 780,
                risk_grade: "AA"
            }
        },

        {
            _id: ObjectId(),
            entity_name: "LOAN",
            entity_id: ObjectId("ENTITY_ID_3"),
            action: "CREATE",
            performed_by: "loan_service",
            performed_at: Timestamp(),
            details: {
                status: "ACTIVE"
            }
        },

        {
            _id: ObjectId(),
            entity_name: "LOAN",
            entity_id: ObjectId("ENTITY_ID_4"),
            action: "UPDATE",
            performed_by: "loan_service",
            performed_at: Timestamp(),
            details: {
                field_updated: "outstanding_balance"
            }
        },

        {
            _id: ObjectId(),
            entity_name: "REPAYMENT",
            entity_id: ObjectId("ENTITY_ID_5"),
            action: "CREATE",
            performed_by: "auto_debit_system",
            performed_at: Timestamp(),
            details: {
                payment_method: "AUTO_DEBIT"
            }
        },

        {
            _id: ObjectId(),
            entity_name: "LOAN_APPLICATION",
            entity_id: ObjectId("ENTITY_ID_6"),
            action: "REJECT",
            performed_by: "risk_engine",
            performed_at: Timestamp(),
            details: {
                reason: "Low credit score"
            }
        },

        {
            _id: ObjectId(),
            entity_name: "CUSTOMER",
            entity_id: ObjectId("ENTITY_ID_7"),
            action: "VIEW",
            performed_by: "admin_user",
            performed_at: Timestamp()
        },

        {
            _id: ObjectId(),
            entity_name: "LOAN",
            entity_id: ObjectId("ENTITY_ID_8"),
            action: "UPDATE",
            performed_by: "collection_team",
            performed_at: Timestamp(),
            details: {
                status_changed_to: "RESTRUCTURED"
            }
        },

        {
            _id: ObjectId(),
            entity_name: "LOAN",
            entity_id: ObjectId("ENTITY_ID_9"),
            action: "DELETE",
            performed_by: "system_admin",
            performed_at: Timestamp(),
            details: {
                note: "Loan record archived"
            }
        },

        {
            _id: ObjectId(),
            entity_name: "LOAN_APPLICATION",
            entity_id: ObjectId("ENTITY_ID_10"),
            action: "APPROVE",
            performed_by: "credit_committee",
            performed_at: Timestamp(),
            details: {
                approved_amount: "220000"
            }
        }

    ]);

    print("Audit logs inserted successfully. Count: " + result.insertedCount);

} catch (error) {
    print("Error inserting audit logs: " + error);
}

// -------------------------------
// 8 Repayment Schedules
// -------------------------------


try {
    const result = db.repayment_schedules.insertMany([

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_1"),
            installment_number: 1,
            due_date: ISODate("2026-03-01"),
            amount_due: NumberDecimal("1450"),
            amount_paid: NumberDecimal("1450"),
            status: "PAID",
            paid_date: Timestamp(),
            late_fees: NumberDecimal("0")
        },

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_2"),
            installment_number: 1,
            due_date: ISODate("2026-03-05"),
            amount_due: NumberDecimal("566"),
            amount_paid: NumberDecimal("566"),
            status: "PAID",
            paid_date: Timestamp(),
            late_fees: NumberDecimal("0")
        },

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_3"),
            installment_number: 1,
            due_date: ISODate("2026-03-10"),
            amount_due: NumberDecimal("366"),
            amount_paid: NumberDecimal("200"),
            status: "PARTIALLY_PAID",
            paid_date: Timestamp(),
            late_fees: NumberDecimal("0")
        },

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_4"),
            installment_number: 1,
            due_date: ISODate("2026-03-15"),
            amount_due: NumberDecimal("414"),
            amount_paid: NumberDecimal("0"),
            status: "PENDING",
            paid_date: null,
            late_fees: NumberDecimal("0")
        },

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_5"),
            installment_number: 1,
            due_date: ISODate("2026-03-20"),
            amount_due: NumberDecimal("632"),
            amount_paid: NumberDecimal("0"),
            status: "OVERDUE",
            paid_date: null,
            late_fees: NumberDecimal("25")
        },

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_6"),
            installment_number: 1,
            due_date: ISODate("2026-03-25"),
            amount_due: NumberDecimal("1335"),
            amount_paid: NumberDecimal("0"),
            status: "DEFAULTED",
            paid_date: null,
            late_fees: NumberDecimal("100")
        },

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_7"),
            installment_number: 1,
            due_date: ISODate("2026-04-01"),
            amount_due: NumberDecimal("398"),
            amount_paid: NumberDecimal("398"),
            status: "PAID",
            paid_date: Timestamp(),
            late_fees: NumberDecimal("0")
        },

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_8"),
            installment_number: 1,
            due_date: ISODate("2026-04-05"),
            amount_due: NumberDecimal("461"),
            amount_paid: NumberDecimal("461"),
            status: "PAID",
            paid_date: Timestamp(),
            late_fees: NumberDecimal("0")
        },

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_9"),
            installment_number: 1,
            due_date: ISODate("2026-04-10"),
            amount_due: NumberDecimal("166"),
            amount_paid: NumberDecimal("0"),
            status: "OVERDUE",
            paid_date: null,
            late_fees: NumberDecimal("15")
        },

        {
            schedule_id: ObjectId(),
            loan_id: ObjectId("LOAN_ID_10"),
            installment_number: 1,
            due_date: ISODate("2026-04-15"),
            amount_due: NumberDecimal("1030"),
            amount_paid: NumberDecimal("0"),
            status: "PENDING",
            paid_date: null,
            late_fees: NumberDecimal("0")
        }

    ]);

    print("Repayment schedules inserted successfully. Count: " + result.insertedCount);

} catch (error) {
    print("Error inserting repayment schedules: " + error);
}

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
