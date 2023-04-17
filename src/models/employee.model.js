const { executeQuery } = require('../models/executeQuery')


const getallEmployeeDetailsModel = async () => {
    try {
        let q = `EXECUTE SP_get_allEmployeeDetails`
        return await executeQuery(q)
    } 
    catch (err) {
        throw new Error(err);
    }
}

const addAllEmployeeDetailsModel = async (data) => {
    try {
        console.log(data);
        let q = `EXECUTE SP_add_allEmployeeDetails  '${data.FIRST_NAME}','${data.MIDDLE_NAME}','${data.LAST_NAME}','${data.GENDER}',
        '${data.CONTACT_NUMBER}','${data.EMAIL_ID}','${data.PANCARD_NUMBER}','${data.DOB}','${data.AADHAR_NUMBER}','${data.DATE_OF_JOINING}',
        '${data.LAST_WORKING_DAY}','${data.EMPLOYEE_NUMBER}','${data.BLOOD_GROUP}','${data.ACTIVATION_STATUS}','${data.PERMANENT_ADDRESS}',
        '${data.HOUSE_NO}','${data.STREET_NAME}','${data.CITY}','${data.DISTRICT}','${data.STATE}','${data.PINCODE}','${data.COUNTRY}',
        '${data.TEMPORARY_ADDRESS}','${data.T_HOUSE_NO}','${data.T_STREET_NAME}','${data.T_CITY}','${data.T_DISTRICT}','${data.T_STATE}',
        '${data.T_PINCODE}','${data.T_COUNTRY}','${data.TENTH}','${data.BOARD_NAME}','${data.PASSEDOUT_YEAR}','${data.PERCENTAGE}',
        '${data.INTERMEDIATE}','${data.INTER_BOARD_NAME}','${data.INTER_PASSEDOUT_YEAR}','${data.INTER_PERCENTAGE}','${data.GRADUATION}',
        '${data.UG_UNIVERSITY}','${data.UG_PASSEDOUT_YEAR}','${data.UG_PERCENTAGE}','${data.POST_GRADUTATION}','${data.PG_UNIVERSITY}',
        '${data.PG_PASSEDOUT_YEAR}','${data.PG_PERCENTAGE}','${data.COMPANY_NAME}','${data.DESIGNATION}','${data.FROM_DATE}',
        '${data.TO_DATE}','${data.DEPT_ID}','${data.PROJECT_ID}','${data.ROLE_ID}','${data.PASSWORD}'`

        return await executeQuery(q);
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

const editAllEmployeesDetailsModel = async (data) => {
    try {

        let q = `EXECUTE SP_edit_allEmployeesDetails 
        '${data.EMPLOYEE_ID}',
        '${data.EMPLOYEE_NUMBER}',
        '${data.FIRST_NAME}',
        '${data.MIDDLE_NAME}',
        '${data.LAST_NAME}',
        '${data.GENDER}',
        '${data.CONTACT_NUMBER}',
        '${data.EMAIL_ID}',
        '${data.PANCARD_NUMBER}',
        '${data.DOB}',
        '${data.AADHAR_NUMBER}',
        '${data.DATE_OF_JOINING}',
        '${data.LAST_WORKING_DAY}',
        '${data.BLOOD_GROUP}',
        '${data.ACTIVATION_STATUS}',
        '${data.DEPT_ID}',
        '${data.PROJECT_ID}',
        '${data.ROLE_ID}',
        '${data.PERMANENT_ADDRESS}',
        '${data.HOUSE_NO}',
        '${data.STREET_NAME}',
        '${data.CITY}',
        '${data.DISTRICT}',
        '${data.STATE}',
        '${data.PINCODE}',
        '${data.COUNTRY}',
        '${data.TEMPORARY_ADDRESS}',
        '${data.T_HOUSE_NO}',
        '${data.T_STREET_NAME}',
        '${data.T_CITY}',
        '${data.T_DISTRICT}',
        '${data.T_STATE}',
        '${data.T_PINCODE}',
        '${data.T_COUNTRY}',
        '${data.TENTH}',
        '${data.BOARD_NAME}',
        '${data.PASSEDOUT_YEAR}',
        '${data.PERCENTAGE}',
        '${data.INTERMEDIATE}',
        '${data.INTER_BOARD_NAME}',
        '${data.INTER_PASSEDOUT_YEAR}',
        '${data.INTER_PERCENTAGE}',
        '${data.GRADUATION}',
        '${data.UG_UNIVERSITY}',
        '${data.UG_PASSEDOUT_YEAR}',
        '${data.UG_PERCENTAGE}',
        '${data.POST_GRADUTATION}',
        '${data.PG_UNIVERSITY}',
        '${data.PG_PASSEDOUT_YEAR}',
        '${data.PG_PERCENTAGE}',
        '${data.COMPANY_NAME}',
        '${data.DESIGNATION}',
        '${data.FROM_DATE}',
        '${data.TO_DATE}'`
      return await executeQuery(q)
    } 
    catch (error) {
        throw new Error(error);
    }
}
const getEmployeeModel = async () => {
    try {
        let q = `EXECUTE SP_get_employeeDetails`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);

    }
}

const getEmployeeModelAddress = async () => {
    try {
        let q = `EXECUTE SP_get_employeeAddress`
        return await executeQuery(q)
    } 
    catch (error) {
        throw new Error(err);

    }
}

const getEmployeeModelEducation = async () => {
    try {
        let q = `EXECUTE SP_get_employeeEducation`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);

    }
}

const getWorkExperienceModel = async () => {
    try {
        let q = `EXECUTE SP_get_employeeWorkExperience`
        return await executeQuery(q)
    } catch (error) {
        throw new Error(err);

    }
}


const checkEmployeeDetailsModel = async (data) => {

    try {
        let q = ` SP_check_allEmployeeDetails '${data.EMAIL_ID}','${data.CONTACT_NUMBER}','${data.PANCARD_NUMBER}','${data.AADHAR_NUMBER}'`
        return await executeQuery(q);
    } catch (error) {
        console.log(err)
        throw new Error(err)
    }

}

const deleteAllEmployeeDetailsModel = async (data) => {
    try {
        let q = `EXECUTE SP_delete_allEmployeesDetails '${data.id}'`
        return await executeQuery(q);
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
}
module.exports = {
    getallEmployeeDetailsModel,
    editAllEmployeesDetailsModel,
    getEmployeeModel,
    getEmployeeModelAddress,
    getEmployeeModelEducation,
    getWorkExperienceModel,
    checkEmployeeDetailsModel,
    addAllEmployeeDetailsModel,
    deleteAllEmployeeDetailsModel
}




