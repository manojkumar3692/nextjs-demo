const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig')

router.get('/',(req,res) => 
    Gig.findAll()
    .then(gigs => {
        console.log(gigs)
        res.sendStatus(200)
    })
    .catch(error => console.log(error))
);

router.get('/add',(req,res) => {
    const data = {
        title: 'Looking for a Python Developer',
        description: 'Frontend Cool Guy',
        budget: '$6000',
        technology: 'react,js,html',
        contact_email: 'manoj@inside.com'
    }

    Gig.create(data)
    .then(gigs => {
        res.sendStatus(200)
    })
    .catch(error => console.log('error ' + error ))

})

module.exports = router