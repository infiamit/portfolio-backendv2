const { gql } = require('apollo-server-express');

module.exports = gql`
 
  input PortfolioMetaInput{
    metaKey: String
    metaValue: String
    metaType: String
  }
  
  input ProjectInput{
    _id: String
  projectTitle: String
  projectDescription: String
  projectUrl: String
  projectImages: String
  projectIcon: String
  }

   extend type Mutation{
    createProject(projectInput: ProjectInput): Project
    updateProject(projectInput: ProjectInput): Project
    updatePortfolioMeta(portfolioMetaInput: [PortfolioMetaInput]): Boolean
  }
`;
