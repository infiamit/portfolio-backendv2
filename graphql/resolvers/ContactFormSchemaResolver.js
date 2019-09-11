const {
    contactFormService,
} = require('../../services/PortfolioService');

module.exports = {

    Query: {
        contactForm: () => contactFormService(),
    },
};
