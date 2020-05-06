const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 8080;
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const pageNotFound = require("./controllers/error");


// set view engine EJS through views folder it means register ejs
app.set("view engine", "ejs");
app.set("views", "views");


// take data from user inpute (body data)
app.use(bodyParser.urlencoded({ extended: false }));
// express give to access to use public folder
app.use(express.static(path.join(__dirname, "public")));


app.use(adminRoutes); // .routes is export from admin.js file export.routes = router;
app.use(shopRoutes);


app.use(pageNotFound.getPageNotFound);

app.listen(PORT, function () {
    console.log("Server is running on: http://localhost:" + PORT);
});