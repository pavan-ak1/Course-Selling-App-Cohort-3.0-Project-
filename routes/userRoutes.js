const express = require("express");
const router = express.Router();
const { userModel } = require('../db');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken')

router.post('/signup', async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const emailAlreadyExists = await userModel.findOne({ email });
        if (emailAlreadyExists) {
            throw new Error('Email already exists');
        }
        const salt = await bcrypt.genSalt(10);
        newPassword = await bcrypt.hash(password, salt);
        const user = await userModel.create({ email, password: newPassword, firstName, lastName });

        res.json({
            user
        })
    }
    catch (err) {
        console.log(err);

    }
})


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) { throw new Error('Fill all entities') }
    const user = await userModel.findOne({ email });
    if(!user){
        throw new Error('Error does not exists');
    }
    const token = jwt.sign({id:user._id,}, process.env.JWT_USER_SECRET, {expiresIn:'1d'})

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error('Give correct password');
    }

    res.json({
        user,token:token
    })
})

router.get('/purchases', (req, res) => {


    res.json({
        msg: 'Only shows user purchased courses',
    })
})

module.exports = router;
