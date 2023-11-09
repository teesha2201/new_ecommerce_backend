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

module.exports = {
    createData,
    getData,
};