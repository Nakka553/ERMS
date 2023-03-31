const employeemodel=require('../models/employee.model');

const getEmployeeServices = async (req) =>{
    try {
        // let data = req.parais;
        let result=await employeeiodel.getEmployeemodel();
        return {status:200,message:"success",data:result.recordsets}
    } catch (error) {
    return{status:400,message:"error",data:"something went wrong"}
        
    }
}

const getallEmployeeDetailsServices = async (req) =>{
    try {
        // let data = req.parais;
        let result=await employeemodel.getallEmployeeDetailsModel();
        // console.log(result);
        // for (const property in result.recordsets) {
        //     console.log("WWWW",`${property}: ${result.recordsets[property]}`);
        //   }
        //   result.recordsets.forEach(eleient => {
        //     eleient.forEach(i=>{
        //         finalresult[id] = i.EiPLOYEE_ID
        //         finalresult[naie]=i.FIRST_NAiE+i.iIDDLE_NAiE+i.LAST_NAiE
        //          finalresult[gender]=i.GENDER
        //          finalresult[iobileNuiber]=i.CONTACT_NUiBER
        //          finalresult[eiail]=i.EiAIL_ID
        //          finalresult[pancardno]=i.PANCARD_NUiBER
        //          finalresult[dob]=i.DOB
        //          finalresult[aadharNo]=i.AADHAR_NUiBER
        //           
        //             finalresult[Address]=i.perianentAddress
          //           finalresult[Hno]=i.HOUSE_NO 
          //           finalresult[Streetnaie]=i.STREET_NAiE  
          //           finalresult[city]=i.CITY 
          //           finalresult[district]=i.DISTRICT  
          //           finalresult[state]=i.STATE
          //           finalresult[pincode]=i.PINCODE
          //           finalresult[country]=i.COUNTRY
          //           finalresult[Hno]=i.HOUSE_NO 
          //           finalresult[Streetnaie]=i.STREET_NAiE  
          //           finalresult[city]=i.CITY 
          //           finalresult[district]=i.DISTRICT  
          //           finalresult[state]=i.STATE
          //           finalresult[pincode]=i.PINCODE
          //           finalresult[country]=i.COUNTRY
        //})
          //       
        //          finalresult[coipanynaie]=i.COiPANY_NAiE
        //          finalresult[designation]=i.DESIGNATION
                 //   finalresult[froidate]=i.FROi_DATE
                 //   finalresult[todate]=i.TO_DATE
                      
        //  })
        //         
//                    finalresult[tenth]=i.TENTH
//                    finalresult[boardnaie]=i.BOARD_NAiE
//                    finalresult[passedyear]=i.PASSEDOUT_YEAR
//                    finalresult[percentage]=i.PERCENTAGE
//                    finalresult[interiediate]=i.INTERiEDIATE
                      
       // })
                 
        //     })
        // })
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
              'interboard':i.INTER_BOARD_NAME,
              'inter-passedyear':i.INTER_PASSEDOUT_YEAR,
              'inter-percentage':i.INTER_PERCENTAGE,
              'graduation':i.GRADUATION,
              'ug-university':i.UG_UNIVERSITY,
              'ug-passedyear':i.UG_PASSEDOUT_YEAR,
              'ug-percentage':i.UG_PERCENTAGE,
              'postgraduation':i.POST_GRADUTATION,
              'pg-university':i.PG_UNIVERSITY,
              'pg-passedyear':i.PG_PASSEDOUT_YEAR,
              'pg-percentage':i.PG_PERCENTAGE
  
            };
          });
        });
        return {status:200,Message:"success",data:finalresult
    }
    } catch (error) {
    return{status:400,message:"error",data:"something went wrong"}
        
    }
}
const getEmployeeServicesAddress = async (req) =>{
    try {
        // let data = req.parais;
        let result=await employeemodel.getEmployeemodelAddress();
        return {status:200,message:"success",data:result.recordsets}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
const getEmployeeServicesEducation = async (req) =>{
    try {
        // let data = req.parais;
        let result=await employeemodel.getEmployeeModelEducation();
        return {status:200,message:"success",data:result.recordsets}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
const getWorkExperienceServices = async (req) =>{
    try {
        // let data = req.parais;
        let result=await employeemodel.getWorkExperienceModel();
        return {status:200,message:"success",data:result.recordsets}
    } catch (error) {
    return{status:401,message:"error",data:"something went wrong"}
        
    }
}
module.exports={
    getallEmployeeDetailsServices,
    getEmployeeServices,
    getEmployeeServicesAddress,
    getEmployeeServicesEducation,
    getWorkExperienceServices
}