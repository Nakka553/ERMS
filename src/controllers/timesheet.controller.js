const timesheetServices=require('../services/timesheet.service');
const {callService} = require("../controllers/callService");

const addApproverTimesheet = async(req,res) => {
   
    callService(timesheetServices.addApproverTimesheetServices,req,res)
    
}
const  addTimesheetForEmployee = async(req,res) => {
   
    callService(timesheetServices.addTimesheetForEmployeeServices,req,res)
    
}
const getTimesheetStatusController = async (req, res) => {

    callService(timesheetServices.getTimesheetStatusServices, req, res)

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

const getParticularDatestimesheet=async(req,res)=>{
    callService(timesheetServices.getParticularDatestimesheetServices,req,res)

}

module.exports={
    addApproverTimesheet,
    addTimeSheet,
    editTimeSheet,
    deleteTimeSheet,
    getTimesheetStatusController,
    getParticularDatestimesheet,
    addTimesheetForEmployee
}
