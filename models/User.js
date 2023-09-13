const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: [true, 'Please provide first name'],
      trim: true,
      maxlength: [20, 'First name cannot be more than 20 characters'],
    },
    middle_name: {
      type: String,
      trim: true,
      maxlength: [20, 'Middle name cannot be more than 20 characters'],
    },
    last_name: {
      type: String,
      required: [true, 'Please provide last name'],
      trim: true,
      maxlength: [20, 'Last name cannot be more than 20 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        'Please provide a valid email address',
      ],
    },
    mobile_number: {
        type: String,
        trim: true, // Remove leading/trailing whitespace
        maxlength: [15, 'Mobile number cannot be more than 15 characters'],
        validate: {
          validator: function (value) {
            // Customize the validation logic for mobile numbers here
            // For example, you can use regular expressions to validate the format
            // Example: /^[0-9]{10}$/ to require exactly 10 digits
            return /^[\d-]+$/.test(value); // This example allows digits and hyphens
          },
          message: 'Please provide a valid mobile number',
        },
      },
    password: {
      type: String,
      required: [true, 'Password is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    address_2: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true,
    },
  });
  
  module.exports = mongoose.model('User', UserSchema);