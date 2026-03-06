const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err))

// Import banking routes
const bankingRoutes = require('./routes/banking')
app.use('/api/banking', bankingRoutes)

app.get('/', (req, res) => {
    res.send('Banking API is running!')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})