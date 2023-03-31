const employeeModel=require('../models/employee.model');

const getEmployeeServices = async (req) =>{
    try {
        // let data = req.params;
        let result=await employeeModel.getEmployeeModel();
        return {status:200,message:"success",data:result.recordsets[0]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
   
    getEmployeeServices,
    
}