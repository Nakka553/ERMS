const  express  = require("express");
const router = express.Router() ;
const departmentController= require("../controllers/department.controller")
const {verifyToken}=require('../../express/auth')

router.get('/getDepartment',verifyToken,departmentController.getDepartmentController);
router.post('/addDepartment',verifyToken,departmentController.addDepartmentController);
router.put('/editDepartment',verifyToken,departmentController.editDepartmentController);
router.delete('/deleteDepartment/:id',verifyToken,departmentController.deleteDepartmentController);
module.exports=router;