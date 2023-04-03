const leaveModel=require('../models/leave.model');


const getLeaveServices = async (req) =>{
    try {
        // let data = req.params;
        let result=await leaveModel.getLeaveModel();
        return {status:200,message:"success",data:result.recordsets[0]}

    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}

const addLeaveServices = async (req) =>{
    try {
        let data = req.body;
        let result=await leaveModel.addLeaveModel(data);
        return {status:200,message:"success",data:[]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
const editLeaveServices = async (req) =>{
    try {
        let data = req.body;
        let result=await leaveModel.editLeaveModel(data);
        return {status:200,message:"success",data:[]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
    getLeaveServices,
    addLeaveServices,
    editLeaveServices
}