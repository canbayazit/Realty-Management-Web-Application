var Content = require("../model/Content");

const jwt = require("jsonwebtoken");
let mySecretKey = "a1Ut1fnqts4jh4vR25QgNyz12c";

//#region GET START

exports.getCityList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Content.getCityList(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
        var returnVal = {
          result: "Failed",
          message: "Authentication Failed",
        };
        res.send(returnVal);
      } else {
        res.send(data);
      }
    });
  }, req.body);
};

exports.getGenderList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  //sorgu header , body veya queryden gelip tokenı myJwt e atıyor.

  Content.getGenderList(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
        var returnVal = {
          result: "Failed",
          message: "Authentication Failed",
        };
        res.send(returnVal);
      } else {
        res.send(data);
      }
    });
  }, req.body);
};

exports.getFlatTypeList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Content.getFlatTypeList(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
        var returnVal = {
          result: "Failed",
          message: "Authentication Failed",
        };
        res.send(returnVal);
      } else {
        res.send(data);
      }
    });
  }, req.body);
};

exports.getIncomeTypeList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Content.getIncomeTypeList(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
        var returnVal = {
          result: "Failed",
          message: "Authentication Failed",
        };
        res.send(returnVal);
      } else {
        res.send(data);
      }
    });
  }, req.body);
};

exports.getProjectStatusList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Content.getProjectStatusList(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
        var returnVal = {
          result: "Failed",
          message: "Authentication Failed",
        };
        res.send(returnVal);
      } else {
        res.send(data);
      }
    });
  }, req.body);
};

//#endregion GET END

//#region POST START

exports.postCity = function (req, res) {
  Content.postCity(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postGender = function (req, res) {
  Content.postGender(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postFlatType = function (req, res) {
  Content.postFlatType(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postIncomeType = function (req, res) {
  Content.postIncomeType(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postProjectStatus = function (req, res) {
  Content.postProjectStatus(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postLogin = function (req, res) {
  Content.postLogin(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//#endregion POST END

//#region PUT START

exports.putCity = function (req, res) {
  Content.putCity(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putGender = function (req, res) {
  Content.putGender(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putFlatType = function (req, res) {
  Content.putFlatType(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putIncomeType = function (req, res) {
  Content.putIncomeType(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putProjectStatus = function (req, res) {
  Content.putProjectStatus(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion PUT END

//#region DELETE START

exports.deleteCity = function (req, res) {
  Content.deleteCity(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteGender = function (req, res) {
  Content.deleteGender(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteFlatType = function (req, res) {
  Content.deleteFlatType(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteIncomeType = function (req, res) {
  Content.deleteIncomeType(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteProjectStatus = function (req, res) {
  Content.deleteProjectStatus(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion DELETE END
