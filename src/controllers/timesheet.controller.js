const timesheetServices=require('../services/timesheet.service');
const {callService} = require("../controllers/callService");

const getTimesheet = async(req,res) => {
    
    callService(timesheetServices.getTimeSheetServices,req,res)
    
}
const addTimeSheet=async(req,res)=>{
    callService(timesheetServices.addTimeSheetServices,req,res)

}



module.exports={
    getTimesheet,
    addTimeSheet,
    
}