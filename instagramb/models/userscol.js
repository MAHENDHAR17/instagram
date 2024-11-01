const mongoose=require("mongoose")


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    fullname:{
        type:String,
    },
    profilepic:{
        type:String,
    },
    followers:{
        type:Array,
    },
    followings:{
        type:Array,
    },
    bio:{
        type:String,
    }
    
})

module.exports=mongoose.model("User",userSchema)