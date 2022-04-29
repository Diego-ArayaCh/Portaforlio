const multer = require('multer');

storage = multer.diskStorage({
    destination: (req, file, cb) => {

        var change =  req.params.change;
        if(change){
            cb(null, 'src/public/img')
        }else{
            return next()
        }


       
    },
    filename: (req, file, cb) => {
        var change = req.params.change;
        if(change){
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, `${file.fieldname}${uniqueSuffix}.${file.mimetype.split('/')[1]}`);
        }else{
            return next()
        }
        
       
}})

upload = multer({
    storage
});

module.exports = upload;