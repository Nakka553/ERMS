const employeeModel=require('../models/employeeEducation.model');

const getEmployeeServicesEducation = async (req) =>{
    try {
        // let data = req.params;
        let result=await employeeModel.getEmployeeModelEducation();
        return {status:200,message:"success",data:result.recordsets}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
   
    getEmployeeServicesEducation
    
}