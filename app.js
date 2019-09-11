const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const resolvers = require('./graphql/resolvers/index');

const indexRouter = require('./controllers/index');
const typeDefs = require('./graphql/schema/index');
const { connectDb } = require('./models');
const PublicSchema = require('./graphql/schema/PublicSchema');
const PublicSchemaResolvers = require('./graphql/resolvers/PublicSchemaResolvers');

connectDb();

const app = express();
if (process.env.NODE_ENV === 'production') {
    app.disable('x-powered-by');
    app.use(compression());
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// console.log('')
app.use('/', indexRouter);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const auth = req.headers.authorization;
        try {
            jwt.verify(auth, process.env.PORTFOLIO_JWT_SECRET);
        } catch (err) {
            throw new AuthenticationError();
        }
        return { authenticated: true };
    },
});

const publicServer = new ApolloServer({
    typeDefs: PublicSchema,
    resolvers: PublicSchemaResolvers,
    context: () => ({ test: true }),
});
server.applyMiddleware({ app });
publicServer.applyMiddleware({
    app,
    path: '/public-graphql',
});

module.exports = app;
