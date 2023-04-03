const express=require('express');
const router=express.Router();
const employee=require('../controllers/employee.controller');

router.get('/getallemployeeDetails',employee.getallEmployeeDetails);

router.post('/addAllEmployeeDetails',employee.addAllEmployeeDetails)

router.put('/editAllEmployeesDetails',employee.editAllEmployeesDetailsController);

router.delete('/deleteAllEmployeesDetails/:id',employee.deleteAllEmployeesDetailsController)

router.get('/getemployeeAddress',employee.getEmployeeAddress);
router.get('/getemployeeEducation',employee.getEmployeeEducation);
router.get('/getWorkExperience',employee.getWorkExperience);
router.get('/getemployee',employee.getEmployee);

module.exports=router;

