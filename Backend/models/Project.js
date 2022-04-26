const {Schema, model} = require('mongoose');




const ProjectSchema = new Schema({
  title: {
    type: String,
  },
  shortDescription: {
    type: String
  },
  image: {
    type: String,
  },
  content: {
      type: String,
  },
  repoLink: {
      type: String
  },
  demoLink: {
      type: String
  },
  state:{
      type: Number
  }

});





const ProjectModel = model("Project", ProjectSchema);

module.exports = ProjectModel;