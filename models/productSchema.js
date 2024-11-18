const mongoose=require("mongoose");

const productSchema= new mongoose.Schema(
    {
        fName:{
            type:String,
            required:true,
            unique:true,
        },
        fDescription:{
            type:String,
            required:true,
        },
        fPrice:{
            type:Number,
            required:true,
        },
        fCategory:{
            type:String,
            required:true,
        }

    }
)
const Product=mongoose.model("Product",productSchema);

module.exports=Product;