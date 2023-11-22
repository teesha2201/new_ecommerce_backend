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

const searchData = async (req, res) => {
  try{
      const searchresult = await ProductModel.find({
        "$or":[
          {subCategory:{$regex:`.*${req.params.key}.*`,$options:'i'}},
          {Brand:{$regex:`.*${req.params.key}.*`,$options:'i'}},
          {product_name:{$regex:`.*${req.params.key}.*`,$options:'i'}}
        ]
      })
      res.send(searchresult)
  }
  catch (err) {
        console.log(`error: ${err}`);
        res.send({ msg: "Something Went Wrong" });
  }
}

module.exports = {
  createData,
  getData,
  searchData
};



// const searchData = async (req, res) => {
//   try {
//     var search = '';
//     if (req.query.search) {
//       search = req.query.search;
//     }

//     if (!search) {
//       return res.send({ msg: "Please provide a search term" });
//     }

//     let searchresult = await ProductModel.find({
//       product_name: { $regex: `.*${search}.*`, $options: 'i' }
//     });

//     if (searchresult.length > 0) {
//       return res.json({ success: true, users: searchresult, msg: "Searching product is available" });
//     } else {
//       return res.send({ msg: "Search product is not found" });
//     }
//   } catch (err) {
//     console.log(`error: ${err}`);
//     return res.send({ msg: "Something Went Wrong" });
//   }
// };

// const searchData = async (req,res) =>{
//   try{
//   let search = req.body.search
//   let  searchresult = await ProductModel.find({
//       product_name:{$regex : new RegExp(search,'i')}
    // "$or":[
    //   {
    //     product_name:{$regex : '.*'+search+'.*',$options:'i'}
    //   },
    //   {
        
    //     Model_Name:{$regex:'.*'+search+'.*',$options:'i'}
    //   }
    // ]
//   })

//   if(searchresult.length>0)
//   {
//    return res.send({success:true, users:searchresult,msg:"Searching product is available "})
//   }
//   else
//   {
//    return res.send({msg:"search Product is not found"})
//   }
//   }
//   catch(err){
//     console.log(`error : ${err}`)
//     return res.send({msg:"Something Went Wrong"})
//   }
  
// }



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