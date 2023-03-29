const  express  = require("express");

const router = express.Router() ;

const projectController= require("../controllers/project.controller")

router.get('/getProject',projectController.getProjectController);

module.exports=router;