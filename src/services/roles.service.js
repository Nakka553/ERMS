const roleModel=require('../models/roles.model');


// const getRolesServices = async (req) =>{
//     try {
//         let id = req.params.id;
//         let result=await roleModel.getRolesModel(id);
//         return {status:200,message:"success",data:result.recordsets[0]}
//     } catch (error) {
//     return{status:400,message:"error",data:"something went wrong"}
        
//     }
// }


const getRolesServices = async (req) => {
    try {
      let data = req.params; // extract the ID parameter from req.params
      let result = await roleModel.getRolesModel(data);
      return { status: 200, message: "success", data: result.recordsets[0] };
    } catch (error) {
      return { status: 400, message: "error", data: "something went wrong" };
    }
  };
  

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
const editRoleServices = async (req) => {
    try {
        let data = req.body;
        console.log(data)
        await roleModel.editRoleDetailsModel(data)

        return { status: 200, message: "success", data: [] }

    }
    catch (error) {
        console.log(error)
         return { status: 400, message: "error", data: "something went wrong" }
        
    }
}

const deleteRoleServices = async (req) =>{
    try {
  
      let data = req.params;
      let result = await roleModel.deleteRolesModel(data);
      return {status:200, message:"Successfully Deleted" ,data:[] }
    } catch (error) {
      return { status:400, message:"error", data:"Something Went Wrong" }
    }
  }

module.exports={
    getRolesServices,
    addRoleServices,
    editRoleServices,
    deleteRoleServices
    
    
}


