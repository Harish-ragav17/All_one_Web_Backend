const express =require('express');
const router=express.Router();
const cors=require("cors");
const sharableData = require('./Models/sharableData');

router.options(cors()); 

router.post("/uploadSharable",(req,res)=>{
    try {
        const newData=new sharableData(
            { "code":req.body.code,
              "data":req.body.text
            })
            newData.save().then(()=>{
                res.send("uploaded");
            })  
    } catch (error) {
       res.send("Error in uploading") 
    }   
})

router.post('/getSharable',async(req,res)=>{
    try{
      const data=await sharableData.findOne({"code":req.body.getCode});
      console.log(data)
      if(data){
        res.send(data);
      }else{
        res.send("Data Not Found");
      }
    }catch(e){
        res.send("Error in getting data") 
    }
})


module.exports=router;