const wishesServices=require('../services/wishes.service');
const { callService } = require('./callService');


const getWishes = async(req,res) => {
    
    callService(wishesServices.getWishesServices,req,res)
    
}

module.exports={

    getWishes

}