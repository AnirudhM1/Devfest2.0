const router = require("express").Router();
const {loginController} = require("../controllers/auth");
const {verify} = require("jsonwebtoken");

const authCheck = async (req, res, next) =>{
    const jwt = req.method==="GET"?req.headers.jwt:req.body.headers.jwt;
    try{
        console.log(jwt);
        const value = await verify(jwt, process.env.secret);
        if(value){
            next();
        }
        else{
            throw Error("Unauthorized");
        }
    }
    catch(err){
        console.log(err);
    }
}

router.use(authCheck);

router.get("/login", loginController)

module.exports = router;