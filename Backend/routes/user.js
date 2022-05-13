const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const userController = require("../controllers/userController");

router.post("/signup",auth, userController.signup);

router.post("/signin", userController.signin);

router.get('/get/',auth, userController.get);

router.put('/update-profile/:id',auth, userController.update);
router.put('/recovery-password',auth, userController.recovery);

router.get('/get/:id',auth, userController.getById);

router.get('/get/:email',auth, userController.getByEmail);

module.exports = router;
