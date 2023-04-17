const leaveServices = require('../services/leave.service');
const {callService} = require("../controllers/callService")

const addApproverLeaveController = async(req,res)=>{
   
    callService(leaveServices.addApproverLeaveServices,req,res);
}

const addLeaveController = async(req,res)=>{
    callService(leaveServices.addLeaveServices,req,res);
}

const editLeaveController = async(req,res)=>{
    callService(leaveServices.editLeaveServices,req,res);
}


const deleteLeaveController = async(req,res)=>{
    callService(leaveServices.deleteLeaveServices,req,res);
}
const addLeaveforEmployeeIDController = async(req,res)=>{
   
    callService(leaveServices.addLeaveforEmployeeIDServices,req,res);
}

module.exports={
    addApproverLeaveController,
    addLeaveController,
    editLeaveController,
    deleteLeaveController,
    addLeaveforEmployeeIDController
};