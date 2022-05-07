const UserModel = require("../models/User");
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

//Se obtiene las variables de entorno
const config = "secret";

// creación de nuevos usuarios
module.exports.signup = async (req, res, next) => {
  var {username, pwd} = req.body;


  
  
  

  
  
  const User = await new UserModel({username, pwd});
  User.save();
  res.json(User);
};

// logueo de usuarios
module.exports.signin = async (req, res, next) => {

  const { username, pwd  } = req.body;

  const user = await UserModel.findOne({ username: username }).populate('theme').exec();


  if (!user) {

      res.json({ success: false, msg: 'Authentication failed. User not found.' });
  }else{
    user.comparePassword(pwd, user.pwd, function (err, isMatch) {
      if (isMatch && !err) {
        // Si el usuario es correcto y la contraseña coindice se procede a crear el token
        const token = jwt.sign(
          { username: username },
          config,
          { expiresIn: "4h" }
        );
        // return the information including token as JSON
        const payload = { user: user.username, _id: user._id, theme: user.theme};
        console.log(user.theme)
        res.json({ success: true, token: token, user: payload });
      } else {
          //si la contraseña no coincide se procede a indicar el error
          //res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
          res.json({ success: false, msg: 'Authentication failed. Wrong password.' });
      }
  });
  }
  
  
      
      //Si el usuario existe verifica si las contraseñas
      
   
  }

module.exports.get = async (req, res, next) => {
    
        const user = await UserModel.find().populate('theme').exec();
        res.json(user);
    
   

}


module.exports.getById = async (req, res) => {
  const id = req.params.id;
  var user = await UserModel.findOne({ _id: id }).populate('theme').exec();
  
  res.json(user);
};






  


  module.exports.update = async (req, res) => {

   

    var { username, pwd, email } = req.body;

    
      
      bcrypt.genSalt(10, function (err, salt) {
        
        bcrypt.hash(pwd, salt, null, async function (err, hash) {
           
          
          pwd = hash;
          const user = await UserModel.findOneAndUpdate(
      
            { _id: req.params.id },
            { username, pwd, email}, // ==> {title: title, body: body}
            { new: true } // retornar el registro que hemos modificado con los nuevos valores
          );
      
          
          res.json(user);
        });
    });
  
    
  };

 