const employeeModel = require('../models/employee.model');

const getEmployeeServices = async () => {
  try {
    // let data = req.parais;
    let result = await employeeModel.getEmployeemodel();
    return { status: 200, message: "success", data: result.recordsets }
  } catch (error) {
    return { status: 400, message: "error", data: "something went wrong" }

  }
}

const getallEmployeeDetailsServices = async () => {
  try {
    // let data = req.parais;
    let result = await employeeModel.getallEmployeeDetailsModel();

    let finalArray = []
    // let x = {};

    if (result?.recordset?.length > 0) {
      result.recordset.forEach((i) => {
        let x = {}
        x['EMPLOYEE_ID'] = i.EMPLOYEE_ID;
        x['FIRST_NAME'] = i.FIRST_NAME ;
        x['MIDDLE_NAME '] = i.MIDDLE_NAME;
        x['LAST_NAME'] = i.LAST_NAME;
        x['GENDER'] = i.GENDER;
        x['CONTACT_NUMBER'] = i.CONTACT_NUMBER;
        x['EMAIL_ID'] = i.EMAIL_ID;
        x['PANCARD_NUMBER'] = i.PANCARD_NUMBER;
        x['DOB'] = i.DOB;
        x['AADHAR_NUMBER'] = i.AADHAR_NUMBER;
        x['DATE_OF_JOINING']=i.DATE_OF_JOINING;
        x['LAST_WORKING_DAY']=i.LAST_WORKING_DAY;
        x['EMPLOYEE_NUMBER'] = i.EMPLOYEE_NUMBER;
        x['BLOOD_GROUP'] = i.BLOOD_GROUP;
        x['ACTIVATION_STATUS'] = i.ACTIVATION_STATUS;
        x['PROJECT_ID']=i.PROJECT_ID;
        x['DEPT_ID']=i.DEPT_ID;
        x['ROLE_ID']=i.ROLE_ID;


        //  address record 
        x['ADDRESS'] = {
        'PERMANENT_ADDRESS':i.PERMANENT_ADDRESS,
          'HOUSE_NO': i.HOUSE_NO,
          'STREET_NAME': i.STREET_NAME,
          'CITY': i.CITY,
          'DISTRICT': i.DISTRICT,
          'STATE': i.STATE,
          'PINCODE': i.PINCODE,
          'COUNTRY': i.COUNTRY,
          'TEMPORARY_ADDRESS':i.TEMPORARY_ADDRESS,
          'T_HOUSE_NO': i.T_HOUSE_NO,
          'T_STREET_NAME': i.T_STREET_NAME,
          'T_CITY': i.T_CITY,
          'T_DISTRICT': i.T_DISTRICT,
          'T_STATE': i.T_STATE,
          'T_PINCODE': i.T_PINCODE,
          'T_COUNTRY': i.T_COUNTRY
        };

       

        //  education record
        x['EDUCATION'] = {
          'TENTH': i.TENTH,
          'BOARD_NAME': i.BOARD_NAME,
          'PASSEDOUT_YEAR': i.PASSEDOUT_YEAR,
          'PERCENTAGE': i.PERCENTAGE,
          'INTERMEDIATE': i.INTERMEDIATE,
          'INTER_BOARD_NAME': i.INTER_BOARD_NAME,
          'INTER_PASSEDOUT_YEAR': i.INTER_PASSEDOUT_YEAR,
          'INTER_PERCENTAGE': i.INTER_PERCENTAGE,
          'GRADUATION': i.GRADUATION,
          'UG_UNIVERSITY': i.UG_UNIVERSITY,
          'UG_PASSEDOUT_YEAR': i.UG_PASSEDOUT_YEAR,
          'UG_PERCENTAGE': i.UG_PERCENTAGE,
          'POST_GRADUTATION': i.POST_GRADUTATION,
          'PG_UNIVERSITY': i.PG_UNIVERSITY,
          'PG_PASSEDOUT_YEAR': i.PG_PASSEDOUT_YEAR,
          'PG_PERCENTAGE': i.PG_PERCENTAGE

        }
         //  experienece record 
        x['EXPERIENCE'] = {
          'COMPANY_NAME': i.COMPANY_NAME,
          'DESIGNATION': i.DESIGNATION,
          'FROM_DATE': i.FROM_DATE,
          'TO_DATE': i.TO_DATE
        };

        // console.log("i", i)
        // return i
        finalArray.push(x)
      });
      // console.log(finalArray);
      return { status: 200, message: "success", data: finalArray }

    } else {
      return { status: 400, message: "not found", data: [] }
    }
  } catch (error) {
    return { status: 400, message: "error", data: "something went wrong" }

  }
}



const addAllEmployeeServices = async (req) => {
  try {
    let data = req.body;
    let result = await employeeModel.checkEmployeeDetailsModel(data);
    if (result?.recordset?.length > 0) {
      return { status: 300, message: "Employee Already existed", data: [] }
    }
    await employeeModel.addAllEmployeeDetailsModel(data)
    return { status: 200, message: "success", data: [] }
  }
  catch (error) {
    console.log(error)
    return { status: 400, message: "error", data: "something went wrong" }

  }
}

const getWorkExperienceServices = async () => {
  try {
    // let data = req.params;
    let result = await employeeModel.getWorkExperienceModel();
    return { status: 200, message: "success", data: result.recordsets[0] }
  } catch (error) {
    return { status: 401, message: "error", data: "something went wrong" }

  }
}


const editAllEmployeesDetailsServices = async (req) => {
  try {
    let data = req.body;
    // let result = await employeeModel.checkEmployeeDetailsModel(data);
    // if(result?.recordset?.length>0){
    //   return { status: 300, message: "Employee Already Existed", data: [] }
    // }
    await employeeModel.editAllEmployeesDetailsModel(data);
    return { status: 200, message: "successfully updated", data: [] }
  } catch (error) {
    return { status: 400, message: "error", data: error }
  }
}

const   deleteAllEmployeesDeatilsServices = async (req) =>{
  try {

    let data = req.params;
    let result = await employeeModel.deleteAllEmployeesModel(data);
    return {status:200, message:"Successfully Deleted" ,data:[] }
  } catch (error) {
    return { status:400, message:"error", data:"Something Went Wrong" }
  }
}



const getEmployeeServicesAddress = async () => {
  try {
    // let data = req.parais;
    let result = await employeeModel.getEmployeeModelAddress();
    return { status: 200, message: "success", data: result.recordsets }
  } catch (error) {
    return { status: 401, message: "error", data: "something went wrong" }

  }
}
const getEmployeeServicesEducation = async () => {
  try {
    // let data = req.parais;
    let result = await employeeModel.getEmployeeModelEducation();
    return { status: 200, message: "success", data: result.recordsets }
  } catch (error) {
    return { status: 401, message: "error", data: "something went wrong" }

  }
}


module.exports = {
  getallEmployeeDetailsServices,
  getEmployeeServices,
  getEmployeeServicesAddress,
  getEmployeeServicesEducation,
  getWorkExperienceServices,
  addAllEmployeeServices,
  editAllEmployeesDetailsServices,
  deleteAllEmployeesDeatilsServices
 
}