const projectServices = require("../services/project.service");
const {callService} = require("../controllers/callService");

const getProjectController = async(req,res)=>{
    callService(projectServices.getProjectServices,req,res);
}

const addProjectController = async(req,res)=>{
    callService(projectServices.addProjectServices,req,res);
}

module.exports={
    getProjectController,
    addProjectController
};