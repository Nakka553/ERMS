const express=require('express');
const router=express.Router();
const employee=require('../controllers/employee.controller');
router.get('/getemployee',employee.getEmployee);


module.exports=router;
