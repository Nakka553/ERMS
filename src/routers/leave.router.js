const  express  = require("express");
const router = express.Router() ;
const leaveController= require("../controllers/leave.controller")

const {verifyToken}=require('../../express/auth')






router.post('/addApproverLeave',verifyToken,leaveController.addApproverLeaveController);
router.post('/addLeave',verifyToken,leaveController.addLeaveController);
router.put('/editLeave',verifyToken,leaveController.editLeaveController);
router.delete('/deleteLeave/:id',verifyToken,leaveController.deleteLeaveController);
router.post('/postLeaveforEmployeeID',verifyToken,leaveController.addLeaveforEmployeeIDController);


module.exports=router;