
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const deleteOldImage = require("../middleware/deleteOldImage_contact");

const multer = require("../middleware/multer")
const contactController = require("../controllers/contactController");



router.put("/update-contact/:id",auth, contactController.update);

router.put("/save-image/:id/:change",auth, deleteOldImage, multer.single('file'), contactController.saveImage);



router.get('/get/', contactController.get);

router.get('/get/:id', contactController.getById);



module.exports = router;

