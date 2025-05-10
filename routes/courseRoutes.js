const express = require('express');
const router = express.Router();
const {courseModel} = require('../db');


router.get('/', (req,res)=>{
    res.json({
        msg:'Shows all courses',
    })
})



router.post('/purchase', (req,res)=>{
    res.json({
        msg:'course purchase endpoint',
    })
})


module.exports = router;

