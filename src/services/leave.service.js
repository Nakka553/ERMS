const leaveModel=require('../models/leave.model');


const addApproverLeaveServices = async (req) =>{
    try {
         let data = req.body;
        let result=await leaveModel.addApproverLeaveModel(data.EMPLOYEE_ID);
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
        await leaveModel.editLeaveModel(data);
        return {status:200,message:"success",data:[]}
    } catch (error) {
        console.log(error);
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}

const deleteLeaveServices = async (req) =>{
    try {
        let data = req.params;
        await leaveModel.deleteLeaveModel(data);
        return {status:200,message:"success",data:[]}
    } catch (error) {
        console.log(error);
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
const addLeaveforEmployeeIDServices = async (req) =>{
    try {
         let data = req.body;
        let result=await leaveModel.addLeaveforEmployeeIDModel(data.EMPLOYEE_ID);
        return {status:200,message:"success",data:result.recordsets[0]}

    } catch (error) {
        
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}

module.exports={
    addApproverLeaveServices,
    addLeaveServices,
    editLeaveServices,
    deleteLeaveServices,
    addLeaveforEmployeeIDServices
}