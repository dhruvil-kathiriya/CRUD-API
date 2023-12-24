const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const imagePath = "/uploads/registerImage";

const registerschema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    gender: {
        type: String
    },
    hobby: {
        type: Array
    },
    admin_image: {
        type: String
    }
})

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "..", imagePath));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now());
    }
});

registerschema.statics.uploadImage = multer({ storage: imageStorage }).single("admin_image")

const register = mongoose.model('register', registerschema);

module.exports = register;