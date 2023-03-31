const  express  = require("express");
const router = express.Router() ;
const leaveController= require("../controllers/leave.controller")

router.get('/getLeave',leaveController.getLeaveController);
router.post('/addLeave',leaveController.addLeaveController);

module.exports=router;