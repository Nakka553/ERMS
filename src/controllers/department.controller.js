const departmentServices = require("../services/department.service");
const {callService} = require("../controllers/callService");

const getDepartmentController = async(req,res)=>{
    callService(departmentServices.getDepartmentServices,req,res);
}

const addDepartmentController = async(req,res)=>{
    callService(departmentServices.addDepartmentServices,req,res);
}

const editDepartmentController = async(req,res)=>{
    callService(departmentServices.editDepartmentServices,req,res);
}

const deleteDepartmentController = async(req,res)=>{
    callService(departmentServices.deleteDepartmentServices,req,res);
}

module.exports={
    getDepartmentController,
    addDepartmentController,
    editDepartmentController,
    deleteDepartmentController
};