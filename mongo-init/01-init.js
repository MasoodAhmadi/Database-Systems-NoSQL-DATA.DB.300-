db = db.getSiblingDB('banking');

const collectionsConfig = [
    {
        name: "customers",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["national_id", "first_name", "last_name", "date_of_birth", "email", "phone", "created_at"],
                properties: {
                    national_id: { bsonType: "string", pattern: "^[A-Z0-9-]+$" },
                    first_name: { bsonType: "string" },
                    last_name: { bsonType: "string" },
                    date_of_birth: { bsonType: "date" },
                    email: { bsonType: "string", pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" },
                    phone: { bsonType: "string" },
                    created_at: { bsonType: "timestamp" },
                    addresses: {
                        bsonType: "array",
                        items: {
                            bsonType: "object",
                            properties: {
                                street: { bsonType: "string" },
                                city: { bsonType: "string" },
                                postal_code: { bsonType: "string" },
                                country: { bsonType: "string" }
                            }
                        }
                    },
                    employment_details: {
                        bsonType: "array",
                        items: {
                            bsonType: "object",
                            properties: {
                                employer_name: { bsonType: "string" },
                                employment_type: {
                                    bsonType: "string",
                                    enum: ["FULL_TIME", "PART_TIME", "SELF_EMPLOYED", "CONTRACTOR", "UNEMPLOYED"]
                                },
                                monthly_income: { bsonType: "decimal" },
                                years_employed: { bsonType: "int" }
                            }
                        }
                    },
                    bank_accounts: {
                        bsonType: "array",
                        items: {
                            bsonType: "object",
                            properties: {
                                iban: { bsonType: "string" },
                                balance: { bsonType: "decimal" }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        name: "loan_products",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["product_name", "min_interest_rate", "max_interest_rate", "max_tenure_months", "requires_collateral"],
                properties: {
                    product_name: { bsonType: "string" },
                    min_interest_rate: { bsonType: "decimal", minimum: 0 },
                    max_interest_rate: { bsonType: "decimal", minimum: 0 },
                    max_tenure_months: { bsonType: "int", minimum: 1 },
                    requires_collateral: { bsonType: "bool" }
                }
            }
        }
    },
    {
        name: "loan_applications",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["customer_id", "product_id", "requested_amount", "requested_tenure", "status", "applied_at"],
                properties: {
                    customer_id: { bsonType: "objectId" },
                    product_id: { bsonType: "objectId" },
                    requested_amount: { bsonType: "decimal", minimum: 0 },
                    requested_tenure: { bsonType: "int", minimum: 1 },
                    status: {
                        bsonType: "string",
                        enum: ["PENDING", "APPROVED", "REJECTED", "WITHDRAWN", "IN_REVIEW"]
                    },
                    applied_at: { bsonType: "timestamp" }
                }
            }
        }
    },
    {
        name: "risk_assessments",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["application_id", "credit_score", "debt_to_income_ratio", "risk_grade", "approved", "assessed_at"],
                properties: {
                    application_id: { bsonType: "objectId" },
                    credit_score: { bsonType: "int", minimum: 300, maximum: 850 },
                    debt_to_income_ratio: { bsonType: "decimal", minimum: 0 },
                    risk_grade: {
                        bsonType: "string",
                        enum: ["AAA", "AA", "A", "BBB", "BB", "B", "CCC", "CC", "C", "D"]
                    },
                    approved: { bsonType: "bool" },
                    assessed_at: { bsonType: "timestamp" }
                }
            }
        }
    },
    {
        name: "loans",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["application_id", "principal_amount", "interest_rate", "tenure_months", "monthly_emi", "outstanding_balance", "status"],
                properties: {
                    application_id: { bsonType: "objectId" },
                    principal_amount: { bsonType: "decimal", minimum: 0 },
                    interest_rate: { bsonType: "decimal", minimum: 0 },
                    tenure_months: { bsonType: "int", minimum: 1 },
                    monthly_emi: { bsonType: "decimal", minimum: 0 },
                    outstanding_balance: { bsonType: "decimal", minimum: 0 },
                    status: {
                        bsonType: "string",
                        enum: ["ACTIVE", "CLOSED", "DEFAULTED", "RESTRUCTURED", "PENDING_DISBURSEMENT"]
                    },
                    disbursed_at: { bsonType: "timestamp" },
                    collateral: {
                        bsonType: "array",
                        items: {
                            bsonType: "object",
                            properties: {
                                collateral_type: {
                                    bsonType: "string",
                                    enum: ["REAL_ESTATE", "VEHICLE", "GOLD", "FIXED_DEPOSIT", "OTHER"]
                                },
                                estimated_value: { bsonType: "decimal", minimum: 0 },
                                description: { bsonType: "string" }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        name: "repayments",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["loan_id", "schedule_id", "amount_paid", "payment_date", "payment_method"],
                properties: {
                    loan_id: { bsonType: "objectId" },
                    schedule_id: { bsonType: "objectId" },
                    amount_paid: { bsonType: "decimal", minimum: 0 },
                    payment_date: { bsonType: "timestamp" },
                    payment_method: {
                        bsonType: "string",
                        enum: ["CASH", "BANK_TRANSFER", "CHEQUE", "DEBIT_CARD", "CREDIT_CARD", "AUTO_DEBIT"]
                    }
                }
            }
        }
    },
    {
        name: "audit_logs",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["entity_name", "entity_id", "action", "performed_by", "performed_at"],
                properties: {
                    entity_name: { bsonType: "string" },
                    entity_id: { bsonType: "objectId" },
                    action: {
                        bsonType: "string",
                        enum: ["CREATE", "UPDATE", "DELETE", "VIEW", "APPROVE", "REJECT"]
                    },
                    performed_by: { bsonType: "string" },
                    performed_at: { bsonType: "timestamp" },
                    details: { bsonType: "object" } // Optional field for storing change details
                }
            }
        }
    },
    {
        name: "repayment_schedules",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["loan_id", "installment_number", "due_date", "amount_due", "status"],
                properties: {
                    schedule_id: { bsonType: "objectId" },
                    loan_id: { bsonType: "objectId" },
                    installment_number: { bsonType: "int", minimum: 1 },
                    due_date: { bsonType: "date" },
                    amount_due: { bsonType: "decimal", minimum: 0 },
                    amount_paid: { bsonType: "decimal", minimum: 0 },
                    status: {
                        bsonType: "string",
                        enum: ["PENDING", "PAID", "PARTIALLY_PAID", "OVERDUE", "DEFAULTED"]
                    },
                    paid_date: { bsonType: ["timestamp", "null"] },
                    late_fees: { bsonType: "decimal", minimum: 0 }
                }
            }
        }
    }
]

// Create collections
collectionsConfig.forEach(config => {
    const collections = db.getCollectionInfos({ name: config.name });

    if (collections.length === 0) {
        db.createCollection(config.name, { validator: config.validator });
        print(`Created collection '${config.name}' with validation.`);
    }
    else {
        db.runCommand({
            collMod: config.name,
            validator: config.validator
        });
        print(`Updated validation for existing collection '${config.name}'.`);
    }
})