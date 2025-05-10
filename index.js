const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')

//routes
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const adminRoutes = require('./routes/adminRoutes');

//app.uses
app.use(express.json())
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/course', courseRoutes);
app.use('/api/v1/admin', adminRoutes);

const port = 3000;

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
