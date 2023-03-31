const {poolPromise}=require('../../database');

const getProjectModel = async() =>{
    try {
        let q=`EXECUTE SP_get_projects`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}

const addProjectModel = async() =>{
    try {
        let q=`EXECUTE SP_post_projects '${data.PROJECT_NAME}','${data.START_DATE},'${data.END_DATE}','${data.PROJECT_MANAGER}'` 
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
    getProjectModel,
    addProjectModel
}