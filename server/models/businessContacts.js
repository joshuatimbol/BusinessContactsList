/*  JOSHUA TIMBOL 301068352
     COMP229 SEC005
     ASSIGNMENT 2
     OCTOBER 22, 2020*/

let mongoose = require('mongoose');

// create a model class
let businessContact = mongoose.Schema({
    name: String,
    number: String,
    email: String,
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', businessContact);
