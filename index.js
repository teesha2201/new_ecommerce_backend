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



const express = require("express")
const app = express();
const port = 5005;
const cors = require("cors");
const authenticate = require("./middleware/middleware_comp")
const productRoute = require("./route/product_route")
const connection = require("./config/db")
app.use(express.json());

app.use(cors({
    origin:"*"
}))
app.use("/api",authenticate,productRoute)

app.get('/',(req,res)=>{
    res.send(`Server is running on port no. ${port}`)
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