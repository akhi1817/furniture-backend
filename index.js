const express=require("express");
const connectDB=require('./config/db.js');
const cors=require("cors");
const productRouter=require("./routes/products.js");

const app=express();

const PORT=8000;
// middlewares
app.use(express.json());
app.use(cors());

// database connection
connectDB();

app.get("/",(req,res)=>{
    res.status(200).send("hello from home route");

})

app.use("/products",productRouter);

app.use((req, res, next) => {
    res.status(404).send('Route not found');
  });
  


app.listen(PORT,()=>{
    console.log(`your server is running on ${PORT}`);
})