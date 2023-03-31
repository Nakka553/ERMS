const express=require('express');
const router=express.Router();
const employee=require('../controllers/employee.controller');

router.get('/getallemployeeDetails',employee.getallEmployeeDetails);
router.get('/getemployeeAddress',employee.getEmployeeAddress);
router.get('/getemployeeEducation',employee.getEmployeeEducation);
router.get('/getWorkExperience',employee.getWorkExperience);
router.get('/getemployee',employee.getEmployee);
router.post('/addAllEmployeeDetails',employee.addAllEmployeeDetails)

module.exports=router;

