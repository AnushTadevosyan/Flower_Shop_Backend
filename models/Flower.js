const mongoose = require('mongoose')

const FlowersSchema = new mongoose.Schema({

    category:{
        type: String,
        enum: ['occassion', 'bouquet', 'signiture_box','vases'],
        required: true,
    },
    description: {
        type: String,
        maxlength: [150, 'First name cannot be more than 20 characters']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }

})


module.exports = mongoose.model('Flower', FlowersSchema)