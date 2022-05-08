
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const projectController = require("../controllers/projectController");

router.post("/create-project",auth ,projectController.create);

router.put("/update-project/:id",auth, projectController.update);
router.put("/state-change/:id",auth, projectController.state);


router.delete('/delete-project/:id',auth, projectController.delete);

router.get('/get/', projectController.get);
router.get('/get-count/', projectController.getCount);

router.get('/get/:id', projectController.getById);



module.exports = router;

