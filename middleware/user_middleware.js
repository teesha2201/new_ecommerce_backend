const jwt=require("jsonwebtoken")
const sycret_key="bsb"
const auth=((req,res,next)=>{
   const BearerToken= req.header("authoriation")
   console.log(BearerToken)
   if(BearerToken){
    const token=BearerToken.split(" ")[1]
   const validate=jwt.verify(token,sycret_key)
   if(validate){
   return next()
   }
   else{
    return res.send({msg:"password is wrong"})
   }
   }
   return res.send({
    msg:"not authorized"
   })
})
module.exports=auth





// const jwt = require("jsonwebtoken");
// const secret_key = 'prepbytes';

// const auth = (req,res,next)=>{
//     const BearerToken =req.headers["authorization"]
//     console.log(BearerToken)
//     if(BearerToken){
//         const token = BearerToken.split(" ")[1];
//         const validate = jwt.verify(token,secret_key);
//         if(validate)
//         {
//            return next();
//         }
//         return res.send({msg:"User not authorized"})
//     }
//     return res.send({msg:"user not allowed"})
  
// }
// module.exports = auth