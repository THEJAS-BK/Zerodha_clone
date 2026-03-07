const {Schema,model}=require("mongoose")

const holdingSchema=new Schema({
    name:String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
    isLoss:{
        type:Boolean,
        default:false
    }
})

module.exports =model("Holding",holdingSchema)