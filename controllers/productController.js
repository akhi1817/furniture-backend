const Product=require("../models/productSchema.js");
// get all products (read op. all products)
const getProducts=async (req,res)=>{
    try{
        const products=await Product.find();
        res.status(200).json({messsage:"products found" ,data:products});

    }
    catch(err){
        res.status(400).json({message:"error in getting products",error:err});
    }
}
// get one product by id (read op. one product) (read Operation -a single product By id)
const getProduct=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        if(!product){
            res.status(400).json({message:"product not found"});
        }
        res.status(200).json({message:"product found",data:product});

    }
    catch(err){
        res.status(500).json({message:'error in getting one product',error:err});
    }
}
//create a new product (create Operation)
const createProduct=async(req,res)=>{
    try{
        const product=new Product(req.body)
        await product.save()
        res.status(201).json({message:"product created successfully",data:product});

    }
    catch(err){
        res.status(500).json({message:"error in posting product",error:err});
    }
}

// update a product By id 
const updateProduct=async(req,res)=>{
    try{
        const product=await Product.findByIdAndUpdate(req.params.id,req.body);
        if(!product){
            return res.status(404).json({message:"product Not Found"});
        }
        res.status(200).json({message:"Product updated Successfully...",data:product})

    }
    catch(err){
        res.status(500).json({message:"Failed to update a product",error:err});
    }
}
// delete a product by id (delete Operation)
const deleteProduct=async(req,res)=>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).send();    
        }
        res.status(200).json({message:"Product Deleted Successfully..",product});

    }
    catch(err){
        res.status(500).json({message:"error is occured",error:err});
    }
}


// get products by category
const getCategory = async (req, res) => {
    try {
        const products = await Product.find({ fCategory: req.params.fCategory });
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for this category" });
        }
        res.status(200).json({ message: "Products found", data: products });
    } catch (err) {
        res.status(500).json({ message: "Error occurred", error: err });
    }
};



module.exports={
getProducts,getProduct, createProduct,deleteProduct,updateProduct,getCategory
}