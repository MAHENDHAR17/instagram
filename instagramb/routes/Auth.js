const router = require('express').Router()
const User = require("../models/userscol")

router.post("/sinup",async(req,res)=>{   //localhost:8888/ig/auth/sinup
    console.log(JSON.stringify(req.body))
    if(!(req.body.username && req.body.password && req.body.email)){
        res.status(400).send("bad")}
    
await new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).save()
    res.send("registered")
})





module.exports= router