var express = require("express");
var app = express();
var path = require("path");
const contentRoutes = require("./src/routes/ContentRoutes");
const customerRoutes = require("./src/routes/CustomerRoutes");
const projectRoutes = require("./src/routes/ProjectRoutes");
var bodyParser = require("body-parser");
var port = "8080";
var router = express.Router();
app.use(bodyParser.json());

var server = app.listen(port, function () {
  console.log("Server Status:", "Server is running...");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", contentRoutes);
app.use("/", customerRoutes);
app.use("/", projectRoutes);

app.use(function (req, res) {
  res.status(404).send({ url: `${req.originalUrl} not found!` });
});
