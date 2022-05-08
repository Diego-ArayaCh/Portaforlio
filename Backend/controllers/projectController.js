const ProjectModel = require("../models/Project");






module.exports.get = async (req, res, next) => {
    
    const project = await ProjectModel.find().exec();
    res.json(project);



}

module.exports.getById = async (req, res, next) => {
const id = req.params.id;
var project = await ProjectModel.findOne({ _id: id }).exec();

res.json(project);
};
module.exports.getCount = async (req, res, next) => {
 
  var project = await ProjectModel.find().count();
  
  res.json(project);
  };



module.exports.create =  (req, res, next) => {
    var { title, shortDescription, image, content, repoLink, demoLink} = req.body;
    
state = 1;

var Project = new ProjectModel({ title, shortDescription,  image, content, repoLink, demoLink, state});
    
   

    Project.save();
    res.json(Project);
  };

  module.exports.saveImage = async (req, res, next) => {

    
let change = await req.params.change
    host = process.env.HOST
   port = process.env.PORT
//these must have changed before to upload ------------------
    
    
   if( req.file){
    var image= `${host}/public/${req.file.filename}` 
    var project;
     project = await ProjectModel.findOneAndUpdate(
      
      { _id: req.params.id },
      {   image }, // ==> {title: title, body: body}
      { new: true } // return the register that was updated
    );
   }else{
      project = await ProjectModel.findById(req.params.id);
   }   
   
    
      
      res.json(project);
    
    
    };



module.exports.update = async (req, res, next) => {



var { title, shortDescription, content, repoLink, demoLink, image } = req.body;


  
const project = await ProjectModel.findOneAndUpdate(
  
    { _id: req.params.id },
    {  title, shortDescription, content, repoLink, demoLink, image }, // ==> {title: title, body: body}
    { new: true } // return the register that was updated
  );

  
  res.json(project);


};
module.exports.state = async (req, res, next) => {



  var { state } = req.body;
  
  
    
  const project = await ProjectModel.findOneAndUpdate(
    
      { _id: req.params.id },
      {  state}, 
      { new: true } // return the register that was updated
    );
  
    
    res.json(project);
  
  
  };

module.exports.delete = async (req, res, next) => {
    const project = await ProjectModel.findByIdAndRemove(req.params.id);
   
    if (project) {
      res.json({ result: `Project deleted`, post: project });
    } else {
      res.json({ result: "Project was not found", post: project });
    }
  };