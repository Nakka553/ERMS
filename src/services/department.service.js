const departmentModel=require('../models/department.model');


const getDepartmentServices = async (req) =>{
    try {
        // let data = req.params;
        let result=await departmentModel.getDepartmentModel();
        return {status:200,message:"success",data:result.recordsets[0]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
    getDepartmentServices
}