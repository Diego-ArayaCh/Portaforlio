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



module.exports.create =  (req, res, next) => {
    var { title, shortDescription, image, content, repoLink, demoLink} = req.body;
    
state = 1;

var Project = new ProjectModel({ title, shortDescription,  image, content, repoLink, demoLink, state});
    
   

    Project.save();
    res.json(Project);
  };

  module.exports.saveImage = async (req, res, next) => {

    

    host = process.env.HOST
   port = process.env.PORT
var image= `${host}:${port}/public/${req.file.filename}` 
    
    
      
    const project = await ProjectModel.findOneAndUpdate(
      
        { _id: req.params.id },
        {   image }, // ==> {title: title, body: body}
        { new: true } // return the register that was updated
      );
    
      console.log(project.image)
      res.json(project);
    
    
    };



module.exports.update = async (req, res, next) => {



var { title, shortDescription, image, content, repoLink, demoLink } = req.body;


  
const project = await ProjectModel.findOneAndUpdate(
  
    { _id: req.params.id },
    {  title, shortDescription, image, content, repoLink, demoLink }, // ==> {title: title, body: body}
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
    const project = await AvionModel.findByIdAndRemove(req.params.id);
   
    if (project) {
      res.json({ result: `Project deleted`, post: project });
    } else {
      res.json({ result: "Project was not found", post: project });
    }
  };