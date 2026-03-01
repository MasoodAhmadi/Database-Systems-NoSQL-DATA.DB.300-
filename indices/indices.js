// ============================================
// Use Case Q1: Get loan application by customerID
// ============================================
db.loan_applications.createIndex({ application_id: 1 });

// ============================================
// Use Case Q2: Get bank account by customerID
// ============================================
db.customers.createIndex({ customer_id: 1 });

// ============================================
// Use Cases Q3 & Q4: Get loan by loan application id,
// and Create loan by loan application id (ensure uniqueness)
// ============================================
db.loans.createIndex({ application_id: 1 }, { unique: true });

// ============================================
// Use Case Q5: Get risk assessments by loan id
// Strategy: loan -> application_id -> risk_assessments
// Indexes on loans.application_id (already above) and risk_assessments.application_id
// ============================================
db.risk_assessments.createIndex({ application_id: 1 });

// ============================================
// Use Cases Q6 & Q7: Get/Update collateral by loan id
// ============================================
db.collateral.createIndex({ loan_id: 1 });

// ============================================
// Use Case Q9: Update repayment schedule by loan id
// ============================================
db.repayment_schedules.createIndex({ loan_id: 1 });

// ============================================
// Use Case Q10: Update repayment by loan id
// ============================================
db.repayments.createIndex({ loan_id: 1 });