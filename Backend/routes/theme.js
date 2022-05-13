
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");



const themeController = require("../controllers/themeController");




router.post("/create" ,auth,themeController.create);



router.get('/get/',auth, themeController.get);

router.get('/get/:id', auth,themeController.getById);

router.put('/save/:id', auth,themeController.save);

module.exports = router;

