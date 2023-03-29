const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { endpoint, jwtKey } = require('../config');

const { poolPromise } = require('../database');

const rolesRouter = require("../src/routers/roles.routers");
const timesheetRouter = require("../src/routers/timesheet.routers");
const workexperienceRouter = require("../src/routers/workexperience.routers");


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
  app.use(endpoint, rolesRouter,timesheetRouter,workexperienceRouter);


  return app;
}