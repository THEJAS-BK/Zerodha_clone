const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
main().then(()=>{
    console.log("connected to db")
})
.catch(err=>console.log(err))

async function main(){
    await  mongoose.connect(process.env.MONGO_URL);
}

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})
