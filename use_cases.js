// Q1: Get loan application by customerID
db.loan_applications.find({
    customer_id: ObjectId("CUSTOMER_ID")
}).sort({ applied_at: -1 })

// Q2: Get bank account by customerID
db.bank_accounts.find({
    customer_id: ObjectId("CUSTOMER_ID")
})

// Q3: Get loan by loan application id
db.loans.findOne({
    application_id: ObjectId("APPLICATION_ID")
})

// Q4: Create loan by loan application id
const application = db.loan_applications.findOne({
    _id: ObjectId("APPLICATION_ID")
})

const riskAssessment = db.risk_assessments.findOne({
    application_id: ObjectId("APPLICATION_ID")
})

if (riskAssessment && riskAssessment.approved) {
    const principal = application.requested_amount
    const monthlyRate = 0.01
    const tenure = application.requested_tenure
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1)

    const loanId = db.loans.insertOne({
        application_id: application._id,
        principal_amount: principal,
        interest_rate: Decimal128("10.5"),
        tenure_months: tenure,
        monthly_emi: Decimal128(emi.toFixed(2)),
        outstanding_balance: principal,
        status: "PENDING_DISBURSEMENT",
        disbursed_at: null
    }).insertedId

    const schedule = []
    for (let i = 1; i <= tenure; i++) {
        const dueDate = new Date()
        dueDate.setMonth(dueDate.getMonth() + i)

        db.repayment_schedules.insertOne({
            loan_id: loanId,
            installment_number: i,
            due_date: dueDate,
            amount_due: Decimal128(emi.toFixed(2)),
            amount_paid: Decimal128("0"),
            status: "PENDING",
            paid_date: null,
            late_fees: Decimal128("0")
        })
    }

    db.loan_applications.updateOne(
        { _id: application._id },
        { $set: { status: "APPROVED" } }
    )
}

// Q5: Get risk assessment for a specific loan
db.loans.aggregate([
    { $match: { _id: ObjectId("LOAN_ID_HERE") } },
    {
        $lookup: {
            from: "loan_applications",
            localField: "application_id",
            foreignField: "_id",
            as: "application"
        }
    },
    { $unwind: "$application" },
    {
        $lookup: {
            from: "risk_assessments",
            localField: "application._id",
            foreignField: "application_id",
            as: "risk_assessment"
        }
    },
    {
        $project: {
            loan_id: "$_id",
            application_id: "$application_id",
            risk_assessment: { $arrayElemAt: ["$risk_assessment", 0] }
        }
    }
])

// Q6: Get collateral by loan id
db.loans.findOne(
    { _id: ObjectId("LOAN_ID") },
    { collateral: 1, _id: 0 }
)

// Q7: Update collateral by loan id
db.loans.updateOne(
    { _id: ObjectId("LOAN_ID") },
    {
        $push: {
            collateral: {
                collateral_type: "REAL_ESTATE",
                estimated_value: Decimal128("250000.00"),
                description: "3 Bedroom Apartment at 123 Main St",
                verified_by: "Verifier Name",
                verified_at: new Timestamp()
            }
        }
    }
)

// Q8: Get loan products by loan application id
db.loan_applications.aggregate([
    { $match: { _id: ObjectId("APPLICATION_ID") } },
    {
        $lookup: {
            from: "loan_products",
            localField: "product_id",
            foreignField: "_id",
            as: "product_details"
        }
    },
    {
        $project: {
            application_id: "$_id",
            requested_amount: 1,
            requested_tenure: 1,
            product: { $arrayElemAt: ["$product_details", 0] }
        }
    }
])

// Q9: Update repayment schedule by loan id
db.repayment_schedules.updateOne(
    {
        loan_id: ObjectId("LOAN_ID"),
        installment_number: 3
    },
    {
        $set: {
            status: "OVERDUE",
            late_fees: Decimal128("50.00")
        }
    }
)

// Q10: Update repayment by loan id
const session = db.getMongo().startSession()
session.startTransaction()

try {
    const loanId = ObjectId("LOAN_ID")
    const paymentAmount = Decimal128("1000.00")
    const paymentMethod = "BANK_TRANSFER"

    // Find the next pending installment
    const nextInstallment = db.repayment_schedules.findOne({
        loan_id: loanId,
        status: { $in: ["PENDING", "OVERDUE"] }
    }, { sort: { installment_number: 1 } })

    if (nextInstallment) {
        // Record the payment
        const paymentId = db.repayments.insertOne({
            loan_id: loanId,
            schedule_id: nextInstallment._id,
            amount_paid: paymentAmount,
            payment_date: new Timestamp(),
            payment_method: paymentMethod,
            reference_number: "TXN" + Date.now()
        }).insertedId

        // Update the repayment schedule
        const newAmountPaid = nextInstallment.amount_paid + paymentAmount
        const newStatus = newAmountPaid >= nextInstallment.amount_due ? "PAID" : "PARTIALLY_PAID"

        db.repayment_schedules.updateOne(
            { _id: nextInstallment._id },
            {
                $set: {
                    amount_paid: newAmountPaid,
                    status: newStatus,
                    paid_date: newStatus === "PAID" ? new Timestamp() : null
                }
            }
        )

        // Update loan outstanding balance
        const loan = db.loans.findOne({ _id: loanId })
        const newBalance = loan.outstanding_balance - paymentAmount

        db.loans.updateOne(
            { _id: loanId },
            {
                $set: {
                    outstanding_balance: Decimal128(newBalance.toFixed(2))
                },
                $push: {
                    payment_history: {
                        payment_id: paymentId,
                        amount: paymentAmount,
                        date: new Timestamp(),
                        method: paymentMethod
                    }
                }
            }
        )

        // Check if loan is fully paid
        if (newBalance <= 0) {
            db.loans.updateOne(
                { _id: loanId },
                { $set: { status: "CLOSED" } }
            )
        }
    }

    session.commitTransaction()
    print("Repayment processed successfully")
} catch (error) {
    session.abortTransaction()
    print("Error processing repayment: " + error)
} finally {
    session.endSession()
}

