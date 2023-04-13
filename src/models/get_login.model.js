const {poolPromise}=require('../../database');

const loginDetailsModel = async (data) => {
    try {
        let q = `EXECUTE SP_login_details '${data.username}'`
        return await executeQuery(q)
    } 
    catch (error) 
    {
        throw new Error(error);

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

module.exports = {
    loginDetailsModel
}