const PublicSchemaResolvers = require('./PublicSchemaResolvers');
const PortfolioSchemaResolvers = require('./PortfolioSchemaResolvers');
const ContactFormSchemaResolver = require('./ContactFormSchemaResolver');


const resolvers = [
    PublicSchemaResolvers, PortfolioSchemaResolvers, ContactFormSchemaResolver,
];

module.exports = resolvers;
