const express=require('express');
const router=express.Router();
const timesheet=require('../controllers/timesheet.controller');


router.get('/getTimesheet',timesheet.getTimesheet);
router.post('/addTimeSheet',timesheet.addTimeSheet);
router.put('/editTimeSheet',timesheet.editTimeSheet);
router.delete('/deletetimesheet/:id',timesheet.deleteTimeSheet)
router.get('/getDateTimeSheet',timesheet.getDateTimesheet);

module.exports=router;



