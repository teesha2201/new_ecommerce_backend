const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"],
    },
    email: {
        type: String,
        required: [true,"enter your email"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    phoneNo: {
        type: Number,
        required:[ true,"enter your number"],
        trim: true,
    },
    password: {
        type: String,
        required: [true,"enter your password"],
        // maxlength:12
    }
  
});
const UserRegister = mongoose.model("Register_user", userSchema);
module.exports = UserRegister;












// const mongoose =require("mongoose")
// const userSchema=mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     phoneNo:{
//         type:Number,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,
      
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })
// const UserRegister=mongoose.model("userRegister",userSchema)
// module.exports=UserRegisterr