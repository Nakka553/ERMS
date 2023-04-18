const  express  = require("express");
const router = express.Router() ;
const projectController= require("../controllers/project.controller");
const  {verifyToken}  = require('../../express/auth');

router.get('/getProject',verifyToken,projectController.getProjectController);
router.post('/getEmpProjectDetails',verifyToken,projectController.getEmpProjectDetailsController)
router.post('/addProject',verifyToken,projectController.addProjectController);
router.put('/editProject',verifyToken,projectController.editProjectController);
router.delete('/deleteProject/:id',verifyToken,projectController.deleteProjectController);



module.exports=router;