const { LoginServices } = require("../services/get_login.services")
const { callService } = require("./callService")

const loginController=async(req,res)=>{
    callService(LoginServices,req,res)

}
module.exports = {
    loginController,
}