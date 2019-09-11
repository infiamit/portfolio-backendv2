const mongoose = require('mongoose');
const ContactForm = require('./ContactForm');
const PortfolioMeta = require('./PortfolioMeta');
const Projects = require('./Projects');
const User = require('./User');

const connectDb = () => mongoose.connect(process.env.DATABASE_URL_PORTFOLIO, {
    useNewUrlParser: true,
});
const models = {
    PortfolioMeta, ContactForm, Projects, User,
};


module.exports = {
    connectDb,
    models,
};
