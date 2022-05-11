
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");



const contactController = require("../controllers/contactController");



router.put("/update-contact/:id",auth, contactController.update);




router.get('/get/', contactController.get);
router.get('/get-info/', contactController.getInfo);
router.get('/get-heavy/', contactController.getHeavy);
router.get('/get/:id', contactController.getById);



module.exports = router;

