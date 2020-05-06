const path = require("path");

module.exports = path.dirname(process.mainModule.filename)

// if you export this file in admin.js, shop.js or other file JS file 
// use like this :--
// res.sendFile(path.join(rootDir, "views", "add-product.html"))
// this is just Helper function