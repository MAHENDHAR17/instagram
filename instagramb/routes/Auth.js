const router=require('express').Router()
const User=require("../models/userscol")

router.get("/sinup",async(req,res)=>{   //localhost:8888/ig/auth/sinup
await new User({
        usename:req.body.usename,
        email:req.body.email,
        password:req.body.password
    }).save()
    res.send("registered")
})






module.exports= router