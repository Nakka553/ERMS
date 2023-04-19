const { executeQuery } = require('../models/executeQuery')

const getWishesModel = async () => {
    try {
      let q = `EXECUTE SP_get_wishes`;
      return await executeQuery(q);
    } catch (error) {
        console.log(error);
      throw new Error(error);
    }
  };
  const getWishesCountModel = async () => {
    try {
      let q = `EXECUTE SP_get_employeeProjectCount`;
      return await executeQuery(q);
    } catch (error) {
        console.log(error);
      throw new Error(error);
    }
  };

  module.exports={

    getWishesModel,
    getWishesCountModel

  }