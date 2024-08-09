const mongoose = require('mongoose')

const shareableData=new mongoose.Schema({
      code:{
        type:String,
        required:true
      },
      data:{
        type:String,
        required:true
      }
})

module.exports=mongoose.model("shareableData",shareableData);