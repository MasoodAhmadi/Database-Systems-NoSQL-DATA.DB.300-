// routes/banking.js
const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

// Get all customers
router.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers)
    } catch (err) {
        console.error('Error fetching customers:', err)
        res.status(500).json({ error: err.message })
    }
})

// Get customer by national_id
router.get('/customers/:id', async (req, res) => {
    try {
        const customer = await Customer.findOne({ national_id: req.params.id })
        if (!customer) return res.status(404).json({ error: 'Customer not found' })
        res.json(customer)
    } catch (err) {
        console.error('Error fetching customer:', err)
        res.status(500).json({ error: err.message })
    }
})

module.exports = router