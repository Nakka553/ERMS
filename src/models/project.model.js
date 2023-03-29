const {poolPromise}=require('../../database');

const getProjectModel = async() =>{
    try {
        let q=`EXECUTE SP_get_projects`
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
    getProjectModel
}