const { executeQuery } = require('../models/executeQuery')

// const getApproverTimesheetModel = async(EMPLOYEE_ID) =>{
//     try {
//         let q=`EXECUTE SP_get_Approved_timesheet '${EMPLOYEE_ID}'`
//         return await executeQuery(q)
//     } catch (err) {
//         throw new Error(err);
        
//     }
// }

const addTimeSheetDetailsModel=async(data)=>{
    try {
        let q=`EXECUTE SP_add_TimeSheet '${data.EMPLOYEE_ID}','${data.EMPLOYEE_NAME}','${data.APPROVER_EMPLOYEE_NAME}','${data.PROJECT_NAME}','${data.TASK_DETAILS}','${data.START_DATE}','${data.END_DATE}','${data.APPROVER_STATUS}'`
        return await executeQuery(q);
    } 
    catch (err) {
       console.log(err);
        throw new Error(err)  
    }
}

const editTimeSheetDetailsModel=async(data)=>{
    try {
        let q=`EXECUTE SP_edit_TimeSheet '${data.TIMESHEET_ID}','${data.EMPLOYEE_NAME}','${data.APPROVER_EMPLOYEE_NAME}','${data.PROJECT_NAME}','${data.TASK_DETAILS}','${data.START_DATE}','${data.END_DATE}','${data.APPROVER_STATUS}'`
        return await executeQuery(q);
    } 
    catch (err) {
      
        throw new Error(err)  
    }
}

const deletetimesheetModel = async (data) => {
    try {
        let q= `EXECUTE SP_delete_timeSheet '${data.id}'`
        return await executeQuery(q);
    } catch (error) {
        throw new Error(error)
    }
}

const getTimesheetStatusModel = async(data) =>{
    try {
        let q=`EXECUTE SP_get_timesheetStatus '${data.TIMESHEET_ID}','${data.EMPLOYEE_ID}','${data.APPROVER_STATUS}'`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}

const getTimesheetForParticularDatesModel=async(data)=>{
    try {

        let q=`EXECUTE SP_get_idBased_timesheet '${data.EMPLOYEE_ID}','${data.START_DATE}','${data.END_DATE}'`
        return await executeQuery(q);
    } 
    catch (err) {
        
        throw new Error(err)  
    }
}

module.exports={
    // getApproverTimesheetModel,
    addTimeSheetDetailsModel,
    editTimeSheetDetailsModel,
    deletetimesheetModel,
    getTimesheetStatusModel,
    getTimesheetForParticularDatesModel
}



