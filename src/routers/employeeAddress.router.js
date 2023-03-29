const express=require('express');
const router=express.Router();
const employee=require('../controllers/employeeAddress.controller');
router.get('/getemployeeAddress',employee.getEmployeeAddress);


module.exports=router;

