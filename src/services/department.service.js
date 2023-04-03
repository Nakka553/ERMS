const departmentModel=require('../models/department.model');


const getDepartmentServices = async () =>{
    try {
        // let data = req.params;
        let result=await departmentModel.getDepartmentModel();
        return {status:200,message:"success",data:result.recordset}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}      
    }
}

const addDepartmentServices = async (req) =>{
    try {
        let data = req.body;
        let result=await departmentModel.addDepartmentModel(data);
        return {status:200,message:"success",data:[]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}   
    }
}

const editDepartmentServices = async (req) =>{
    try {
        let data = req.body;
        let result=await departmentModel.editDepartmentModel(data);
        return {status:200,message:"success",data:[]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}   
    }
}

module.exports={
    getDepartmentServices,
    addDepartmentServices,
    editDepartmentServices

}