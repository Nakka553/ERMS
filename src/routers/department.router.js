const  express  = require("express");

const router = express.Router() ;

const departmentController= require("../controllers/department.controller")

router.get('/getDepartment',departmentController.getDepartmentController);

module.exports=router;