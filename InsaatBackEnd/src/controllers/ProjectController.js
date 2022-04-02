var Project = require("../model/Project");

const jwt = require("jsonwebtoken");
let mySecretKey = "a1Ut1fnqts4jh4vR25QgNyz12c";

//#region GET START

exports.getProjectList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Project.getProjectList(function (err, data) {
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

exports.getFlatList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Project.getFlatList(function (err, data) {
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

exports.getEmployeeList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Project.getEmployeeList(function (err, data) {
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

exports.getFlatStatusList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Project.getFlatStatusList(function (err, data) {
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

exports.postProject = function (req, res) {
  Project.postProject(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postFlat = function (req, res) {
  Project.postFlat(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postEmployee = function (req, res) {
  Project.postEmployee(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion POST END

//#region PUT START

exports.putProject = function (req, res) {
  Project.putProject(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putFlat = function (req, res) {
  Project.putFlat(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putEmployee = function (req, res) {
  Project.putEmployee(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion PUT END

//#region DELETE START

exports.deleteProject = function (req, res) {
  Project.deleteProject(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteFlat = function (req, res) {
  Project.deleteFlat(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteEmployee = function (req, res) {
  Project.deleteEmployee(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion DELETE END
