const express = require('express');
const partsRoute = express.Router();
const {Part} = require('../models');

partsRoute.use(express.json());

partsRoute.get('/stores',async(req,res)=>{
    Part.findAll().then(function(result){
        res.json(result);
    });
});

partsRoute.get('/estimate',async(req,res)=>{
    let {model,condition} = req.query;
    let price = 0;
    Part.findOne({where: {model: model}}).then(function(result){
        let itemPrice = parseInt(result.price);
        if(condition === 'new'){
            price = (itemPrice * 0.1) + itemPrice;
        }
        if(condition === 'used') {
            price = itemPrice;
        }
        if(condition === 'gradeD'){
            price = ( itemPrice - (itemPrice * 0.2));
        }
        if(condition === 'bUsed'){
            price = (itemPrice * 0.05) + itemPrice;
        }
        if(condition === 'bNew'){
            price = (itemPrice * 0.1) + itemPrice;
            price = (price * 0.05) + price;
        }
        if(condition === 'bGrade') {
            price = ( itemPrice - (itemPrice * 0.2));
            price = (price * 0.05) + price;
        }
        res.json(price);
    })
});

module.exports = partsRoute;