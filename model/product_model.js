const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id : String,
    image : String,
    price : Number,
    product_name : String,
    Brand : String,
    "Model Name" : String,
      "Network Service Provider" : String,
      "Operating System"  : String,
      "Cellular Technology" : String,  
      "RAM type" : String,
      "Graphic Processor" : String,
      "Colour" : String ,
      "Dial Size" : String ,
      "Dial Shape" :String,
      "Strap" :String,
      "Strap Width":String,
      "Strap Type":String,
      "Material": String,
    heading : String,
    
    "key1" : String,
    "key2" : String, 
    "key3" : String, 
    "key4" : String, 
    "key4" : String, 
    "key5" : String,
    "key5" : String,
    "key6" : String,
   
           
        "Brand":String,
        "Diet Type": String,
        "Flavour":String,
        "Package Information":String,
        "Item Weight":String,
        "Number of Items":Number,
        "Net Quantity":String,
        "Item Package Quantity":Number,
        "Number of Pieces":	Number,
        "Speciality":String,
        "Package Weight": String,
        "Item Form" : String,
  
    Material_Care : String,
    category : String,
    subCategory : String ,
    rating : String

});
const ProductModel = mongoose.model("ProductModel", userSchema);
module.exports = ProductModel;