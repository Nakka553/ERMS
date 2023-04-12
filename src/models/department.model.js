const { executeQuery } = require('../models/executeQuery')



const getDepartmentModel = async () => {
    try {
        let q = `EXECUTE SP_get_department`;
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);

    }
}

const addDepartmentModel = async (data) => {
    try {
        let q = `EXECUTE SP_post_department '${data.DEPT_NAME}','${data.HOD}','${data.DEPT_EMAIL}','${data.DEPT_CONTACTNUMBER}'`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);

    }
}

const editDepartmentModel = async (data) => {
    try {
        let q = `EXECUTE SP_edit_department '${data.DEPT_ID}','${data.DEPT_NAME}','${data.HOD}','${data.DEPT_EMAIL}','${data.DEPT_CONTACTNUMBER}'`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(error);
    }
}

const deleteDepartmentModel = async (data) => {
    try {
        let q = `EXECUTE SP_delete_department '${data.id}'`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getDepartmentModel,
    addDepartmentModel,
    editDepartmentModel,
    deleteDepartmentModel
}