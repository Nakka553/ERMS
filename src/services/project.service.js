const projectModel=require('../models/project.model');


const getProjectServices = async (req) =>{
    try {
        // let data = req.params;
        let result=await projectModel.getProjectModel();
        return {status:200,message:"success",data:result.recordsets[0]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
    getProjectServices
}