const employeeModel=require('../models/employeeAddress.model');

const getEmployeeServicesAddress = async (req) =>{
    try {
        // let data = req.params;
        let result=await employeeModel.getEmployeeModelAddress();
        return {status:200,message:"success",data:result.recordsets}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
   
    getEmployeeServicesAddress 
    
}