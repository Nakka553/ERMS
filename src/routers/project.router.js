const  express  = require("express");
const router = express.Router() ;
const projectController= require("../controllers/project.controller");

router.get('/getProject',projectController.getProjectController);
router.post('/addProject',projectController.addProjectController);

module.exports=router;