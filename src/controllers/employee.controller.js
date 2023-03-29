const employeeServices=require('../services/employee.service');
const getEmployee = async(req,res) => {
    
    callService(employeeServices.getEmployeeServices,req,res)
    
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
       
        getEmployee,
       
        callService
    }