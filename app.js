//server file

require('dotenv').config()

const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const router = require('./routes/book-routes')

//middleware
app.use(express.json())

app.use('/books',router) //main route

//connect to db

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to db")
    app.listen(5000,()=>{
        console.log("Listening for requests")
    })
})
.catch((err)=>{
    console.log(err)
})