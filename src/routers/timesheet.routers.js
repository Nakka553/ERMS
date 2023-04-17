const express=require('express');
const router=express.Router();
const timesheet=require('../controllers/timesheet.controller');
const  {verifyToken}  = require('../../express/auth');

router.post('/getTimesheet',verifyToken,timesheet.getApproverTimesheet);
router.post('/addTimeSheet',verifyToken,timesheet.addTimeSheet);
router.put('/editTimeSheet',verifyToken,timesheet.editTimeSheet);
router.delete('/deletetimesheet/:id',verifyToken,timesheet.deleteTimeSheet);
router.get('/getTimesheetStatus',verifyToken,timesheet.getTimesheetStatusController);
router.get('/gettimesheetforParticularDates',verifyToken,timesheet.getParticularDatestimesheet);

module.exports=router;



