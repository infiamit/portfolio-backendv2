const { gql } = require('apollo-server-express');

module.exports = gql`
scalar JSON
scalar JSONOBJECT
type PortfolioMeta{
  metaKey: String
  metaValue: JSON
  metaType: String
  _id: JSON
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
    subject: String
  }

 type Mutation{
    createContactForm(contactFormInput: ContactFormInput) : Boolean
  }
 
`;
