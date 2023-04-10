const express=require('express');
const router=express.Router();
const employee=require('../controllers/employee.controller');
const  {verifyToken}  = require('../../express/auth');

router.get('/getallemployeeDetails',verifyToken,employee.getallEmployeeDetails);
router.put('/editAllEmployeesDetails',verifyToken,employee.editAllEmployeesDetailsController);
router.get('/getemployeeAddress',verifyToken,employee.getEmployeeAddress);
router.get('/getemployeeEducation',verifyToken,employee.getEmployeeEducation);
router.get('/getWorkExperience',verifyToken,employee.getWorkExperience);
router.get('/getemployee',verifyToken,employee.getEmployee);
router.post('/addAllEmployeeDetails',verifyToken,employee.addAllEmployeeDetails);
router.delete('/deleteAllEmployeeDetils/:id',verifyToken,employee.deleteAllEmployeesDetailsController);


module.exports=router;

