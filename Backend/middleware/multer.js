const multer = require('multer');
storage = multer.diskStorage({
    destination: (req, file, cb) => {

        



        cb(null, 'src/public/img')
    },
    filename: (req, file, cb) => {
     
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${file.fieldname}${uniqueSuffix}.${file.mimetype.split('/')[1]}`);
       
}})

upload = multer({
    storage
});

module.exports = upload;