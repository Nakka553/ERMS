const { executeQuery } = require('../models/executeQuery')
// get call for roles table

// const getRolesModel = async(id) =>{
//     try {
//         let q=`EXECUTE SP_get_roles '${data.id}'`  
//         return await executeQuery(q)
//     } catch (error) {
//         throw new Error(err);
        
//     }
// }
const getRolesModel = async (data) => {
    try {
      let q = `EXECUTE SP_get_roles '${data.id}'`;
      return await executeQuery(q);
    } catch (error) {
      throw new Error(error);
    }
  };
  

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
const editRoleDetailsModel=async(data)=>{

    try {
        let q=`EXECUTE SP_edit_roles '${data.ROLE_ID}','${data.ROLE_NAME}','${data.DEPARTMENT_NAME}','${data.ROLE_DESCRIPTION}'`
        return await executeQuery(q);
    } 
    catch (err) {
        console.log(err)
        throw new Error(err)  
    }
}

const deleteRolesModel = async (data) => {
    try {
        let q= `EXECUTE SP_delete_roles '${data.id}'`
        return await executeQuery(q);
    } catch (error) {
        throw new Error(error)
    }
}


module.exports={
    getRolesModel,
    addRoleDetailsModel,
    editRoleDetailsModel,
    deleteRolesModel
   
}