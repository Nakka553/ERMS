const  express  = require("express");
const router = express.Router() ;
const departmentController= require("../controllers/department.controller")

router.get('/getDepartment',departmentController.getDepartmentController);
router.post('/addDepartment',departmentController.addDepartmentController);
router.put('/editDepartment',departmentController.editDepartmentController);

module.exports=router;