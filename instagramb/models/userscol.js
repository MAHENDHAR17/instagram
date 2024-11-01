const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
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
    profilpick:{
        type:String,
    },
    follower:{
        type:Array,
    },
    following:{
        type:Array,
    },
    bio:{
        type:String,
    }
    
})

module.exports=mongoose.model("User",userSchema)