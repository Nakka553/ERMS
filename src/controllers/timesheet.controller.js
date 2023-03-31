const timesheetServices=require('../services/timesheet.service');

const getTimesheet = async(req,res) => {
    
    callService(timesheetServices.getTimeSheetServices,req,res)
    
}
const addTimeSheet=async(req,res)=>{
    callService(timesheetServices.addTimeSheetServices,req,res)

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
    getTimesheet,
    addTimeSheet,
    callService
}