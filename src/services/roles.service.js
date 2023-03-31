const roleModel=require('../models/roles.model');


const getRolesServices = async (req) =>{
    try {
        // let data = req.params;
        let result=await roleModel.getRolesModel();
        return {status:200,message:"success",data:result.recordsets[0]}
    } catch (error) {
    return{status:400,message:"error",data:"something went wrong"}
        
    }
}
const addRoleServices = async (req) => {
    try {
        let data = req.body;
        console.log(data)
        await roleModel.addRoleDetailsModel(data)

        return { status: 200, message: "success", data: [] }

    }
    catch (error) {
        console.log(error)
         return { status: 400, message: "error", data: "something went wrong" }
        
    }
}
module.exports={
    getRolesServices,
    addRoleServices
}