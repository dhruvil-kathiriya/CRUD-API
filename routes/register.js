const express = require("express");
const routes = express();
const register = require("../model/register");
const registercontroller = require("../controller/registercontroller");

routes.get("/getdata", registercontroller.getdata);

routes.post("/register", register.uploadImage, registercontroller.register);

routes.delete("/deleterec/:id", registercontroller.deleterec);

routes.put("/updatedata/:id", registercontroller.updatedata);

module.exports = routes;