const workexperienceModel=require('../models/workExperience.model');


const getWorkExperienceServices = async (req) =>{
    try {
        // let data = req.params;
        let result=await workexperienceModel.getWorkExperienceModel();
        return {status:200,message:"success",data:result.recordsets}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
    getWorkExperienceServices
}