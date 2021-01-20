const mongoose=require('mongoose');

const packageSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        required:true
    }
})

const Package=mongoose.model('Package',packageSchema);
module.exports=Package;