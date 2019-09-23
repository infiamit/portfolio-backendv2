const GraphQLJSON = require('graphql-type-json');

const { findAllProjects, createContactForm, portfolioMeta } = require('../../services/PortfolioService');


module.exports = {
    JSON: GraphQLJSON,

    Query: {
        portfolioMeta: () => portfolioMeta(),
        projects: () => findAllProjects(),

    },
    Mutation: {
        createContactForm: (root, args) => createContactForm(root, args),
    },
};
