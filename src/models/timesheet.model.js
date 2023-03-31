const {poolPromise}=require('../../database');

const getTimesheetModel = async() =>{
    try {
        let q=`EXECUTE SP_get_TimeSheet`
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
const executeQuery=async(query)=>{
    try{
        let pool=await poolPromise;
        return await pool.query(query);
    
    }catch(err){
        throw new Error(err);
    }
}

module.exports={
    getTimesheetModel,
    addTimeSheetDetailsModel
}