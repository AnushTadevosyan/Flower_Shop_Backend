const connectDB = require('./db/connect')
require('dotenv').config();
const express = require('express')
const app = express()



app.get('/', (req,res) => {
    res.send('<h1>Anemon Website</h1>')
})

app.get('/occasions', (req,res) => {
    res.send('<h1>This is the occassiona page</h1>')

})

app.get('/bouquet', (req,res) => {
    res.send('<h1>This is the bouquet page</h1>')

})

app.get('/signiture-boxes', (req,res) => {
    res.send('<h1>This is the signiture boxes page</h1>')

})

app.get('/vases', (req,res) => {
    res.send('<h1>This is the vases page</h1>')

})

app.get('/about-us', (req,res) => {
    res.send('<h1>This is the about us page</h1>')

})

app.get('/login', (req,res) => {
    res.send('<h1>This is the login page</h1>')

})

app.get('/signup', (req,res) => {
    res.send('<h1>This is the signup page</h1>')

})


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