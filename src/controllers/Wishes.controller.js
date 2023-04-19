const wishesServices=require('../services/wishes.service');
const { callService } = require('./callService');


const getWishes = async(req,res) => {
    
    callService(wishesServices.getWishesServices,req,res)
    
}

const getWishesCount = async(req,res) => {
    
    callService(wishesServices.getWishesCountServices,req,res)
    
}

module.exports={

    getWishes,
    getWishesCount

}