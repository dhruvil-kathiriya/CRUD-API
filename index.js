const express = require('express');
const port = 8003;
const db = require('./config/mongoose');
const app = express();
const mongoose = require('mongoose');
const register = require('./model/register');

app.use(express.urlencoded());

app.use("/admin", require("./routes/register"))


app.listen(port, (err) => {
    if (err) {
        console.log('something wrong')
    }
    console.log('connected on port', port);
})