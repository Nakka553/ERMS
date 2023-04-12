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
const deleteTimeSheetServices = async (req) =>{
    try {
  
      let data = req.params;
      let result = await timesheetModel.deletetimesheetModel(data);
      return {status:200, message:"Successfully Deleted" ,data:[] }
    } catch (error) {
      return { status:400, message:"error", data:"Something Went Wrong" }
    }
  }

  const  getParticularDatestimesheetServices = async (req) => {
    try {
        let data = req.body;
        let ans = []
        for(let i = 0;i< (data.STARTDATE).length;i++){
            const result =  await timesheetModel.getParticularDatesrolesModel(data.EMPLOYEE_ID,data.STARTDATE[i])
            ans.push(result.recordset)
        }

        console.log(ans);

        return { status: 200, message: "success", data: ans }

    }
    catch (error) {
        console.log(error)
         return { status: 400, message: "error", data: "something went wrong" }
        
    }
}

module.exports={
    getTimeSheetServices,
    addTimeSheetServices,
    editTimeSheetServices,
    deleteTimeSheetServices,
    
    getParticularDatestimesheetServices
}










