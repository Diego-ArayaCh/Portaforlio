const ContactModel = require("../models/Contact");






module.exports.get = async (req, res, next) => {
    
    const contact = await ContactModel.find().exec();
    res.json(contact);
}

module.exports.getById = async (req, res, next) => {
const id = req.params.id;
var contact = await ContactModel.findOne({ _id: id }).exec();

res.json(contact);
};



module.exports.create =  (req, res, next) => {
    var { name, lastName, email, phoneNumber, image} = req.body;
    
state = 1;

var contact = new ContactModel({ name, lastName, email, phoneNumber, image, state});
    
   

    contact.save();
    res.json(contact);
  };

  module.exports.saveImage = async (req, res, next) => {

    
let change = await req.params.change
    host = process.env.HOST
   port = process.env.PORT
    //these must have changed before to upload ------------------
    
    
   if(change == "true" && req.file){
    var image= `${host}/public/${req.file.filename}` 
    var contact;
     contact = await ContactModel.findOneAndUpdate(
      
      { _id: req.params.id },
      {   image }, // ==> {title: title, body: body}
      { new: true } // return the register that was updated
    );
   }else{
      contact = await ContactModel.findById(req.params.id);
   }   
   
    
      
      res.json(contact);
    
    
    };



module.exports.update = async (req, res, next) => {

console.log(req.body)

var {name, lastName, email, phoneNumber, linkedInLink, description} = req.body;


  
const contact = await ContactModel.findOneAndUpdate(
  
    { _id: req.params.id },
    {  name, lastName, email, phoneNumber, linkedInLink, description }, // ==> {title: title, body: body}
    { new: true } // return the register that was updated
  );

  
  res.json(contact);


};

  
  
    
  

module.exports.delete = async (req, res, next) => {
    const contact = await AvionModel.findByIdAndRemove(req.params.id);
   
    if (contact) {
      res.json({ result: `contact deleted`, post: contact });
    } else {
      res.json({ result: "contact was not found", post: project });
    }
  };