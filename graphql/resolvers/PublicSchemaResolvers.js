const { findAllProjects, createContactForm, portfolioMeta } = require('../../services/PortfolioService');

module.exports = {
    Query: {
        portfolioMeta: () => portfolioMeta(),
        projects: () => findAllProjects(),
    },
    Mutation: {
        createContactForm: (root, args) => createContactForm(root, args),
    },
};
