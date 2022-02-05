/*  JOSHUA TIMBOL 301068352
     COMP229 SEC005
     ASSIGNMENT 2
     OCTOBER 22, 2020*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const businessContacts = require('../models/businessContacts');

// create a reference to the model
let Contact = require('../models/businessContacts');

module.exports.displayContactsList = (req, res, next) => {
    Contact.find((err, businessContacts) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('businessContacts/list', 
            {title: 'Business Contacts', 
            BusinessContactList: businessContacts,
            displayName: req. user ? req.user.displayName: ''})            
        }
    });
};


module.exports.displayAddPage = (req, res, next) => {
    res.render('businessContacts/add', {title: 'Add a new Contact',
    displayName: req.user ? req.user.displayName : ''})
};

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/business-contacts');
        }
    });
    
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businessContacts/edit', {title: 'Edit an existing Contact', businessContacts: contactToEdit,
            displayName: req. user ? req.user.displayName: ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact ({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
        
    });
    
    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/business-contacts');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/business-contacts');
        }
    });
}