const mongoose = require('mongoose')

const loanProductSchema = new mongoose.Schema({
    product_name: String,
    min_interest_rate: mongoose.Schema.Types.Decimal128,
    max_interest_rate: mongoose.Schema.Types.Decimal128,
    max_tenure_months: Number,
    requires_collateral: Boolean
})

module.exports = mongoose.model('LoanProduct', loanProductSchema)