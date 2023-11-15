// const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/react-login-tut")
// .then(()=>{
//   console.log("mongodb connected from backend user_db.js")
// })
// .catch(()=>{
//   console.log("Failed from backend user_db.js")
// })

// const newSchema = new mongoose.Schema({
//   email:{
//     type:String,
//     required:true
//   },
//   Password:{
//     type:Number,
//     required:true
//   }
// })

// const collection = mongoose.model("collection",newSchema)
// module.exports = collection




























const cloudurl = "mongodb+srv://teesha2201:gupta@cluster0.dbbzgnj.mongodb.net/ecomNewProductStore?retryWrites=true&w=majority"
const mongoose = require("mongoose");

const user_connection = async () => {
  try {
    await mongoose.connect(cloudurl);

    console.log("Connected to the database");
  } 
  catch (err) {
    console.error("Error occured in connection to DataBase", err);
  }
};

module.exports = user_connection;