const express = require('express');
const app = express();


//routes
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const adminRoutes = require('./routes/adminRoutes');

//app.uses
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/course', courseRoutes);
app.use('/api/v1/admin', adminRoutes);



const port = 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});