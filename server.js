const express = require('express');
const router = require('./routes');
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config()

const app=express();

app.use(express.json());

app.use(
    cors(
        {  
            origin:process.env.frontend_origin,
            credentials:true,
        }
    )
);
const db=()=>{
    try {
        mongoose.connect(process.env.db).then(()=>{
            console.log("DB connected");
        })
    } catch (error) {
        console.log(error)
    } 
}
db();

app.use(router);


app.listen(3005,()=>{
    console.log("server is listening.");
})
