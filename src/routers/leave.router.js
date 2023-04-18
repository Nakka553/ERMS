const  express  = require("express");
const router = express.Router() ;
const leaveController= require("../controllers/leave.controller")
const {verifyToken}=require('../../express/auth')

// router.post('/getLeaves',verifyToken,leaveController.getApproverLeaveController);
router.post('/addLeaves',verifyToken,leaveController.addLeaveController);
router.put('/editLeaves',verifyToken,leaveController.editLeaveController);
router.delete('/deleteLeave/:id',verifyToken,leaveController.deleteLeaveController);
router.put('/getLeavesStatus',verifyToken,leaveController.getLeavesStatusController);
router.get('/getLeavesForParticularDates',verifyToken,leaveController.getLeavesForParticularDatesController);



module.exports=router;