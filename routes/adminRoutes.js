const express= require('express');
const router = express.Router();
const {adminModel} = require('../db');

router.post('/signup', (req,res)=>{
    res.json({
        message:'signup endpoint',
    })
})


router.post('/signin', (req,res)=>{
    res.json({
        message:'signin endpoint',
    })
})

router.post('/course', (req,res)=>{
    res.json({
        msg:'Only shows user purchased courses',
    })
});


router.get('/course/bulk', (req,res)=>{
    res.json({
        msg:'Gets all Courses created',

    })
})

module.exports = router;
