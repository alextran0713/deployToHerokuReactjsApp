const express = require('express');
const offersRoute = express.Router();
const { Offer,Part } = require('../models');

offersRoute.use(express.json());

// Create offer
offersRoute.post('/sendOffer',async(req,res)=>{
    let {fname,lname,email,phone,model,condition,price} = req.body;
    console.log(fname,lname,email,phone,model,condition,price);
    if(condition === 'new'){
        condition = 'New';
    }
    if(condition === 'used'){
        condition = 'Used (Normal wear)';
    }
    if(condition === 'gradeD'){
        condition = 'Grade D (Rusty, Subpar)';
    }
    if(condition === 'bNew'){
        condition = 'Bulk (New)';
    }
    if(condition === 'bUsed'){
        condition = 'Bulk (Used)';
    }
    if(condition === 'bGrade'){
        condition = 'Bulk (Grade D)';
    }

    Offer.findOne({where: {email:email}}).then((resp)=> {
        if(resp !== null) {
            res.status(202).json({message: "Your quote is being processed"});
        }
        if(resp === null){
            console.log("resp = null")
            const offerCreated = Offer.create({
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone,
                model: model,
                condition: condition,
                price: price
            })
            if(offerCreated !== null){
                res.status(202).json({
                    message: "Your quote had been submitted"
                });
            }
            else{
                res.status(404).json({message: "Something went wrong. Please retry again"})
            }
        }
    });
    
})


module.exports = offersRoute;