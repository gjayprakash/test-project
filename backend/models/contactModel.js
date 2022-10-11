const mongoose = require('mongoose');
let contactSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    
   
});

module.exports = mongoose.model('ContactModel', contactSchema, 'Contacts');