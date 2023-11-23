// ****************** commented code need to uncommment *******************************

const express = require("express")
const app = express();
const port = 5005;
const cors = require("cors");
const productRoute = require("./route/product_route")
const connection = require("./config/db")

// payment integration
const stripe = require("stripe")("sk_test_51OFcxhSJ9imTpFOMJ7Y2XoFDVrae406lVur8bTpfdVdENWl4yfxYwGXHw2TAJejZCHbZhQJYudMO7wHXWuNm6iKM00csJVqTLm") 

app.use(express.json());
 // giving syntaxError:Unexpected end of JSON input

app.use(cors({
    origin:"*"
}))
app.use(express.urlencoded({extended:true
}))
app.use("/api",productRoute)



app.get('/',(req,res)=>{
    res.send(`Server is running on port no. ${port}`)
})
//checkout api 
app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;
    console.log(products);
    const lineItems =products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.subCategory,
            },
            unit_amount:product.price * 100
        },
        quantity:product.quantity
    }))
    const session =await stripe.checkout.sessions.create({
        payment_method_types:["card"],
         line_items:lineItems,
        mode:"payment",
        success_url:"https://spontaneous-shortbread-606554.netlify.app/",
        cancel_url:"https://spontaneous-shortbread-606554.netlify.app/",
    })
    res.json({id:session.id})
})

app.listen(port, async()=>{
    try{
         await connection()
        
        console.log(`Server started after connection on port no.  ${port}`)
    }
    catch(err){
        console.log(`Error:${err}`)
    }
    console.log(`Server is running on http://localhost:${port}`);
})














// const express = require("express")
// const app = express()
// const collection =require("./config/user_db")
// const port = 5005;
// const cors =require("cors")
// const authenticate = require("./middleware/middleware_comp")
// const productRoute = require("./route/product_route")


// app.use(express.json())
// app.use(express.urlencoded({extended : true}))
// app.use(cors())

// app.use("/api",userRouting)
// app.use("/api",authenticate,productRoute)
// app.get("/",cors(),(req,res)=>{

// })
// app.post("/",async(req,res)=>{
//     const {email,password} = req.body;
//     try{
//         const check = await collection.findOne({email:email})

//         if(check){
//            res.json(" email already exist")
//         }
//         else{
//             res.json("email not exist")
//         }
//     }
//     catch(err){
//         res.json("Failed")
//     }
// })


// app.post("/register",async(req,res)=>{
//     const {email,password} = req.body;

//     const data = {
//         email:email,
//         password:password
//     }


//     try{
//         const check = await collection.findOne({email:email})

//         if(check){
//              res.json(" email already exist")
//         }
//         else{
//               res.json("email not exist")
//             await collection.insertMany([data])
//         }
//     }
//     catch(err){
//         res.json("Not Exist")
//     }
// })

// app.listen(port, async()=>{
//     try{
//         await connection()
//         await  user_connection()
//         console.log("port is connected on port no. 5005")
//     }
//     catch(err){
//         console.log(`Not Connected on port no. ${err}`)
//     }
//     console.log(`Server is running on http://localhost:${port}`);
// })































// const express = require("express")
// const app = express();
// const port = 5005;
// const cors = require("cors");
// const authenticate = require("./middleware/middleware_comp")
// const routing = require("./route/route_compo")

// app.use(express.json());
// app.use(cors({
//     origin:"*"
// }))
// app.use("/api",authenticate,routing)

// app.get('/',(req,res)=>{
//     res.send(`Server is running on port no. ${port}`)
// })

// app.listen(port,()=>{
//     try{
        
//         console.log(`server is fine on port no. ${port}`)
//     }
//     catch(err){
//         console.log(`Error:${err}`)
//     }
// })

