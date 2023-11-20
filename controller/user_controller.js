const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const UserLogin = require("../model/user_model");
const UserRegister = require("../model/userregister_model");
const sycret_key = "bsb";

const register = async (req, res) => {

  const data =  req.body;
  console.log(data)

  const details = await UserRegister.findOne({ email: `${data.email}` });
 try{
  if (details) {
    res.send({ msg: "user already registered with this email" });
    }
  else{
    const hashpassword = bcrypt.hashSync(data.password, 10);
    console.log(hashpassword);
  
    const tempObj = {
      email: data.email,
      password: hashpassword,
      name:data.name,
      phoneNo:data.phoneNo
    };
  
    const response =await UserRegister.create(tempObj);
    console.log(response);
    const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "7d" });
   
   
    return res.send({
      msg: "user registered successfully",
      token: token,
    });
  }
 
 }
  
 catch(err){
  console.log(err);
 }
};

const login = async(req, res) => {
    const data = req.body;
  
      const details =await UserRegister.findOne({email:`${data.email}`});
      if (details) {
        const validate = bcrypt.compareSync(data.password, details.password);
        if (validate) {
          const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "7d" },(err)=>{
            if(err){
              res.send("jwt token error");
             
            }
          });
          return res.send({
            msg: "user logged in successfully",
            token: token,
            name:details.name
          });
        } else {
          return res.send({
            msg: "password is wrong",
          });
        }
      }
      
    return res.send({
      msg: "email wrong",
    });
  };

  module.exports = { login, register };














// const bcrypt = require('bcrypt');
// const jwt  = require('jsonwebtoken')
// const secret_key = 'prep';
// const UserRegister = require('../model/userregister_model')
// const UserLogin = require('../model/user_model')

// const register =  async (req,res)=>{
//     const data =await  req.body ;
//     console.log(data)
  
//     const details =  await UserRegister.findOne({email:`${data.email}`})
//     console.log(details);
//     if(details)
//     {
//         return res.send({msg:'user with this email-id has already registerd'})
//     }

//     const hashpassword = bcrypt.hashSync(data.password,10);

//     const tempobj= {
//         name:data.name,
//         email:data.email,
//         password:hashpassword,
//         phoneNo: data.phoneNo
//     }
//     const response=  await UserRegister.create(tempobj) 
//     console.log(response);
  

//     const token = jwt.sign({email:data.email},secret_key,{expiresIn : "20d"})
//     console.log(token);
//     return res.send({msg:'User Registered Successfully',token:token})
// }


// const login = async (req,res)=>{

//     const logindata = await req.body;
//     const loginDetail =  await UserRegister.findOne({email:`${logindata.email}`})

//     if(loginDetail){
//         const validate = bcrypt.compareSync(logindata.password,loginDetail.password)
        
      
//         if(validate)
//         {
//             const token = jwt.sign({useremail:logindata.email},secret_key,{expiresIn:"20d"})
//             return res.send({msg:"User SuccessFully LoggedIn...",name:loginDetail.name,token:token})
//         }
//         else{
//             return res.send({msg:'password is Incorrect'})
//         }
//     }
//     else
//     {
//         return res.send({msg:"email is not Registered"})
//     }
// }
// module.exports = {register,login}



//**************** condition for form validation ********************/

// if (details) {
//   res.send({ msg: "user already registered with this email" });
//   }
  
//   else if(tempObj.name.length<=24 && tempObj.email.length<=30 && tempObj.password.length<=12 && tempObj.phoneNo.length===10) {
//     const hashpassword = bcrypt.hashSync(data.password, 10);
//     console.log(hashpassword);
//     const response =await UserRegister.create(tempObj);
//     console.log(response);
//     const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "7d" });
//     return res.send({
//       msg: "user registered successfully",
//       token: token,
//     });

//   }
// else if(tempObj.email.length<=0 || tempObj.name.length<=0 || tempObj.password.length<=0 || tempObj.phoneNo.length<=0){

//  else if(tempObj.name.length===0)
//     {
//       res.send("Name field must have max 24 characters");
//     }
//     else if(tempObj.email.length>=30){
//       res.send("email field must have min 12 and max 30 characters long")
//     }
//     else if(tempObj.password.length<=12){
//       res.send("password field must have min 6 and max 12 characters long")
//     }
//     else if(tempObj.phoneNo.length===10){
//       res.send("phoneNo. must have 10characters long")
//     }
  
  