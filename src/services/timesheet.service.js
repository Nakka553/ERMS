const timesheetModel=require('../models/timesheet.model');


const getTimeSheetServices = async (req) =>{
    try {
        // let data = req.params;
        let result=await timesheetModel.getTimesheetModel();
        return {status:200,message:"success",data:result.recordsets[0]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
    getTimeSheetServices 
}