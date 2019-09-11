const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    website: {
        type: String,
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
});
const ContactForm = mongoose.model('ContactForm', ContactFormSchema);
module.exports = ContactForm;
