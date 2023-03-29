const leaveModel=require('../models/leave.model');


const getLeaveServices = async (req) =>{
    try {
        // let data = req.params;
        let result=await leaveModel.getLeaveModel();
        return {status:200,message:"success",data:result.recordsets}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
    getLeaveServices
}