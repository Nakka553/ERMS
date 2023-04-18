const timesheetServices=require('../services/timesheet.service');
const {callService} = require("../controllers/callService");

// const getApproverTimesheet = async(req,res) => {
   
//     callService(timesheetServices.getApproverTimesheetServices,req,res)
    
// }

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

const getTimesheetForParticularDatesController=async(req,res)=>{
    callService(timesheetServices.getTimesheetForParticularDatesServices,req,res)

}

module.exports={
    // getApproverTimesheet,
    addTimeSheet,
    editTimeSheet,
    deleteTimeSheet,
    getTimesheetStatusController,
    getTimesheetForParticularDatesController
}
