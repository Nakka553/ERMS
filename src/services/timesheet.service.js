const timesheetModel=require('../models/timesheet.model');


// const getApproverTimesheetServices = async (req) =>{
//     try {
//         let data=req.body    
//         let result=await timesheetModel.getApproverTimesheetModel(data.EMPLOYEE_ID);
//         return {status:200,message:"success",data:result.recordsets[0]}
//     } catch (error) {      
//     return{status:401,message:"error",data:"something went wrong"}    
//     }
// }

const addTimeSheetServices = async (req) => {
    try {
        let data = req.body
        await timesheetModel.addTimeSheetDetailsModel(data)
        return { status: 200, message: "success", data: []}
    } 
    catch (error) { 
         return { status: 400, message: "error", data: "something went wrong" } 
    }
}

const editTimeSheetServices = async (req) => {
    try {
        let data = req.body; 
        await timesheetModel.editTimeSheetDetailsModel(data)
        return { status: 200, message: "success", data: []}
    } 
    catch (error) {
         return { status: 400, message: "error", data: "something went wrong" }
    }
}

const getTimesheetStatusServices = async (req) =>{
    try {
        let data = req.body
        let result=await timesheetModel.getTimesheetStatusModel(data);
        return {status:200,message:"success",data:result.recordsets[0]}
    } catch (error) {      
    return{status:401,message:"error",data:"something went wrong"}     
    }
}

const deleteTimeSheetServices = async (req) =>{
    try {
      let data = req.params;
      let result = await timesheetModel.deletetimesheetModel(data);
      return {status:200, message:"Successfully Deleted" ,data:[] }
    } catch (error) {
      return { status:400, message:"error", data:"Something Went Wrong" }
    }
  }

  const  getTimesheetForParticularDatesServices = async (req) => {
    try {
        let data = req.body;
            const result =  await timesheetModel.getTimesheetForParticularDatesModel(data)
        
        return { status: 200, message: "success", data: result.recordsets[0] }
    }
    catch (error) {
      
         return { status: 400, message: "error", data: "something went wrong" }   
    }
}

module.exports={
    // getApproverTimesheetServices,
    addTimeSheetServices,
    editTimeSheetServices,
    deleteTimeSheetServices,
    getTimesheetStatusServices,
    getTimesheetForParticularDatesServices

}










