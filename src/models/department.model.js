const { executeQuery } = require('../models/executeQuery')



const getDepartmentModel = async() =>{
    try {
        let q=`EXECUTE SP_get_department`;
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}

const addDepartmentModel = async() =>{
    try {
        let q=`EXECUTE SP_post_department '${data.DEPT_NAME}','${data.HOD}','${data.DEPT_EMAIL}','${data.DEPT_CONTACTNUMBER}'`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}


module.exports={
    getDepartmentModel,
    addDepartmentModel
}