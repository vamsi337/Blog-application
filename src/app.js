
const express = require('express');
const dotenv= require('dotenv')
dotenv.config();

const app = express();

const PORT= 5000 || process.env.PORT

app.get('/home', (req,res)=>{
    res.send('Hi')
})
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})