const express = require('express');
const app = express();


app.post('/user/signup', (req,res)=>{
    res.json({
        msg:'signup endpoint',
    })
})


app.post('/user/signin', (req,res)=>{
    res.json({
        msg:'signin endpoint',
    })
})

app.get('/courses', (req,res)=>{
    res.json({
        msg:'Shows all courses',
    })
})

app.get('/user/purchases', (req,res)=>{
    res.json({
        msg:'Only shows user purchased courses',
    })
})

app.post('/course/purchase', (req,res)=>{
    res.json({
        msg:'course purchase endpoint',
    })
})

const port = 3000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})