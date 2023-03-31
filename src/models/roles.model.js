const {poolPromise}=require('../../database');

// get call for roles table

const getRolesModel = async() =>{
    try {
        let q=`EXECUTE SP_get_roles`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}

const addRoleDetailsModel=async(data)=>{
    try {
        let q=`EXECUTE SP_add_roles '${data.ROLE_NAME}','${data.DEPARTMENT_NAME}','${data.ROLE_DESCRIPTION}'`
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
    getRolesModel,
    addRoleDetailsModel
}