const express=require('express');
const router=express.Router();
const employee=require('../controllers/employee.controller');
const  {verifyToken}  = require('../../express/auth');

router.get('/getallemployeeDetails',verifyToken,employee.getallEmployeeDetails);
router.get('/getallEmployeeByIdDetails/:id',verifyToken,employee.getallEmployeeByIdDetails);
router.put('/editAllEmployeesDetails',verifyToken,employee.editAllEmployeesDetailsController);
router.post('/addAllEmployeeDetails',verifyToken,employee.addAllEmployeeDetails);
router.delete('/deleteAllEmployeeDetils/:id',verifyToken,employee.deleteAllEmployeesDetailsController);
router.post('/getEmpProjectManagerDetails',verifyToken,employee.getEmpProjectManagerDetailsController);

router.get('/getemployeeAddress',verifyToken,employee.getEmployeeAddress);
router.get('/getemployeeEducation',verifyToken,employee.getEmployeeEducation);
router.get('/getWorkExperience',verifyToken,employee.getWorkExperience);
router.get('/getemployee',verifyToken,employee.getEmployee);

module.exports=router;