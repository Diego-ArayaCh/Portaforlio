const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


//nuevo
const ContactSchema = new Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  image: {
    type: String
  },
  description:{
    type: String
  },
  linkedInLink: {
    type: String
  }

});






const ContactModel = model("Contact", ContactSchema);

module.exports = ContactModel;