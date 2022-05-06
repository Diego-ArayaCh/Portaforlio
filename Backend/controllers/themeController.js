const ThemeModel = require("../models/Theme");
const UserModel = require("../models/User");





module.exports.get = async (req, res, next) => {
    
    const theme = await ThemeModel.find().exec();
    res.json(theme);
}

module.exports.getById = async (req, res, next) => {
const id = req.params.id;
var theme = await ThemeModel.findOne({ _id: id }).exec();

res.json(theme);
};



module.exports.create =  (req, res, next) => {
    var {name, fontColor,backgroundColor1, backgroundColor2, accent, primary} = req.body;
    
state = 1;

var theme = new ThemeModel({ name, fontColor,backgroundColor1, backgroundColor2, accent, primary, state});
    
   

    theme.save();
    res.json(theme);
  };

 



module.exports.update = async (req, res, next) => {

console.log(req.body)

var {name, fontColor,backgroundColor1, backgroundColor2, accent, primary} = req.body;


  
const theme = await ThemeModel.findOneAndUpdate(
  
    { _id: req.params.id },
    {  name, fontColor,backgroundColor1, backgroundColor2, accent, primary}, // ==> {title: title, body: body}
    { new: true } // return the register that was updated
  );

  
  res.json(theme);


};

  
  
    
  

module.exports.delete = async (req, res, next) => {
    const theme = await ThemeModel.findByIdAndRemove(req.params.id);
   
    if (theme) {
      res.json({ result: `theme deleted`, post: theme });
    } else {
      res.json({ result: "theme was not found", post: project });
    }
  };



  module.exports.save = async (req, res, next) => {

  
    
    var {idUser} = req.body;
 
      
    const user = await UserModel.findOneAndUpdate(
      
        { _id: idUser },
        { theme: req.params.id }, // ==> {title: title, body: body}
        { new: true } // return the register that was updated
      );
    
      
      res.json(theme);
    
    
    };