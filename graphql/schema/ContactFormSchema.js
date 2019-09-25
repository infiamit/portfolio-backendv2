const { gql } = require('apollo-server-express');

module.exports = gql`

type ContactForm{
  _id: String
  name: String
 email: String
 phone: String
 website: String
 message: String
 createdAt: String
 subject: String
}

extend type Query{
  contactForm: [ContactForm]
}  

`;
