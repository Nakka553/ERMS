const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { endpoint, jwtKey } = require('../config');
const { poolPromise } = require('../database');

const employeeRouter = require("../src/routers/employee.router");

const rolesRouter = require("../src/routers/roles.routers");
const timesheetRouter = require("../src/routers/timesheet.routers");



const leaveRouter = require("../src/routers/leave.router");
const projectRouter = require("../src/routers/project.router");
const departmentRouter = require("../src/routers/department.router");

module.exports = () => {
  poolPromise;
  const app = express();
  app.use(cors())
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())
  app.use((error, request, response,next)=>{
    if(error != null){
      return response.json({
        status:401, message:"Invalid json"
      })
      next();
    }
  })

  app.use(endpoint, rolesRouter);
  app.use(endpoint, timesheetRouter);
  
  
  app.use(endpoint, employeeRouter);
  
  app.use(endpoint, leaveRouter);
  app.use(endpoint, projectRouter);
  app.use(endpoint, departmentRouter);

  

  return app;
}