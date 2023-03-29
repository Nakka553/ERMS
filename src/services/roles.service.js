const roleModel=require('../models/roles.model');


const getRolesServices = async (req) =>{
    try {
        // let data = req.params;
        let result=await roleModel.getRolesModel();
        return {status:200,message:"success",data:result.recordsets}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
    getRolesServices
}