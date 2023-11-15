const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id : String,
    image : String,
    price : Number,
    product_name : String,
    Brand : String,
    "Model_Name" : String,
      "Network_Service_Provider" : String,
      "Operating_System"  : String,
      "Cellular_Technology" : String,  
      "RAM_type" : String,
      "Graphic_Processor" : String,
      "Colour" : String ,
      "Dial_Size" : String ,
      "Dial_Shape" :String,
      "Strap" :String,
      "Strap_Width":String,
      "Strap_Type":String,
      "Material": String,
    heading : String,
    
    "key1" : String,
    "key2" : String, 
    "key3" : String, 
    "key4" : String, 
    "key5" : String, 
    "key6" : String,
    
    "Diet_Type": String,
    "Flavour":String,
    "Package_Information":String,
    "Item_Weight":String,
    "Number_of_Items":Number,
    "Net_Quantity":String,
    "Item_Package_Quantity":Number,
    "Number_of_Pieces":	Number,
    "Speciality":String,
    "Package_Weight": String,
    "Item_Form" : String,
    Material_Care : String,
    category : String,
    subCategory : String ,
    rating : String
   
           
});
const ProductModel = mongoose.model("ProductModel", userSchema);
module.exports = ProductModel;