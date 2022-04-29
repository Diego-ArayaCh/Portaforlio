

const fs = require('fs');
const ProjectModel = require("../models/Project");


//Se verifica que el token sea valido
const deleteOldImage = async (req, res, next) => {
    try {
        var id = req.params.id;
        var project = await ProjectModel.findOne({ _id: id }).exec()
       var image = project.image
        
        if(!image.includes('/')){
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
        
      

        


       
        
        } catch (e) {
          console.log(e);
        }
  return next();
};

module.exports = deleteOldImage;










