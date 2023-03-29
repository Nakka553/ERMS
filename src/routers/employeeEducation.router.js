const express=require('express');
const router=express.Router();
const employee=require('../controllers/employeeEducation.controller');
router.get('/getemployeeEducation',employee.getEmployeeEducation);


module.exports=router;

