const {executeQuery} = require('./executeQuery')

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

module.exports = {
    loginDetailsModel
}