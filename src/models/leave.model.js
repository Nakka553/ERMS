

const { executeQuery } = require('../models/executeQuery')


const getLeaveModel = async() =>{
    try {
        let q=`EXECUTE SP_get_leaves`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}

const addLeaveModel = async(data) =>{
    try {
        let q=`EXECUTE SP_post_leaves  '${data.EMPLOYEE_ID}','${data.EMPLOYEE_NAME}','${data.APPROVER_NAME}','${data.REASON_FOR_LEAVE}','${data.START_DATE}','${data.END_DATE}','${data.LEAVES_STATUS}'`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(error);
        
    }
}

const editLeaveModel = async(data) =>{
    try {
        let q=`EXECUTE SP_edit_leaves '${data.LEAVE_REQUEST_ID}','${data.EMPLOYEE_NAME}','${data.APPROVER_NAME}','${data.REASON_FOR_LEAVE}','${data.START_DATE}','${data.END_DATE}','${data.LEAVES_STATUS}'`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(error);
        
    }
}


const deleteLeaveModel = async(data) =>{
    try {
        let q=`EXECUTE SP_delete_leave '${data.id}'`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(error);
        
    }
}


module.exports={
    getLeaveModel,
    addLeaveModel,
    editLeaveModel,
    deleteLeaveModel
}