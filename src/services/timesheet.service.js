const timesheetModel=require('../models/timesheet.model');


const getTimeSheetServices = async (req) =>{
    try {
        let result=await timesheetModel.getTimesheetModel();
        return {status:200,message:"success",data:result.recordsets[0]}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
const addTimeSheetServices = async (req) => {
    try {
        let data = req.body;
        console.log(data)
        await timesheetModel.addTimeSheetDetailsModel(data)

        return { status: 200, message: "success", data: []}

    } 
    catch (error) {
        console.log(error)
         return { status: 400, message: "error", data: "something went wrong" }
        
    }
}

const editTimeSheetServices = async (req) => {
    try {
        let data = req.body;
        console.log(data)
        await timesheetModel.editTimeSheetDetailsModel(data)

        return { status: 200, message: "success", data: []}

    } 
    catch (error) {
        console.log(error)
         return { status: 400, message: "error", data: "something went wrong" }
        
    }
}
module.exports={
    getTimeSheetServices,
    addTimeSheetServices,
    editTimeSheetServices 
}