var Customer = require("../model/Customer");

const jwt = require("jsonwebtoken");
let mySecretKey = "a1Ut1fnqts4jh4vR25QgNyz12c";

//#region GET START

exports.getCustomerList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Customer.getCustomerList(function (err, data) {
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

exports.getVisitList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Customer.getVisitList(function (err, data) {
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

exports.getSaleList = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Customer.getSaleList(function (err, data) {
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

exports.postCustomer = function (req, res) {
  Customer.postCustomer(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postVisit = function (req, res) {
  Customer.postVisit(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postSale = function (req, res) {
  Customer.postSale(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion POST END

//#region PUT START

exports.putCustomer = function (req, res) {
  Customer.putCustomer(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putVisit = function (req, res) {
  Customer.putVisit(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion PUT END

//#region DELETE START

exports.deleteCustomer = function (req, res) {
  Customer.deleteCustomer(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteVisit = function (req, res) {
  Customer.deleteVisit(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteSale = function (req, res) {
  Customer.deleteSale(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion DELETE END
