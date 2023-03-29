const departmentServices = require("../services/department.service");

const getDepartmentController = async(req,res)=>{
    callService(departmentServices.getDepartmentServices,req,res);
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
        res.status(400).json({
            message: "Error"
        })
    }
}

module.exports={
    getDepartmentController
};