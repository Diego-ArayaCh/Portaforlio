const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const userController = require("../controllers/userController");

router.post("/signup", userController.signup);

router.post("/signin", userController.signin);

router.get('/get/', userController.get);

router.put('/update-profile/:id',auth, userController.update);

router.get('/get/:id',auth, userController.getById);



module.exports = router;
