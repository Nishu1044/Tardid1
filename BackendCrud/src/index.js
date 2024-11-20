const express = require("express")
const Connection = require("./db")
const productModel = require("./schema")
const dotenv = require("dotenv").config()



const app = express()
app.use(express.json())


const PORT = process.env.PORT || 7001


// add
app.post("/add", async (req,res)=>{
    const {name} = req.body;
 try {
    const newProduct = new productModel({name})
    await newProduct.save()
    res.status(201).json({message:"added successfully",newProduct})

 } catch (error) {
    console.log(error);
    res.status(401).json({message:"error occurs while adding name"})
 }
})

//  get
app.get("/get", async (req,res)=>{
    try {
        const allProducts = await productModel.find()
        res.status(201).json({message:"all product",allProducts})
    } catch (error) {
        console.log(error)
        res.status(401).json({message:"error occurs while fetching produts"})
    }
})

// update
app.put("/update/:id", async (req,res)=>{
    const {id} = req.params;
    const updatedData = req.body
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id,updatedData,{new:true})
        res.status(201).json({message:"updated",updatedProduct})
    } catch (error) {
        console.log(error)
        res.status(401).json({message:"error occurs while updating produts"})
    }
})


// delete
app.delete("/delete/:id", async (req,res)=>{
    const {id} = req.params;
   
    try {
        const deleteProduct = await productModel.findByIdAndDelete(id)
        res.status(201).json({message:"deleted",deleteProduct})
    } catch (error) {
        console.log(error)
        res.status(401).json({message:"error occurs while deleting produts"})
    }
})

app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`);
Connection()
})