const leaveServices = require('../services/leave.service');
const {callService} = require("../controllers/callService")

// const getApproverLeaveController = async(req,res)=>{
   
//     callService(leaveServices.getApproverLeaveServices,req,res);
// }

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


const getLeavesStatusController = async (req, res) => {

    callService(leaveServices.getLeavesStatusServices, req, res)

}

const getLeavesForParticularDatesController = async (req, res) => {

    callService(leaveServices.getLeavesForParticularDatesServices, req, res)

}
module.exports={
    // getApproverLeaveController,
    addLeaveController,
    editLeaveController,
    deleteLeaveController,
    getLeavesStatusController,
    addLeaveforEmployeeIDController,
    getLeavesForParticularDatesController
};