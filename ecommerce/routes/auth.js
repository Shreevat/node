const user = require("../models/users.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/login",(req,res,next)=>{
    user
    .findOne({
        email:req.body.email
    })
    .then((user)=>{
        bcrypt.compare(req.body.password,user.password,(err,result) =>{
            if(result){
                res.json({
                    msg:"valid",
                    user,
                });
            }
            else{
                res.json({
                    msg:"invalid",
                    
                });
            }
        
        });
    })
    .catch((err)=> {
        res.json({
            msd: "invalid creds",
            err,
        });
    });
});

module.exports = router;