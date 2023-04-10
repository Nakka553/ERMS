const { executeQuery } = require('../models/executeQuery')

const getTimesheetModel = async() =>{
    try {
        let q=`EXECUTE SP_get_TimeSheet`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}
const getDateTimesheetModel = async() =>{
    try {
        let q=`EXECUTE SP_get_datetimesheet`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}
const addTimeSheetDetailsModel=async(data)=>{
    try {
        let q=`EXECUTE SP_add_TimeSheet '${data.EMPLOYEE_NAME}','${data.APPROVER_EMPLOYEE_NAME}','${data.PROJECT_NAME}','${data.TASK_DETAILS}','${data.START_DATE}','${data.END_DATE}','${data.APPROVER_STATUS}'`
        return await executeQuery(q);
    } 
    catch (err) {
        console.log(err)
        throw new Error(err)  
    }
}
const editTimeSheetDetailsModel=async(data)=>{
    try {
        let q=`EXECUTE SP_edit_TimeSheet '${data.TIMESHEET_ID}','${data.EMPLOYEE_NAME}','${data.APPROVER_EMPLOYEE_NAME}','${data.PROJECT_NAME}','${data.TASK_DETAILS}','${data.START_DATE}','${data.END_DATE}','${data.APPROVER_STATUS}'`
        return await executeQuery(q);
    } 
    catch (err) {
        console.log(err)
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


module.exports={
    getTimesheetModel,
    addTimeSheetDetailsModel,
    editTimeSheetDetailsModel,
    deletetimesheetModel,
    getDateTimesheetModel
}



