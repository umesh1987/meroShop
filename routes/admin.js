const express = require("express");

const router = express.Router();

const getAddProductController = require("../controllers/products");
const postAddProductController = require("../controllers/products");




//if methods are diffrent we can use same route path("/admin/add-product")
// export object function from controller folder 
router.get("/admin/add-product", getAddProductController.getAddProduct);

router.post("/admin/add-product", postAddProductController.postAddProduct);

module.exports = router;