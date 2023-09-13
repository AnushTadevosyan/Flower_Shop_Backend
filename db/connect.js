const mongoose = require('mongoose')


const connectDB = (url) =>{
     // .connect() is a promse and then() we handle it

     return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
     })

}

module.exports = connectDB

