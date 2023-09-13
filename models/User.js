const mongoose = require('mongoose')


const UserSchema  = new mongoose.Schema({

    first_name: {
        type: String,
        required: [true, 'Please provide first name'],
        trim: true,
        maxlength: [20, 'first name cannot be more than 20 chars']
    },
    middle_name: {
        type: String,
        required: false,
        trim: true,
        maxlength: [20, 'middle name cannot be more than 20 chars']
    },
    last_name: {
        type: String,
        required: [true, 'Please provide last name'],
        trim: true,
        maxlength: [20, 'last name cannot be more than 20 chars']

    },
    email: {
        type: String,
        required: true, // Email is required
        unique: true,   // Ensure email is unique
        trim: true,     // Remove leading/trailing whitespace
        lowercase: true, // Convert to lowercase
        match: /^\S+@\S+\.\S+$/, // Use a regular expression to validate email format
        // You can also add custom validation functions here
    }



})