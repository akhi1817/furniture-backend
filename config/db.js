const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/furnitureshopdb')
        console.log("database connected successfully..");
    }
    catch(err){
        console.log("some errors in connecting database")
    }
}

module.exports=connectDB;