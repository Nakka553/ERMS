const departmentModel=require('../models/department.model');


const getDepartmentServices = async () =>{
    try {
        if(result?.recordset?.recordsets[0]){
        // let data = req.params;
        let result=await departmentModel.getDepartmentModel();
        return {status:200,message:"success",data:result.recordset}
    } 
    else{
        return{status:401,message:"fail",data:"Their is no data"}
      }
    }
    catch (error) {
    return{status:401,message:error.message,data:"something went wrong"}      
    }
}

const addDepartmentServices = async (req) =>{
    try {
        if(result?.recordset?.recordsets[0]){
        let data = req.body;
        let result=await departmentModel.addDepartmentModel(data);
        return {status:200,message:"success",data:[]}
    } 
    else{
        return{status:401,message:"fail",data:"Their is no data"}
      }
    }
    catch (error) {
    return{status:401,message:"error",data:"something went wrong"}   
    }
}

const editDepartmentServices = async (req) =>{
    try {
        if(result?.recordset?.recordsets[0]){
        let data = req.body;
        let result=await departmentModel.editDepartmentModel(data);
        return {status:200,message:"success",data:[]}
    } 
    else{
        return{status:401,message:"fail",data:"Their is no data"}
      }
    }
    catch (error) {
    return{status:401,message:"error",data:"something went wrong"}   
    }
}


const deleteDepartmentServices = async (req) =>{
    try {
        if(result?.recordset?.recordsets[0]){
        let data = req.params;
        let result=await departmentModel.deleteDepartmentModel(data);
        return {status:200,message:"success",data:[]}
    } 
    else{
        return{status:401,message:"fail",data:"Their is no data"}
      }
    }
    catch (error) {
    return{status:401,message:"error",data:"something went wrong"}   
    }
}


module.exports={
    getDepartmentServices,
    addDepartmentServices,
    editDepartmentServices,
    deleteDepartmentServices

}