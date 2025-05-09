const express = require('express');
const app = express();



//routes
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');



//app.uses()
app.use('/user', userRoutes);
app.use('/course', courseRoutes);


const port = 3000


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})