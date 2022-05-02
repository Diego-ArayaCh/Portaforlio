const fs = require('fs');
const ContactModel = require("../models/Contact");


//Se verifica que el token sea valido
const deleteOldImage = async (req, res, next) => {
  try {
    var id = await req.params.id;
    var change = await  req.params.change;
    
    var Contact = await ContactModel.findOne({
      _id: id
    }).exec()

    var image = Contact.image
    console.log(typeof change)
    if (change == "true") {
      if (!image.includes('/')) {
        console.log(change)
        return next();
        }else{
        let array = image.split('/');
        var filename = array[array.length - 1];
        fs.unlink(`${__dirname}/../src/public/img/${filename}`, (err => {
          if (err) console.log(err);
          else {
            console.log(`\nDeleted file: ../src/public/img/${filename}`);
          }
        }));
      }
    }









  } catch (e) {
    console.log(e);
  }
  return next();
};

module.exports = deleteOldImage;