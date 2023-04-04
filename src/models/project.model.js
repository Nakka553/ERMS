const { executeQuery } = require('../models/executeQuery')

const getProjectModel = async() =>{
    try {
        let q=`EXECUTE SP_getProject`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);
        
    }
}

const addProjectModel = async(data) =>{
    try {
        let q=`EXECUTE SP_post_projects '${data.PROJECT_NAME}','${data.START_DATE}','${data.END_DATE}','${data.PROJECT_MANAGER}'` 
        return await executeQuery(q)
    } catch (error) {
        throw new Error(error);
        
    }
}

const editProjectModel = async (data) => 






{
    try {
        let q= `EXECUTE SP_edit_projects '${data.PROJECT_ID}','${data.PROJECT_NAME}','${data.START_DATE}','${data.END_DATE}','${data.PROJECT_MANAGER}'`
    } catch (error) {
        throw new Error(error)
    }
}

const deleteProjectModel = async(data) => {
    try {
        let q=`EXECUTE SP_delete_project '${data.id}`
    } catch (error) {
        throw new Error(error)

    }
}

module.exports={
    getProjectModel,
    addProjectModel,
    editProjectModel,
    deleteProjectModel
}