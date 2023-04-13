const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { endpoint, jwtKey } = require('../config');
const { poolPromise } = require('../database');
const swaggerUi = require("swagger-ui-express");
const swagger = require('../swagger.json')

const employeeRouter = require("../src/routers/employee.router");
const rolesRouter = require("../src/routers/roles.routers");
const timesheetRouter = require("../src/routers/timesheet.routers");
const leaveRouter = require("../src/routers/leave.router");
const projectRouter = require("../src/routers/project.router");
const departmentRouter = require("../src/routers/department.router");
const loginController =require("../src/routers/get_login.router");
const permission =require("../src/routers/permission.router");


module.exports = () => {
  poolPromise;
  const app = express();
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger));
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

  app.use((req, res, next) => {
    if (req.headers.apikey || req.query.apikey) {
      if (req.headers.apikey == process.env.API_KEY || req.query.apikey == process.env.API_KEY) {
        return next();
      } else {
        return res.status(401).json({
          message: "Invalid apikey"
        })
      }
    } else {
      return res.status(401).json({
        message: "Required apikey"
      })
    }
  })
  
  app.use(endpoint, rolesRouter);
  app.use(endpoint, timesheetRouter);
  app.use(endpoint, employeeRouter);
  app.use(endpoint, leaveRouter);
  app.use(endpoint, projectRouter);
  app.use(endpoint, departmentRouter);
  app.use(endpoint, loginController);
  app.use(endpoint, permission);
  
  

  return app;
}