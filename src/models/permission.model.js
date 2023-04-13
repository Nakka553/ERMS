const { executeQuery } = require('../models/executeQuery')

const getPermissionModel = async() =>{
    try {
        let q=`EXECUTE SP_get_permissions`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);    
    }
}

module.exports = {
    getPermissionModel
}