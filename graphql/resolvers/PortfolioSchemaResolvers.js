const { createProject, updatePortfolioMeta, updateProject } = require('../../services/PortfolioService');

module.exports = {

    Mutation: {
        createProject: (root, args) => createProject(root, args),
        updateProject: (root, args) => updateProject(root, args),
        updatePortfolioMeta: (root, args) => updatePortfolioMeta(root, args),
    },
};
