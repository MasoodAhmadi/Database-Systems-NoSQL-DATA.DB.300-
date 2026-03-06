// models/Customer.js
const mongoose = require('mongoose')
const { Schema } = mongoose

// Sub-schema for addresses
const addressSchema = new Schema({
    street: String,
    city: String,
    postal_code: String,
    country: String
}, { _id: false })

// Sub-schema for employment details
const employmentSchema = new Schema({
    employer_name: String,
    employment_type: {
        type: String,
        enum: ["FULL_TIME", "PART_TIME", "SELF_EMPLOYED", "CONTRACTOR", "UNEMPLOYED"]
    },
    monthly_income: mongoose.Schema.Types.Decimal128,
    years_employed: Number
}, { _id: false })

// Sub-schema for bank accounts
const bankAccountSchema = new Schema({
    iban: String,
    balance: mongoose.Schema.Types.Decimal128
}, { _id: false })

// Main Customer schema
const customerSchema = new Schema({
    national_id: { type: String, required: true, match: /^[A-Z0-9-]+$/ },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    email: { type: String, required: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    phone: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    addresses: [addressSchema],
    employment_details: [employmentSchema],
    bank_accounts: bankAccountSchema
})

module.exports = mongoose.model('Customer', customerSchema)