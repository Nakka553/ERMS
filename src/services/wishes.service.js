const wishesModel=require('../models/wishes.model');

const getWishesServices = async () => {
    try {
      let result = await wishesModel.getWishesModel();
      
      return { status: 200, message: "success", data: result.recordsets[0] };
    } 
    catch (error) {
   
      return { status: 400, message: "error", data: "something went wrong" };
    }
  };


  module.exports={
    getWishesServices


  }