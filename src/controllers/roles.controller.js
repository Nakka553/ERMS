const roleServices=require('../services/roles.service');
const { callService } = require('../controllers/callService');

const getRoles = async(req,res) => {
    
    callService(roleServices.getRolesServices,req,res)
    
}
const addroles=async(req,res)=>{
    callService(roleServices.addRoleServices,req,res)

}
const editroles=async(req,res)=>{
    callService(roleServices.editRoleServices,req,res)

}
const deleteroles=async(req,res)=>{
    callService(roleServices.deleteRoleServices,req,res)

}



module.exports={
    getRoles,
    addroles,
    editroles,
    deleteroles,
    callService
}