const mongoose = require("mongoose");

const student-schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
   class : {
      type:String,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    phone: {
        type: Number,
        required: true,
        maxlength: 10,
        minlength: 10
    },
    address: {
        type: String,
        required: true,
    }
})

const student = new mongoose.model('student',student-schema)

module.exports = student;