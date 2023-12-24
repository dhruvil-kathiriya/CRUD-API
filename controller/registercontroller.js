const express = require("express");
const app = express.Router();
const register = require("../model/register");

module.exports.register = async (req, res) => {
    try {
        if (req.body.password == req.body.cpass) {
            let checkEmail = await register.findOne({ email: req.body.email })
            if (checkEmail) {
                return res.status(200).json({ msg: 'Email alrady  Ragisted....', status: 0 });
            }
            else {
                let imagepath = "";
                if (req.file) {
                    imagepath = register.uploadImage + "/" + req.file.filename;
                }
                req.body.admin_image = imagepath;
                let data = await register.create(req.body);
                if (data) {
                    return res.status(200).json({ msg: 'Data Inserted Successfully....', status: 1, rec: data });
                }
                else {
                    return res.status(400).json({ msg: 'Data not Inserted Successfully....', status: 0 });
                }
            }
        }
        else {
            console.log('password not Match');
            return res.status(200).json({ msg: 'Confirm Password does not Match', status: 0 });
        }
    }
    catch (err) {
        console.log('Somthing Wrong');
        return res.status(400).json({ msg: 'Somthing Wrong', status: 0 });
    }
}

module.exports.getdata = async (req, res) => {
    try {
        let data = await register.find({});
        if (data) {
            return res.status(200).json({ msg: 'Data Found successfully....', status: 1, rec: data });
        }
        else {
            return res.status(200).json({ msg: 'Data not Found ', status: 0 });
        }
    }
    catch (err) {
        console.log('Somthing Wrong');
        return res.status(400).json({ msg: 'Somthing Wrong', status: 0 });
    }
}


module.exports.deleterec = async (req, res) => {
    try {
        let deletes = await register.findByIdAndDelete(req.params.id);
        if (deletes) {
            return res.status(200).json({ msg: 'Data Deleted Succ....', status: 1, rec: deletes });
        }
        else {
            return res.status(200).json({ msg: 'Data not Found ', status: 0 });
        }
    }
    catch (err) {
        console.log('Somthing Wrong');
        return res.status(400).json({ msg: 'Somthing Wrong', status: 0 });
    }

}

module.exports.updatedata = async (req, res) => {
    try {
        let updates = await register.findByIdAndUpdate(req.params.id, req.body);
        if (updates) {
            let newrec = await register.findById(req.params.id);
            return res.status(200).json({ msg: 'Data Update Succ....', status: 1, rec: newrec });
        }
        else {
            return res.status(200).json({ msg: 'Data not Found ', status: 0 });
        }
    }
    catch (err) {
        console.log('Somthing Wrong');
        return res.status(400).json({ msg: 'Somthing Wrong', status: 0 });
    }
}