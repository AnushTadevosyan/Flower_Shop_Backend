const connectDB = require('./db/connect')
require('dotenv').config();
const express = require('express')
const app = express()

// Routers
const bouquets = require('./routes/bouquets')
const vases = require('./routes/vases')
const users = require('./routes/users');
const signiture_boxes = require('./routes/signiture_boxes');
const { createVases } = require('./controllers/vases');


app.use(express.json())

app.get('/', (req,res) => {
    res.send('<h1>Anemon Website</h1>')
})

app.use('/bouquet', bouquets)
app.use('/vases', vases)
app.use('/users', users)
app.use('/signiture-boxes',signiture_boxes)

const port = process.env.PORT || 3000;

const start = async() => {
    try{

        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('server listening to port 4043...'));

    }catch(error){
        console.log(error)
    }
}

start()