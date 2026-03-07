const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors")

require('dotenv').config();
main().then(()=>{
    console.log("connected to db")
})
.catch(err=>console.log(err))

app.use(cors(
{origin:"http://localhost:3000",}
))

async function main(){
    await  mongoose.connect(process.env.MONGO_URL);
}
//schemas
const Holdings=require("./models/holdings")
const Orders=require("./models/orders")
const Positions=require("./models/positions")
//routes
app.get("/allHoldings",async(req,res,next)=>{
    let allHoldings=await Holdings.find();
    res.json(allHoldings)
})
app.get("/allPositions",async(req,res,next)=>{
    let allPositions=await Positions.find();
    res.json(allPositions)
})
//get order
app.post("/newOrder",async(req,res,next)=>{
    const order=new Orders(req.body);
    await order.save();
    res.sendStatus(200);
})
app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})
