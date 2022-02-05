/*  JOSHUA TIMBOL 301068352
     COMP229 SEC005
     ASSIGNMENT 2
     OCTOBER 22, 2020*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const businesscontacts = require('../models/businessContacts');

let passport = require('passport');

//connect to my business contact model
let Business = require('../models/businessContacts');

let businessController = require('../controllers/businessContacts');

//helper function for guard purposes
function requireAuth(req,res,next) 
{
    //check if user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contact List page - READ OPeration */
router.get('/', businessController.displayContactsList);

/* GET route for displaying Add page - CREATE Operation */
router.get('/add', requireAuth, businessController.displayAddPage);

/* POST route for processing Add page - CREATE Operation */
router.post('/add', requireAuth, businessController.processAddPage);

/* GET route for displaying Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

/* POST route for processing Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, businessController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, businessController.performDelete);



module.exports = router;