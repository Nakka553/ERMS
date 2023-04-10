const  express  = require("express");
const { loginController } = require("../controllers/get_login.controller");
const router = express.Router() ;

router.post('/login', loginController);

module.exports=router;

