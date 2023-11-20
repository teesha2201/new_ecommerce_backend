const {createData,getData, searchData} = require("../controller/product_controller")
const { login, register} = require("../controller/user_controller")
const auth = require('../middleware/user_auth')


const productRoute = require("express").Router();

productRoute.post("/createdatainproductstore", createData);

productRoute.get("/getdatafromproductstore", getData);

productRoute.post("/register",register);

productRoute.post("/login",login);



productRoute.get("/search",searchData);

module.exports = productRoute;