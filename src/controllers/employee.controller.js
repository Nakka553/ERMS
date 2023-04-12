const employeeServices = require('../services/employee.service');
const { callService } = require('../controllers/callService');

const getEmployee = async (req, res) => {

    callService(employeeServices.getEmployeeServices, req, res)

}
const getallEmployeeDetails = async (req, res) => {

    callService(employeeServices.getallEmployeeDetailsServices, req, res)

}

const editAllEmployeesDetailsController = async (req, res) => {

    callService(employeeServices.editAllEmployeesDetailsServices, req, res)

}
const deleteAllEmployeesDetailsController = async(req, res)=>{

    callService(employeeServices.deleteAllEmployeesDeatilsServices, req, res)
}

const getEmployeeAddress = async (req, res) => {

    callService(employeeServices.getEmployeeServicesAddress, req, res)

}
const getEmployeeEducation= async(req,res) => {
    
    callService(employeeServices.getEmployeeServicesEducation,req,res)
    
    }
    const getWorkExperience = async(req,res) => {
    
        callService(employeeServices.getWorkExperienceServices,req,res)
        
    }

    const addAllEmployeeDetails=async(req,res)=>{
        callService(employeeServices.addAllEmployeeServices,req,res)
    
    } 
    
module.exports = {
    getallEmployeeDetails,
    editAllEmployeesDetailsController,
    deleteAllEmployeesDetailsController,
    getEmployee,
    getEmployeeAddress,
    getEmployeeEducation,
    getWorkExperience,
    addAllEmployeeDetails,
    callService
}