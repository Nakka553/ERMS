const timesheetServices=require('../services/timesheet.service');
const {callService} = require("../controllers/callService");

const getTimesheet = async(req,res) => {
    
    callService(timesheetServices.getTimeSheetServices,req,res)
    
}
const getDateTimesheet = async(req,res) => {
    
    callService(timesheetServices.getDateTimeSheetServices,req,res)
    
}
const addTimeSheet=async(req,res)=>{
    callService(timesheetServices.addTimeSheetServices,req,res)

}

const editTimeSheet=async(req,res)=>{
    callService(timesheetServices.editTimeSheetServices,req,res)

}
const deleteTimeSheet=async(req,res)=>{
    callService(timesheetServices.deleteTimeSheetServices,req,res)

}


module.exports={
    getTimesheet,
    addTimeSheet,
    editTimeSheet,
    deleteTimeSheet,
    getDateTimesheet
}
