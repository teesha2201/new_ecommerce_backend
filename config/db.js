
const cloudurl = "mongodb+srv://teesha2201:gupta@cluster0.dbbzgnj.mongodb.net/ecomProductStore?retryWrites=true&w=majority"
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(cloudurl);

    console.log("Connected to the database");
  } 
  catch (err) {
    console.error("Error occured in connection to DataBase", err);
  }
};

module.exports = connection;
