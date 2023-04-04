const  express  = require("express");
const router = express.Router() ;
const departmentController= require("../controllers/department.controller")

router.get('/getDepartment',departmentController.getDepartmentController);
router.post('/addDepartment',departmentController.addDepartmentController);
router.put('/editDepartment',departmentController.editDepartmentController);
router.delete('/deleteDepartment/:id',departmentController.deleteDepartmentController);
module.exports=router;