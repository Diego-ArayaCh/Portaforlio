const jwt = require("jsonwebtoken");
const userModel = require("../models/User");
//Se obtiene las variables de entorno
const config = "secret";

//Se verifica que el token sea valido
const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
  //  console.log(token);
    const { user } = jwt.verify(token, "secret");
    
    req.user = await userModel.findOne(user).populate('theme').exec();
    console.log(req.user);
  
  } catch (err) {
    console.log(err)
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;