const express = require("express");

const router = express.Router();

// export getProductHome object from controller folder
const getProductHome = require("../controllers/products");

router.get("/", getProductHome.getProductHome);

module.exports = router;