const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { endpoint, jwtKey } = require('../config');

const { poolPromise } = require('../database');

const employeesRouter = require("../src/routers/employees.routes");


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
  app.use(endpoint, employeesRouter);


  return app;
}