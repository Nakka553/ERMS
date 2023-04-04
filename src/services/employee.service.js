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
        x['id'] = i.EMPLOYEE_ID;
        x['name'] = i.FIRST_NAME + ' ' + i.MIDDLE_NAME + ' ' + i.LAST_NAME;
        x['gender'] = i.GENDER;
        x['mobileNumber'] = i.CONTACT_NUMBER;
        x['email'] = i.EMAIL_ID;
        x['pancardno'] = i.PANCARD_NUMBER;
        x['dob'] = i.DOB;
        x['aadharNo'] = i.AADHAR_NUMBER;
        x['employeeNumber'] = i.EMPLOYEE_NUMBER;
        x['blood group'] = i.BLOOD_GROUP;
        x['activationStatus'] = i.ACTIVATION_STATUS


        //  address record 
        x['address'] = {
          'Hno': i.HOUSE_NO,
          'Streetname': i.STREET_NAME,
          'city': i.CITY,
          'district': i.DISTRICT,
          'state': i.STATE,
          'pincode': i.PINCODE,
          'country': i.COUNTRY
        };

        //  experienece record 
        x['experience'] = {
          'companyname': i.COMPANY_NAME,
          'designation': i.DESIGNATION,
          'fromdate': i.FROM_DATE,
          'todate': i.TO_DATE
        };

        //  education record
        x['education'] = {
          'tenth': i.TENTH,
          'boardname': i.BOARD_NAME,
          'passedyear': i.PASSEDOUT_YEAR,
          'percentage': i.PERCENTAGE,
          'intermediate': i.INTERMEDIATE,
          'interboard': i.INTER_BOARD_NAME,
          'inter-passedyear': i.INTER_PASSEDOUT_YEAR,
          'inter-percentage': i.INTER_PERCENTAGE,
          'graduation': i.GRADUATION,
          'ug-university': i.UG_UNIVERSITY,
          'ug-passedyear': i.UG_PASSEDOUT_YEAR,
          'ug-percentage': i.UG_PERCENTAGE,
          'postgraduation': i.POST_GRADUTATION,
          'pg-university': i.PG_UNIVERSITY,
          'pg-passedyear': i.PG_PASSEDOUT_YEAR,
          'pg-percentage': i.PG_PERCENTAGE

        };

        console.log("i", i)
        // return i
        finalArray.push(x)
      }
      );
      return { status: 200, message: "success", data: finalArray }

    } else {
      return { status: 400, message: "not found", data: [] }
    }
  } catch (error) {
    return { status: 400, message: "error", data: "something went wrong" }

  }
}




const getEmployeeServicesAddress = async () => {
  try {
    // let data = req.parais;
    let result = await employeeModel.getEmployeemodelAddress();
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
    // let data = req.parais;
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
const deleteAllEmplpoyeeServices = async (req) => {
  try {
      
    let data=req.params;
       await employeeModel.deleteAllEmployeeDetailsModel(data);
      return { status: 200, message: "successfully deleted", data: [] }
  } catch (error) {
      return { status: 400, message: "error", data: "something went wrong" }
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
  deleteAllEmplpoyeeServices
}