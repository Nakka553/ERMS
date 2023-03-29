const employeeServices=require('../services/employeeAddress.services');
const getEmployeeAddress = async(req,res) => {
    
    callService(employeeServices.getEmployeeServicesAddress,req,res)
    
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
       
        getEmployeeAddress,
       
        callService
    }