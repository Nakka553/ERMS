const leaveServices = require('../services/leave.service');
const {callService} = require("../controllers/callService")

const getLeaveController = async(req,res)=>{
   
    callService(leaveServices.getLeaveServices,req,res);
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
const  getLeaveforEmployeeIDController = async(req,res)=>{
   
    callService(leaveServices.getLeaveforEmployeeIDServices,req,res);
}

module.exports={
    getLeaveController,
    addLeaveController,
    editLeaveController,
    deleteLeaveController,
    getLeaveforEmployeeIDController
};