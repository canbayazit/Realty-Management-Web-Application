// 'use strict';
const express = require("express");
const router = express.Router();

var contentController = require("../controllers/ContentController");

var cors = require("cors");
const app = express();

// Set up a whitelist and check against it:
var whitelist = ["http://localhost:3000", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Then pass them to cors:
app.use(cors(corsOptions));

app.use(require("body-parser").json());
// app.use(express.bodyParser({limit: '250mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,language"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

var bodyParser = {
  json: { limit: "500mb", extended: true },
  urlencoded: { limit: "500mb", extended: true },
};

//#region ROUTER GET START
router.get("/getCityList", contentController.getCityList);
router.get("/getGenderList", contentController.getGenderList);
router.get("/getFlatTypeList", contentController.getFlatTypeList);
router.get("/getIncomeTypeList", contentController.getIncomeTypeList);
router.get("/getProjectStatusList", contentController.getProjectStatusList);
//#endregion ROUTER GET END

//#region ROUTER POST START
router.post("/postCity", contentController.postCity);
router.post("/postGender", contentController.postGender);
router.post("/postFlatType", contentController.postFlatType);
router.post("/postIncomeType", contentController.postIncomeType);
router.post("/postProjectStatus", contentController.postProjectStatus);
router.post("/postLogin", contentController.postLogin);
//#endregion ROUTER POST END

//#region ROUTER PUT START
router.put("/putCity", contentController.putCity);
router.put("/putGender", contentController.putGender);
router.put("/putFlatType", contentController.putFlatType);
router.put("/putIncomeType", contentController.putIncomeType);
router.put("/putProjectStatus", contentController.putProjectStatus);

//#endregion ROUTER PUT END

//#region ROUTER DELETE START
router.delete("/deleteCity", contentController.deleteCity);
router.delete("/deleteGender", contentController.deleteGender);
router.delete("/deleteFlatType", contentController.deleteFlatType);
router.delete("/deleteIncomeType", contentController.deleteIncomeType);
router.delete("/deleteProjectStatus", contentController.deleteProjectStatus);

//#endregion ROUTER DELETE END

module.exports = router;
