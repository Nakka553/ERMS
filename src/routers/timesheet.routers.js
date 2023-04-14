const express=require('express');
const router=express.Router();
const timesheet=require('../controllers/timesheet.controller');
const  {verifyToken}  = require('../../express/auth');


router.get('/getTimesheet',verifyToken,timesheet.getTimesheet);
router.post('/addTimeSheet',verifyToken,timesheet.addTimeSheet);
router.put('/editTimeSheet',verifyToken,timesheet.editTimeSheet);
router.delete('/deletetimesheet/:id',verifyToken,timesheet.deleteTimeSheet)
router.get('/gettimesheetforParticularDates',timesheet.getParticularDatestimesheet);


module.exports=router;



