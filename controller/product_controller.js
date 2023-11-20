const { ecommerceData } = require("../dummydata");
const ProductModel = require("../model/product_model");

const createData = async (req, res) => {
  const response = await ProductModel.create(ecommerceData);
  res.send(response);
};

const getData = async (req, res) => {
  const result = await ProductModel.find({});
  res.send(result);
};

const searchData = async (req,res) =>{
  let search = req.query.search
  let  searchresult = await ProductModel.find({
    "$or":[
      {
        product_name:{$regex : '.*'+search+'.*',$options:'i'}
      },
      {
        product_name:{$regex:'.*'+search+'.*',$options:'i'}
      }
    ]
  })

  if(searchresult)
  {
    res.send({users:searchresult})
  }
  else
  {
    res.send({users:"data is not found"})
  }

  
}

module.exports = {
    createData,
    getData,
    searchData
};


// try{
//   var search = '';
//   if(req.query.search){
//     search = req.query.search
//   }
//   const userData = await ProductModel.findMany(
//     [
//       {Brand:{$regex:'.*'+search+'.*',$options:'i'}},
//       {product_name:{$regex:'.*'+search+'.*',$options:'i'}}
//     ]
//    )
//   if(userData)
//   {
//     res.send('',{users:userData})
//   }
//   else
//   {
//     res.send('',{users:"data is not found"})
//   }

// }
// catch(err){
//   console.log(err.msg);
// }