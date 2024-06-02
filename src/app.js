
const express = require('express');
const dotenv= require('dotenv')
dotenv.config();
const expressLayout= require('express-ejs-layouts')
const app = express();
app.use(expressLayout);

app.use(express.static('public'));
app.use('/app', require('./routes/homepage.route'))
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
const PORT= 5000 || process.env.PORT


app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})