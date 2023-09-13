const mongoose = require('mongoose')

const SalesSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true, 
      },
      revenue: {
        type: Number,
        required: true, 
        min: 0,        
      },
      user_email: {
        type: String,
        required: true, 
        trim: true,     
        lowercase: true, 
        match: /^\S+@\S+\.\S+$/, // Validate email format
      },
    deliveryMethod: {
        type: String,
        enum: ['pick up', 'deliver'],
        required: true,
      }
})

module.exports = mongoose.model('Sales', SalesSchema);