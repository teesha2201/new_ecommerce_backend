const {createData,getData} = require("../controller/product_controller")

const productRoute = require("express").Router();

productRoute.post("/createdatainproductstore", createData);

productRoute.get("/getdatafromproductstore", getData);

module.exports = productRoute;