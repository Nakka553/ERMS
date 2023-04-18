const projectServices = require("../services/project.service");
const {callService} = require("../controllers/callService");

const getProjectController = async(req,res)=>{
    callService(projectServices.getProjectServices,req,res);
}

const getEmpProjectDetailsController = async(req,res)=>{
    callService(projectServices.getEmpProjectDetailsServices,req,res);
}

const addProjectController = async(req,res)=>{
    callService(projectServices.addProjectServices,req,res);
}

const editProjectController = async(req,res)=>{
    callService(projectServices.editProjectServices,req,res);
}

const deleteProjectController = async(req,res)=>{
    callService(projectServices.deleteProjectServices,req,res)}
    
module.exports={
    getProjectController,
    getEmpProjectDetailsController,
    addProjectController,
    editProjectController,
    deleteProjectController
};