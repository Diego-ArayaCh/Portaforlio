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
  birthDate: {
    type: Date,
    default: Date.now,
  },
  jobPhone: {
    type: String,
  },
  personalPhone: {
    type: String,
  },
  image: {
    type: String
  }
});






const ContactModel = model("Contact", ContactSchema);

module.exports = ContactModel;