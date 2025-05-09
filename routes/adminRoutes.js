const express= require('express');
const router = express.Router();


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
