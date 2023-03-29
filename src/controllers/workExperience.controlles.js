const workExperienceServices=require('../services/workExperience.services');

const getWorkExperience = async(req,res) => {
    
    callService(workExperienceServices.getWorkExperienceServices,req,res)
    
}

const callService = async (method, req, res) => {
    try {
        var result = await method(req);
        res.status(200).json({
            status: result.status,
            message: result.message,
            data: result.data
        })
    } catch (err) {
        res.status(401).json({
            message: "Error"
        })
    }
}

module.exports={
    getWorkExperience,
    callService
}