const roleServices=require('../services/roles.service');

const getRoles = async(req,res) => {
    
    callService(roleServices.getRolesServices,req,res)
    
}
const addroles=async(req,res)=>{
    callService(roleServices.addRoleServices,req,res)

}

const callService = async (method, req, res) => {
    try {
        var result = await method(req);
        res.status(200).json({
            status: result.status,
            message: result.message,
            data: result.data
        })
    } catch (err) {
        res.status(400).json({
            message: "Error"
        })
    }
}

module.exports={
    getRoles,
    addroles,
    callService
}