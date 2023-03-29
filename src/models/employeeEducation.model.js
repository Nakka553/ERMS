
const {poolPromise}=require('../../database');

const getEmployeeModelEducation = async() =>{
    try {
        let q=`EXECUTE SP_get_employeeEducation`
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
module.exports={getEmployeeModelEducation}