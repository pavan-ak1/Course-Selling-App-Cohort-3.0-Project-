const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
});

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },

});

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    creatorId: {
        type: mongoose.Types.ObjectId,
        ref: 'admin',
        required: true,
    }

})



const purchaseSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Types.ObjectId,
        ref: 'course',
        required: true,
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required:true,
    }
});

const userModel = mongoose.model('user', userSchema);
const courseModel = mongoose.model('course', courseSchema);
const adminModel = mongoose.model('admin', adminSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema)


module.exports = {
    userModel, courseModel, adminModel, purchaseModel,
}