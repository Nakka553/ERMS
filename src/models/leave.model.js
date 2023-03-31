const {poolPromise}=require('../../database');


const getLeaveModel = async() =>{
    try {
        let q=`EXECUTE SP_get_leaves`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}

const addLeaveModel = async() =>{
    try {
        let q=`EXECUTE SP_post_leaves '${data.EMPLOYEE_NAME}','${data.APPROVER_NAME}','${data.REASON_FOR_LEAVE}','${data.START_DATE}','${data.END_DATE}','${data.LEAVES_STATUS}'`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
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
    getLeaveModel,
    addLeaveModel
}