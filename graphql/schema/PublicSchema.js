const { gql } = require('apollo-server-express');

module.exports = gql`
type PortfolioMeta{
  metaKey: String
  metaValue: String
  metaType: String
}

type Project{
  _id: String
  projectTitle: String
 projectDescription: String
projectUrl: String
projectImages: String
projectIcon: String
}

  type Query {

    portfolioMeta:  [PortfolioMeta]
    projects: [Project]
  } 

  input ContactFormInput{
     name: String
    email: String
    phone: String
    website: String
    message: String
  }

 type Mutation{
    createContactForm(contactFormInput: ContactFormInput) : Boolean
  }
 
`;
