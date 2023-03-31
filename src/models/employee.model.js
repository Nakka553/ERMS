const {executeQuery}=require('../models/executeQuery')

const getEmployeeModel = async() =>{
    try {
        let q=`EXECUTE SP_get_employeeDetails`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}
const getallEmployeeDetailsModel = async() =>{
    try {
        let q=`EXECUTE SP_get_allEmployeeDetails`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}
const getEmployeeModelAddress = async() =>{
    try {
        let q=`EXECUTE SP_get_employeeAddress`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}
const getEmployeeModelEducation = async() =>{
    try {
        let q=`EXECUTE SP_get_employeeEducation`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}
const getWorkExperienceModel = async() =>{
    try {
        let q=`EXECUTE SP_get_employeeWorkExperience`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}

module.exports={getEmployeeModel,getallEmployeeDetailsModel,getEmployeeModelAddress,getEmployeeModelEducation,getWorkExperienceModel}