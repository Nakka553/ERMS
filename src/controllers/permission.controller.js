const {callService} = require("../controllers/callService");
const { getPermissionService } = require("../services/permission.service");

const getPermissionController = async(req,res)=>{
    callService(getPermissionService,req,res);
}

module.exports = {
    getPermissionController
}