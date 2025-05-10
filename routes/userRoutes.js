const express = require("express");
const router = express.Router();
const {userModel} = require('../db');


router.post('/signup', (req,res)=>{
    res.json({
        msg:'signup endpoint',
    })
})


router.post('/signin', (req,res)=>{
    res.json({
        msg:'signin endpoint',
    })
})

router.get('/purchases', (req,res)=>{
    res.json({
        msg:'Only shows user purchased courses',
    })
})

module.exports = router;
