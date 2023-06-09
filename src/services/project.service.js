const projectModel=require('../models/project.model');


const getProjectServices = async () => {
    try {
      // let data = req.params;
      let result = await projectModel.getProjectModel();
      return { status: 200, message: "success", data: result.recordsets[0] }
    } catch (error) {
      return { status: 401, message: "error", data: "something went wrong" }
  
    }
  }

  
const getEmpProjectDetailsServices = async (req) => {
  try {
    let data = req.body;
    let result = await projectModel.getEmpProjectDetailsModel(data);
    return { status: 200, message: "success", data: result.recordsets[0] }
  } catch (error) {
    return { status: 401, message: "error", data: "something went wrong" }

  }
}


const addProjectServices = async (req) =>{
    try {
        let data = req.body;
        let result=await projectModel.addProjectModel(data);
        return {status:200,message:"success",data:[]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}

const editProjectServices= async(req)=>{
  try {
    let data = req.body;
        let result=await projectModel.editProjectModel(data);
        return {status:200,message:"success",data:[]}
  } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
  }
}

const deleteProjectServices = async (req) =>{
  try {
      let data = req.params;
      await projectModel.deleteProjectModel(data);
      return {status:200,message:"success",data:[]}
  } catch (error) {
      console.log(error);
  return{status:401,message:"error",data:"something went wrong"}
      
  }
}

module.exports={
    getProjectServices,
    getEmpProjectDetailsServices,
    addProjectServices,
    editProjectServices,
    deleteProjectServices
}