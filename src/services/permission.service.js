const { getPermissionModel } = require("../models/permission.model");

const getPermissionService = async () =>{
    try {
        // let data = req.params;
        let result=await getPermissionModel();
        return {status:200,message:"success",data:result.recordset}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}      
    }
}

module.exports = {
    getPermissionService
}