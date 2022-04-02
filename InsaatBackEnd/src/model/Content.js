var msSql = require("../../MsSqlConfig");

var sql = require("mssql");

const pool = new sql.ConnectionPool(msSql.Config, function (err) {
  console.log("Connected to SQL server successfully!");
});

const jwt = require("jsonwebtoken");
let mySecretKey = "a1Ut1fnqts4jh4vR25QgNyz12c";

//#region GET START

exports.getCityList = function (callback) {
  var FUNCTIONNAME = "getCityList";

  var sqlStatement = `
		SELECT CityID,
           CityName,
           CONVERT(varchar, CreationDate, 23) AS 'CreationDate',
           CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
    FROM City
    ORDER BY CityName ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          CitiesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CitiesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getGenderList = function (callback) {
  var FUNCTIONNAME = "getGenderList";

  var sqlStatement = `
		SELECT GenderID,
           GenderName,
           CONVERT(varchar, CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'           
    FROM Gender
    ORDER BY GenderID ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          GendersTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            GendersTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getFlatTypeList = function (callback) {
  var FUNCTIONNAME = "getFlatTypeList";

  var sqlStatement = `
		SELECT FlatTypeID,
           FlatTypeName,
           CONVERT(varchar, CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'           
    FROM FlatType
    ORDER BY FlatTypeName ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          FlatsTypeTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatsTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getIncomeTypeList = function (callback) {
  var FUNCTIONNAME = "getIncomeTypeList";

  var sqlStatement = `
		SELECT IncomeTypeID,
           IncomeTypeName,
           CONVERT(varchar, CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
    FROM IncomeType
    ORDER BY IncomeTypeName ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          IncomeTypesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            IncomeTypesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getProjectStatusList = function (callback) {
  var FUNCTIONNAME = "getProjectStatusList";

  var sqlStatement = `
		SELECT ProjectStatusID,
           ProjectStatusName,
           CONVERT(varchar, CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate' 
    FROM ProjectStatus
    ORDER BY ProjectStatusID ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          ProjectStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

//#endregion GET END

//#region POST START

exports.postCity = function (callback) {
  var FUNCTIONNAME = "postCity";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO City (
                CityName
                )
    VALUES (
                '${serviceParameters.CityName}'
    )
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Ekleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postGender = function (callback) {
  var FUNCTIONNAME = "postGender";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO Gender (
                GenderName
                )
    VALUES (
                '${serviceParameters.GenderName}'
    )
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Ekleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postFlatType = function (callback) {
  var FUNCTIONNAME = "postFlatType";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO FlatType (
                FlatTypeName
                )
    VALUES (
                '${serviceParameters.FlatTypeName}'
    )
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Ekleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postIncomeType = function (callback) {
  var FUNCTIONNAME = "postIncomeType";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO IncomeType (
                IncomeTypeName
                )
    VALUES (
                '${serviceParameters.IncomeTypeName}'
    )
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Ekleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postProjectStatus = function (callback) {
  var FUNCTIONNAME = "postProjectStatus";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO ProjectStatus (
                ProjectStatusName
                )
    VALUES (
                '${serviceParameters.ProjectStatusName}'
    )
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Ekleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postLogin = function (callback) {
  var FUNCTIONNAME = "postLogin";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  SELECT EMail 
  FROM Users
  WHERE EMail = '${serviceParameters.EMail}' AND
        Password = '${serviceParameters.Password}'
      `;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = [
          {
            result: "Fail! || SQL Error! Error: " + err,
            message: null,
            data: null,
          },
        ];
      } else {
        if (result.recordsets[0].length > 0) {
          const myData = {
            eMailAddress: serviceParameters.EMail,
          };
          let jwtToken = jwt.sign(myData, mySecretKey, { expiresIn: "1000s" });
          var returnVal = [
            {
              result: "Giriş işlemi başarılı!",
              message: null,
              jwt: jwtToken,
            },
          ];
        } else {
          console.log(err);
          var returnVal = [
            {
              result: "Fail! || User Failed2!",
              message: sqlStatement,
              data: err,
            },
          ];
        }
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

//#endregion POST END

//#region PUT START

exports.putCity = function (callback) {
  var FUNCTIONNAME = "putCity";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE City SET 
  CityName = '${serviceParameters.CityName}', 
  UpdateDate = GETDATE() 
  WHERE CityID = ${serviceParameters.CityID}`;
  const ps = new sql.PreparedStatement(pool);
  console.log(sqlStatement);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Güncelleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.putGender = function (callback) {
  var FUNCTIONNAME = "putGender";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Gender SET 
  GenderName='${serviceParameters.GenderName}', 
  UpdateDate = GETDATE()  
  WHERE GenderID = ${serviceParameters.GenderID}`;

  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Güncelleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.putFlatType = function (callback) {
  var FUNCTIONNAME = "putFlatType";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE FlatType SET 
  FlatTypeName = '${serviceParameters.FlatTypeName}',
  UpdateDate = GETDATE()
  WHERE FlatTypeID=${serviceParameters.FlatTypeID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Güncelleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.putIncomeType = function (callback) {
  var FUNCTIONNAME = "putIncomeType";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE IncomeType SET 
  IncomeTypeName='${serviceParameters.IncomeTypeName}', 
  UpdateDate = GETDATE() 
  WHERE IncomeTypeID = ${serviceParameters.IncomeTypeID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Güncelleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.putProjectStatus = function (callback) {
  var FUNCTIONNAME = "putProjectStatus";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE ProjectStatus SET 
  ProjectStatusName='${serviceParameters.ProjectStatusName}', 
  UpdateDate = GETDATE()
  WHERE ProjectStatusID = ${serviceParameters.ProjectStatusID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Güncelleme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

//#endregion PUT END

//#region DELETE START

exports.deleteCity = function (callback) {
  var FUNCTIONNAME = "deleteCity";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM City 
  WHERE CityID = ${serviceParameters.CityID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = [
          {
            result: "Failed",
            message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
            data: err,
            veri: serviceParameters,
          },
        ];
      } else {
        var returnVal = [
          {
            result: "Silme işlemi başarıyla gerçekleşti.",
            message: serviceParameters,
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.deleteGender = function (callback) {
  var FUNCTIONNAME = "deleteGender";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM Gender 
  WHERE GenderID = ${serviceParameters.GenderID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Silme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.deleteFlatType = function (callback) {
  var FUNCTIONNAME = "deleteFlatType";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM FlatType 
  WHERE FlatTypeID=${serviceParameters.FlatTypeID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Silme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.deleteIncomeType = function (callback) {
  var FUNCTIONNAME = "deleteIncomeType";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM IncomeType 
  WHERE IncomeTypeID = ${serviceParameters.IncomeTypeID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Silme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.deleteProjectStatus = function (callback) {
  var FUNCTIONNAME = "deleteProjectStatus";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM ProjectStatus 
  WHERE ProjectStatusID = ${serviceParameters.ProjectStatusID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Silme işlemi başarıyla gerçekleşti.",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

//#endregion DELETE END
