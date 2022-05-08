const UserModel = require("../models/User");
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

//Se obtiene las variables de entorno
const config = "secret";

// creación de nuevos usuarios
module.exports.signup = async (req, res) => {
  var {username, pwd, backupKey, email} = req.body;


  
  
  

  
  
  const User = await new UserModel({username, pwd, backupKey, email});
  User.save();
  res.json(User);
};

// logueo de usuarios
module.exports.signin = async (req, res) => {

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

module.exports.getByEmail = async (req, res) => {
  const email = req.params.email;
  var user = await UserModel.findOne({ email }).populate('theme').exec();
  
  res.json(user);
};





  


  module.exports.update = async (req, res) => {

   

    var { username, email,backupKey } = req.body;

    
      
     
          const user = await UserModel.findOneAndUpdate(
      
            { _id: req.params.id },
            { username, email,backupKey}, // ==> {title: title, body: body}
            { new: true } // retornar el registro que hemos modificado con los nuevos valores
          );
      
          
          res.json(user);
        
   
  
    
  };

  module.exports.recovery = async (req, res) => {

   

    var { pwd, email,backupKey } = req.body;

    const userOld = await UserModel.findOne({email}).exec()
      if(userOld){
        if(backupKey === userOld.backupKey){
          bcrypt.genSalt(10, function ( salt) {
        
            bcrypt.hash(pwd, salt, null, async function (err, hash) {
               
              
              pwd = hash;
              const user = await UserModel.findOneAndUpdate(
          
                { _id: userOld._id },
                {  pwd}, // ==> {title: title, body: body}
                { new: true } // retornar el registro que hemos modificado con los nuevos valores
              );
          
              
              res.json({ success:true, message:'The password has been changed',user:user});
            });
        });
        }else{
          res.json({success: false, message:'The backup key is invalid'})
        }
       
      }else{
        res.json({success: false, message:'The email address is not exist'})
      }
     
  
    
  };