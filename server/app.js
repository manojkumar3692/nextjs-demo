const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

const GigsRoute = require('./routes/gigs')



// Test DB 

db.authenticate()
.then(() => console.log('Database connected'))
.catch(err => console.log('Error '+ err))


const app = express();

app.get('/',(req,res) => res.send('Index'));

//Gigs Route

app.use('/gigs',GigsRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log('Server started in port 5000'))

