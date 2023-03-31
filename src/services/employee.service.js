const employeeModel = require('../models/employee.model');

const getEmployeeServices = async (req) => {
  try {
    // let data = req.parais;


    let result = await employeeModel.getEmployeeModel();

    return { status: 200, message: "success", data: result.recordsets }
  } catch (error) {
    return { status: 400, message: "error", data: "something went wrong" }

  }
}




const getallEmployeeDetailsServices = async (req) => {
  try {
    // let data = req.parais;
    let result = await employeeModel.getallEmployeeDetailsModel();
    
    const finalresult = {};

    result.recordsets.forEach((element) => {
      element.forEach((i) => {
        finalresult['id'] = i.EMPLOYEE_ID;
        finalresult['name'] = i.FIRST_NAME + ' ' + i.MIDDLE_NAME + ' ' + i.LAST_NAME;
        finalresult['gender'] = i.GENDER;
        finalresult['mobileNumber'] = i.CONTACT_NUMBER;
        finalresult['email'] = i.EMAIL_ID;
        finalresult['pancardno'] = i.PANCARD_NUMBER;
        finalresult['dob'] = i.DOB;
        finalresult['aadharNo'] = i.AADHAR_NUMBER;

        //  address record 
        finalresult['address'] = {
          'Hno': i.HOUSE_NO,
          'Streetname': i.STREET_NAME,
          'city': i.CITY,
          'district': i.DISTRICT,
          'state': i.STATE,
          'pincode': i.PINCODE,
          'country': i.COUNTRY
        };

        //  experienece record 
        finalresult['experience'] = {
          'companyname': i.COMPANY_NAME,
          'designation': i.DESIGNATION,
          'fromdate': i.FROM_DATE,
          'todate': i.TO_DATE
        };

        //  education record
        finalresult['education'] = {
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
      });
    });
    return {
      status: 200, Message: "success", data: finalresult
    }
  } catch (error) {
    return { status: 400, message: "error", data: "something went wrong" }

  }
}

const editAllEmployeesDetailsServices = async (req) => {
  try {
    let data = req.body;
    let result = await employeeModel.checkEmployeeDetailsModel(data);
    if(result?.recordset?.length>0){
      return { status: 300, message: "Employee Already Existed", data: [] }
    }
    await employeeModel.editAllEmployeesDetailsModel(data);
    return { status: 200, message: "successfully updated", data: [] }
  } catch (error) {
    return { status: 400, message: "error", data: error }
  }
}

const getEmployeeServicesAddress = async (req) => {
  try {
    // let data = req.parais;
    let result = await employeeModel.getEmployeeModelAddress();

    return { status: 200, message: "success", data: result.recordsets }
  } catch (error) {
    return { status: 401, message: "error", data: "something went wrong" }

  }
}

const getEmployeeServicesEducation = async (req) => {
  try {
    // let data = req.parais;
    let result = await employeeModel.getEmployeeModelEducation();
    return { status: 200, message: "success", data: result.recordsets }
  } catch (error) {
    return { status: 401, message: "error", data: "something went wrong" }

  }
}


//ADD ALL EMPLOYEE DETAILS
const addAllEmployeeServices = async (req) => {
  try {
      let data = req.body;
      let result =await employeeModel.checkEmployeeDetailsModel(data);
      if(result?.recordset?.length>0){
        return { status: 300, message: "Employee Already existed", data: []}
      }
      await employeemodel.addAllEmployeeDetailsModel(data)
      return { status: 200, message: "success", data: []}
  } 
  catch (error) {
      console.log(error)
       return { status: 400, message: "error", data: "something went wrong" }
      
  }
}

const getWorkExperienceServices = async (req) => {
  try {
    // let data = req.parais;
    let result = await employeeModel.getWorkExperienceModel();
    return { status: 200, message: "success", data: result.recordsets[0] }
  } catch (error) {
    return { status: 401, message: "error", data: "something went wrong" }

  }
}

module.exports = {
  getallEmployeeDetailsServices,
  editAllEmployeesDetailsServices,
  getEmployeeServices,
  getEmployeeServicesAddress,
  getEmployeeServicesEducation,
  getWorkExperienceServices,
  addAllEmployeeServices

}