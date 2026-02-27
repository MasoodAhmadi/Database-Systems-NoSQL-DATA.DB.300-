// ===============================
// BANKING SYSTEM DEMO - MONGODB
// ===============================

// Use database
db = db.getSiblingDB("banking");

// -------------------------------
// 1️⃣ Customers
// -------------------------------
const customerId = ObjectId();
db.customers.insertMany([
    {
        _id: ObjectId(),
        nationalId: "120390-123A",
        firstName: "Anna",
        lastName: "Korhonen",
        dateOfBirth: ISODate("1990-03-12"),
        email: "anna.korhonen@example.fi",
        phone: "+358401111111",
        createdAt: new Date(),
        addresses: [{
            street: "Aleksanterinkatu 15",
            city: "Helsinki",
            postalCode: "00100",
            country: "Finland"
        }],
        employment: {
            employerName: "Kone",
            employmentType: "Permanent",
            monthlyIncome: 4200,
            yearsEmployed: 4
        },
        bankAccounts: [{
            iban: "FI1112345600000001",
            balance: 12000
        }]
    },
    {
        _id: ObjectId(),
        nationalId: "230585-456B",
        firstName: "Jussi",
        lastName: "Lahtinen",
        dateOfBirth: ISODate("1985-05-23"),
        email: "jussi.lahtinen@example.fi",
        phone: "+358402222222",
        createdAt: new Date(),
        addresses: [{
            street: "Hämeenkatu 20",
            city: "Tampere",
            postalCode: "33100",
            country: "Finland"
        }],
        employment: {
            employerName: "UPM",
            employmentType: "Permanent",
            monthlyIncome: 3800,
            yearsEmployed: 6
        },
        bankAccounts: [{
            iban: "FI1112345600000002",
            balance: 8000
        }]
    },
    {
        _id: ObjectId(),
        nationalId: "150478-789C",
        firstName: "Laura",
        lastName: "Mäkinen",
        dateOfBirth: ISODate("1978-04-15"),
        email: "laura.makinen@example.fi",
        phone: "+358403333333",
        createdAt: new Date(),
        addresses: [{
            street: "Satakunnankatu 5",
            city: "Turku",
            postalCode: "20100",
            country: "Finland"
        }],
        employment: {
            employerName: "Neste",
            employmentType: "Permanent",
            monthlyIncome: 5200,
            yearsEmployed: 10
        },
        bankAccounts: [{
            iban: "FI1112345600000003",
            balance: 25000
        }]
    },
    {
        _id: ObjectId(),
        nationalId: "080692-111D",
        firstName: "Petri",
        lastName: "Nieminen",
        dateOfBirth: ISODate("1992-06-08"),
        email: "petri.nieminen@example.fi",
        phone: "+358404444444",
        createdAt: new Date(),
        addresses: [{
            street: "Kauppakatu 7",
            city: "Oulu",
            postalCode: "90100",
            country: "Finland"
        }],
        employment: {
            employerName: "TietoEVRY",
            employmentType: "Permanent",
            monthlyIncome: 4600,
            yearsEmployed: 3
        },
        bankAccounts: [{
            iban: "FI1112345600000004",
            balance: 14000
        }]
    },
    {
        _id: ObjectId(),
        nationalId: "010180-222E",
        firstName: "Sari",
        lastName: "Heikkinen",
        dateOfBirth: ISODate("1980-01-01"),
        email: "sari.heikkinen@example.fi",
        phone: "+358405555555",
        createdAt: new Date(),
        addresses: [{
            street: "Puistokatu 3",
            city: "Jyväskylä",
            postalCode: "40100",
            country: "Finland"
        }],
        employment: {
            employerName: "Valmet",
            employmentType: "Permanent",
            monthlyIncome: 3900,
            yearsEmployed: 7
        },
        bankAccounts: [{
            iban: "FI1112345600000005",
            balance: 9500
        }]
    },
    {
        _id: ObjectId(),
        nationalId: "300887-333F",
        firstName: "Markus",
        lastName: "Salonen",
        dateOfBirth: ISODate("1987-08-30"),
        email: "markus.salonen@example.fi",
        phone: "+358406666666",
        createdAt: new Date(),
        addresses: [{
            street: "Torikatu 12",
            city: "Kuopio",
            postalCode: "70100",
            country: "Finland"
        }],
        employment: {
            employerName: "Stora Enso",
            employmentType: "Permanent",
            monthlyIncome: 4700,
            yearsEmployed: 8
        },
        bankAccounts: [{
            iban: "FI1112345600000006",
            balance: 18000
        }]
    },
    {
        _id: ObjectId(),
        nationalId: "140295-444G",
        firstName: "Emilia",
        lastName: "Koskinen",
        dateOfBirth: ISODate("1995-02-14"),
        email: "emilia.koskinen@example.fi",
        phone: "+358407777777",
        createdAt: new Date(),
        addresses: [{
            street: "Linnankatu 9",
            city: "Lahti",
            postalCode: "15100",
            country: "Finland"
        }],
        employment: {
            employerName: "Finnair",
            employmentType: "Permanent",
            monthlyIncome: 4100,
            yearsEmployed: 2
        },
        bankAccounts: [{
            iban: "FI1112345600000007",
            balance: 6000
        }]
    },
    {
        _id: ObjectId(),
        nationalId: "220176-555H",
        firstName: "Timo",
        lastName: "Rantanen",
        dateOfBirth: ISODate("1976-01-22"),
        email: "timo.rantanen@example.fi",
        phone: "+358408888888",
        createdAt: new Date(),
        addresses: [{
            street: "Keskuskatu 4",
            city: "Espoo",
            postalCode: "02100",
            country: "Finland"
        }],
        employment: {
            employerName: "ABB",
            employmentType: "Permanent",
            monthlyIncome: 5500,
            yearsEmployed: 12
        },
        bankAccounts: [{
            iban: "FI1112345600000008",
            balance: 32000
        }]
    },
    {
        _id: ObjectId(),
        nationalId: "091299-666I",
        firstName: "Noora",
        lastName: "Lehtonen",
        dateOfBirth: ISODate("1999-12-09"),
        email: "noora.lehtonen@example.fi",
        phone: "+358409999999",
        createdAt: new Date(),
        addresses: [{
            street: "Rautatienkatu 2",
            city: "Vantaa",
            postalCode: "01300",
            country: "Finland"
        }],
        employment: {
            employerName: "Wärtsilä",
            employmentType: "Permanent",
            monthlyIncome: 3700,
            yearsEmployed: 1
        },
        bankAccounts: [{
            iban: "FI1112345600000009",
            balance: 4000
        }]
    },
    {
        _id: ObjectId(),
        nationalId: "170483-777J",
        firstName: "Ville",
        lastName: "Aaltonen",
        dateOfBirth: ISODate("1983-04-17"),
        email: "ville.aaltonen@example.fi",
        phone: "+358401010101",
        createdAt: new Date(),
        addresses: [{
            street: "Merikatu 11",
            city: "Helsinki",
            postalCode: "00140",
            country: "Finland"
        }],
        employment: {
            employerName: "Supercell",
            employmentType: "Permanent",
            monthlyIncome: 6000,
            yearsEmployed: 9
        },
        bankAccounts: [{
            iban: "FI1112345600000010",
            balance: 45000
        }]
    }
]);

// -------------------------------
// 2️⃣ Loan Products
// -------------------------------
db.loan_products.insertMany([
    {
        _id: ObjectId(),
        productName: "Home Loan",
        minInterestRate: 2.5,
        maxInterestRate: 6.5,
        maxTenureMonths: 360,
        requiresCollateral: true
    },
    {
        _id: ObjectId(),
        productName: "Car Loan",
        minInterestRate: 3.0,
        maxInterestRate: 8.0,
        maxTenureMonths: 84,
        requiresCollateral: true
    },
    {
        _id: ObjectId(),
        productName: "Personal Loan",
        minInterestRate: 5.5,
        maxInterestRate: 12.0,
        maxTenureMonths: 60,
        requiresCollateral: false
    },
    {
        _id: ObjectId(),
        productName: "Education Loan",
        minInterestRate: 2.0,
        maxInterestRate: 5.0,
        maxTenureMonths: 180,
        requiresCollateral: false
    },
    {
        _id: ObjectId(),
        productName: "Business Loan",
        minInterestRate: 4.5,
        maxInterestRate: 10.0,
        maxTenureMonths: 240,
        requiresCollateral: true
    },
    {
        _id: ObjectId(),
        productName: "Mortgage Loan",
        minInterestRate: 2.8,
        maxInterestRate: 6.0,
        maxTenureMonths: 300,
        requiresCollateral: true
    },
    {
        _id: ObjectId(),
        productName: "Renovation Loan",
        minInterestRate: 3.5,
        maxInterestRate: 9.0,
        maxTenureMonths: 120,
        requiresCollateral: false
    },
    {
        _id: ObjectId(),
        productName: "Travel Loan",
        minInterestRate: 6.0,
        maxInterestRate: 14.0,
        maxTenureMonths: 36,
        requiresCollateral: false
    },
    {
        _id: ObjectId(),
        productName: "Medical Loan",
        minInterestRate: 4.0,
        maxInterestRate: 9.5,
        maxTenureMonths: 72,
        requiresCollateral: false
    },
    {
        _id: ObjectId(),
        productName: "Agricultural Loan",
        minInterestRate: 3.2,
        maxInterestRate: 7.5,
        maxTenureMonths: 180,
        requiresCollateral: true
    }
]);

// -------------------------------
// 3️⃣ Loan Application
// -------------------------------
db.loan_applications.insertMany([
    {
        _id: ObjectId(),
        customerId: db.customers.findOne()._id,
        productId: db.loan_products.findOne({ productName: "Home Loan" })._id,
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
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(1).limit(1).toArray()[0]._id,
        productId: db.loan_products.findOne({ productName: "Car Loan" })._id,
        requestedAmount: 30000,
        requestedTenure: 60,
        status: "Approved",
        appliedAt: new Date(),
        riskAssessment: {
            creditScore: 690,
            debtToIncomeRatio: 40,
            riskGrade: "Medium",
            approved: true,
            assessedAt: new Date()
        }
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(2).limit(1).toArray()[0]._id,
        productId: db.loan_products.findOne({ productName: "Personal Loan" })._id,
        requestedAmount: 15000,
        requestedTenure: 36,
        status: "Rejected",
        appliedAt: new Date(),
        riskAssessment: {
            creditScore: 580,
            debtToIncomeRatio: 55,
            riskGrade: "High",
            approved: false,
            assessedAt: new Date()
        }
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(3).limit(1).toArray()[0]._id,
        productId: db.loan_products.findOne({ productName: "Education Loan" })._id,
        requestedAmount: 40000,
        requestedTenure: 120,
        status: "Approved",
        appliedAt: new Date(),
        riskAssessment: {
            creditScore: 750,
            debtToIncomeRatio: 25,
            riskGrade: "Low",
            approved: true,
            assessedAt: new Date()
        }
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(4).limit(1).toArray()[0]._id,
        productId: db.loan_products.findOne({ productName: "Business Loan" })._id,
        requestedAmount: 100000,
        requestedTenure: 180,
        status: "Under Review",
        appliedAt: new Date(),
        riskAssessment: {
            creditScore: 700,
            debtToIncomeRatio: 38,
            riskGrade: "Medium",
            approved: true,
            assessedAt: new Date()
        }
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(5).limit(1).toArray()[0]._id,
        productId: db.loan_products.findOne({ productName: "Travel Loan" })._id,
        requestedAmount: 8000,
        requestedTenure: 24,
        status: "Approved",
        appliedAt: new Date(),
        riskAssessment: {
            creditScore: 710,
            debtToIncomeRatio: 30,
            riskGrade: "Low",
            approved: true,
            assessedAt: new Date()
        }
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(6).limit(1).toArray()[0]._id,
        productId: db.loan_products.findOne({ productName: "Medical Loan" })._id,
        requestedAmount: 12000,
        requestedTenure: 48,
        status: "Approved",
        appliedAt: new Date(),
        riskAssessment: {
            creditScore: 680,
            debtToIncomeRatio: 42,
            riskGrade: "Medium",
            approved: true,
            assessedAt: new Date()
        }
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(7).limit(1).toArray()[0]._id,
        productId: db.loan_products.findOne({ productName: "Renovation Loan" })._id,
        requestedAmount: 22000,
        requestedTenure: 72,
        status: "Under Review",
        appliedAt: new Date(),
        riskAssessment: {
            creditScore: 705,
            debtToIncomeRatio: 37,
            riskGrade: "Low",
            approved: true,
            assessedAt: new Date()
        }
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(8).limit(1).toArray()[0]._id,
        productId: db.loan_products.findOne({ productName: "Agricultural Loan" })._id,
        requestedAmount: 75000,
        requestedTenure: 150,
        status: "Approved",
        appliedAt: new Date(),
        riskAssessment: {
            creditScore: 730,
            debtToIncomeRatio: 28,
            riskGrade: "Low",
            approved: true,
            assessedAt: new Date()
        }
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(9).limit(1).toArray()[0]._id,
        productId: db.loan_products.findOne({ productName: "Mortgage Loan" })._id,
        requestedAmount: 300000,
        requestedTenure: 300,
        status: "Under Review",
        appliedAt: new Date(),
        riskAssessment: {
            creditScore: 760,
            debtToIncomeRatio: 32,
            riskGrade: "Low",
            approved: true,
            assessedAt: new Date()
        }
    }
]);

// -------------------------------
// 4️⃣ Loans
// -------------------------------
db.loans.insertMany([
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(0).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(0).limit(1).toArray()[0].customerId,
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
        repaymentSchedule: [{
            scheduleId: ObjectId(),
            installmentNumber: 1,
            dueDate: ISODate("2026-03-01"),
            principalComponent: 800,
            interestComponent: 610,
            totalDue: 1410,
            status: "Paid"
        }],
        repayments: [{
            installmentNumber: 1,
            amountPaid: 1410,
            paymentDate: ISODate("2026-03-01"),
            paymentMethod: "Direct Debit"
        }]
    },
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(1).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(1).limit(1).toArray()[0].customerId,
        principalAmount: 30000,
        interestRate: 4.5,
        tenureMonths: 60,
        monthlyEmi: 560,
        outstandingBalance: 30000,
        status: "Active",
        disbursedAt: new Date(),
        collateral: {
            type: "Vehicle",
            estimatedValue: 35000,
            description: "Toyota Corolla 2024"
        },
        repaymentSchedule: [{
            scheduleId: ObjectId(),
            installmentNumber: 1,
            dueDate: ISODate("2026-03-05"),
            principalComponent: 400,
            interestComponent: 160,
            totalDue: 560,
            status: "Pending"
        }],
        repayments: []
    },
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(2).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(2).limit(1).toArray()[0].customerId,
        principalAmount: 15000,
        interestRate: 8.5,
        tenureMonths: 36,
        monthlyEmi: 470,
        outstandingBalance: 15000,
        status: "Active",
        disbursedAt: new Date(),
        collateral: null,
        repaymentSchedule: [],
        repayments: []
    },
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(3).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(3).limit(1).toArray()[0].customerId,
        principalAmount: 40000,
        interestRate: 3.5,
        tenureMonths: 120,
        monthlyEmi: 395,
        outstandingBalance: 40000,
        status: "Active",
        disbursedAt: new Date(),
        collateral: null,
        repaymentSchedule: [],
        repayments: []
    },
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(4).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(4).limit(1).toArray()[0].customerId,
        principalAmount: 100000,
        interestRate: 5.0,
        tenureMonths: 180,
        monthlyEmi: 790,
        outstandingBalance: 100000,
        status: "Active",
        disbursedAt: new Date(),
        collateral: {
            type: "Business Asset",
            estimatedValue: 150000,
            description: "Manufacturing Equipment"
        },
        repaymentSchedule: [],
        repayments: []
    },
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(5).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(5).limit(1).toArray()[0].customerId,
        principalAmount: 8000,
        interestRate: 7.5,
        tenureMonths: 24,
        monthlyEmi: 360,
        outstandingBalance: 8000,
        status: "Active",
        disbursedAt: new Date(),
        collateral: null,
        repaymentSchedule: [],
        repayments: []
    },
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(6).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(6).limit(1).toArray()[0].customerId,
        principalAmount: 12000,
        interestRate: 6.0,
        tenureMonths: 48,
        monthlyEmi: 285,
        outstandingBalance: 12000,
        status: "Active",
        disbursedAt: new Date(),
        collateral: null,
        repaymentSchedule: [],
        repayments: []
    },
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(7).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(7).limit(1).toArray()[0].customerId,
        principalAmount: 22000,
        interestRate: 5.5,
        tenureMonths: 72,
        monthlyEmi: 430,
        outstandingBalance: 22000,
        status: "Active",
        disbursedAt: new Date(),
        collateral: null,
        repaymentSchedule: [],
        repayments: []
    },
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(8).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(8).limit(1).toArray()[0].customerId,
        principalAmount: 75000,
        interestRate: 4.2,
        tenureMonths: 150,
        monthlyEmi: 620,
        outstandingBalance: 75000,
        status: "Active",
        disbursedAt: new Date(),
        collateral: {
            type: "Farmland",
            estimatedValue: 100000,
            description: "Agricultural land in Finland"
        },
        repaymentSchedule: [],
        repayments: []
    },
    {
        _id: ObjectId(),
        applicationId: db.loan_applications.find().skip(9).limit(1).toArray()[0]._id,
        customerId: db.loan_applications.find().skip(9).limit(1).toArray()[0].customerId,
        principalAmount: 300000,
        interestRate: 3.0,
        tenureMonths: 300,
        monthlyEmi: 1600,
        outstandingBalance: 300000,
        status: "Active",
        disbursedAt: new Date(),
        collateral: {
            type: "Property",
            estimatedValue: 400000,
            description: "House in Espoo"
        },
        repaymentSchedule: [],
        repayments: []
    }
]);
// -------------------------------
// 5️⃣ Repayments Collection (Optional / separate)
// -------------------------------
db.repayments.insertMany([
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(0).limit(1).toArray()[0]._id,
        scheduleId: db.loans.find().skip(0).limit(1).toArray()[0].repaymentSchedule[0]?.scheduleId,
        amountPaid: 1410,
        paymentDate: ISODate("2026-03-01"),
        paymentMethod: "Direct Debit"
    },
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(1).limit(1).toArray()[0]._id,
        scheduleId: db.loans.find().skip(1).limit(1).toArray()[0].repaymentSchedule[0]?.scheduleId,
        amountPaid: 560,
        paymentDate: ISODate("2026-03-05"),
        paymentMethod: "Bank Transfer"
    },
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(2).limit(1).toArray()[0]._id,
        scheduleId: null,
        amountPaid: 470,
        paymentDate: ISODate("2026-03-07"),
        paymentMethod: "Manual Payment"
    },
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(3).limit(1).toArray()[0]._id,
        scheduleId: null,
        amountPaid: 395,
        paymentDate: ISODate("2026-03-10"),
        paymentMethod: "Direct Debit"
    },
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(4).limit(1).toArray()[0]._id,
        scheduleId: null,
        amountPaid: 790,
        paymentDate: ISODate("2026-03-12"),
        paymentMethod: "Bank Transfer"
    },
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(5).limit(1).toArray()[0]._id,
        scheduleId: null,
        amountPaid: 360,
        paymentDate: ISODate("2026-03-15"),
        paymentMethod: "Manual Payment"
    },
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(6).limit(1).toArray()[0]._id,
        scheduleId: null,
        amountPaid: 285,
        paymentDate: ISODate("2026-03-18"),
        paymentMethod: "Direct Debit"
    },
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(7).limit(1).toArray()[0]._id,
        scheduleId: null,
        amountPaid: 430,
        paymentDate: ISODate("2026-03-20"),
        paymentMethod: "Bank Transfer"
    },
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(8).limit(1).toArray()[0]._id,
        scheduleId: null,
        amountPaid: 620,
        paymentDate: ISODate("2026-03-22"),
        paymentMethod: "Direct Debit"
    },
    {
        _id: ObjectId(),
        loanId: db.loans.find().skip(9).limit(1).toArray()[0]._id,
        scheduleId: null,
        amountPaid: 1600,
        paymentDate: ISODate("2026-03-25"),
        paymentMethod: "Bank Transfer"
    }
]);

// -------------------------------
// 6️⃣ Bank Accounts (Optional / separate)
// -------------------------------
db.bank_accounts.insertMany([
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(0).limit(1).toArray()[0]._id,
        iban: "FI0012345600000001",
        balance: 15000,
        accountType: "Savings",
        currency: "EUR",
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(1).limit(1).toArray()[0]._id,
        iban: "FI0012345600000002",
        balance: 8200,
        accountType: "Checking",
        currency: "EUR",
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(2).limit(1).toArray()[0]._id,
        iban: "FI0012345600000003",
        balance: 12000,
        accountType: "Savings",
        currency: "EUR",
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(3).limit(1).toArray()[0]._id,
        iban: "FI0012345600000004",
        balance: 4300,
        accountType: "Checking",
        currency: "EUR",
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(4).limit(1).toArray()[0]._id,
        iban: "FI0012345600000005",
        balance: 9800,
        accountType: "Savings",
        currency: "EUR",
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(5).limit(1).toArray()[0]._id,
        iban: "FI0012345600000006",
        balance: 25000,
        accountType: "Savings",
        currency: "EUR",
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(6).limit(1).toArray()[0]._id,
        iban: "FI0012345600000007",
        balance: 6100,
        accountType: "Checking",
        currency: "EUR",
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(7).limit(1).toArray()[0]._id,
        iban: "FI0012345600000008",
        balance: 32000,
        accountType: "Savings",
        currency: "EUR",
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(8).limit(1).toArray()[0]._id,
        iban: "FI0012345600000009",
        balance: 5400,
        accountType: "Checking",
        currency: "EUR",
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        customerId: db.customers.find().skip(9).limit(1).toArray()[0]._id,
        iban: "FI0012345600000010",
        balance: 41000,
        accountType: "Savings",
        currency: "EUR",
        createdAt: new Date()
    }
]);

// -------------------------------
// 7️⃣ Audit Logs
// -------------------------------
db.audit_logs.insertMany([
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(0).limit(1).toArray()[0]._id,
        action: "Loan Approved",
        performedBy: "risk_engine",
        performedAt: new Date()
    },
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(1).limit(1).toArray()[0]._id,
        action: "Loan Disbursed",
        performedBy: "loan_service",
        performedAt: new Date()
    },
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(2).limit(1).toArray()[0]._id,
        action: "Interest Rate Updated",
        performedBy: "admin_user",
        performedAt: new Date()
    },
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(3).limit(1).toArray()[0]._id,
        action: "Loan Approved",
        performedBy: "risk_engine",
        performedAt: new Date()
    },
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(4).limit(1).toArray()[0]._id,
        action: "Collateral Verified",
        performedBy: "credit_officer",
        performedAt: new Date()
    },
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(5).limit(1).toArray()[0]._id,
        action: "Loan Disbursed",
        performedBy: "loan_service",
        performedAt: new Date()
    },
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(6).limit(1).toArray()[0]._id,
        action: "Loan Restructured",
        performedBy: "admin_user",
        performedAt: new Date()
    },
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(7).limit(1).toArray()[0]._id,
        action: "Loan Approved",
        performedBy: "risk_engine",
        performedAt: new Date()
    },
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(8).limit(1).toArray()[0]._id,
        action: "Collateral Updated",
        performedBy: "credit_officer",
        performedAt: new Date()
    },
    {
        _id: ObjectId(),
        entityName: "Loan",
        entityId: db.loans.find().skip(9).limit(1).toArray()[0]._id,
        action: "Loan Closed",
        performedBy: "loan_service",
        performedAt: new Date()
    }
]);

db.audit_logs.insertMany([
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(0).limit(1).toArray()[0]._id,
        action: "EMI Paid",
        performedBy: "direct_debit",
        performedAt: ISODate("2026-03-01")
    },
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(1).limit(1).toArray()[0]._id,
        action: "EMI Paid",
        performedBy: "bank_transfer",
        performedAt: ISODate("2026-03-05")
    },
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(2).limit(1).toArray()[0]._id,
        action: "Partial Payment",
        performedBy: "manual_payment",
        performedAt: ISODate("2026-03-07")
    },
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(3).limit(1).toArray()[0]._id,
        action: "EMI Paid",
        performedBy: "direct_debit",
        performedAt: ISODate("2026-03-10")
    },
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(4).limit(1).toArray()[0]._id,
        action: "Late Payment",
        performedBy: "bank_transfer",
        performedAt: ISODate("2026-03-12")
    },
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(5).limit(1).toArray()[0]._id,
        action: "EMI Paid",
        performedBy: "direct_debit",
        performedAt: ISODate("2026-03-15")
    },
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(6).limit(1).toArray()[0]._id,
        action: "EMI Paid",
        performedBy: "manual_payment",
        performedAt: ISODate("2026-03-18")
    },
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(7).limit(1).toArray()[0]._id,
        action: "Overpayment",
        performedBy: "bank_transfer",
        performedAt: ISODate("2026-03-20")
    },
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(8).limit(1).toArray()[0]._id,
        action: "EMI Paid",
        performedBy: "direct_debit",
        performedAt: ISODate("2026-03-22")
    },
    {
        _id: ObjectId(),
        entityName: "Repayment",
        entityId: db.loans.find().skip(9).limit(1).toArray()[0]._id,
        action: "EMI Paid",
        performedBy: "bank_transfer",
        performedAt: ISODate("2026-03-25")
    }
]);

print("✅ Banking demo data inserted successfully!");
