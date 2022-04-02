var msSql = require("../../MsSqlConfig");

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(msSql.Config, function (err) {
  console.log("Connected to SQL server successfully!");
});

//#region GET START

exports.getProjectList = function (callback) {
  var FUNCTIONNAME = "getProjectList";

  var sqlStatement = `
		SELECT P.ProjectID,
           P.ProjectName,
           C.CityID,
           C.CityName,
           PS.ProjectStatusID,
           PS.ProjectStatusName,
           CONVERT(varchar, P.CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, P.UpdateDate, 23) AS 'UpdateDate' 
    FROM Project AS P
    LEFT JOIN City AS C ON P.CityID = C.CityID
    LEFT JOIN ProjectStatus AS PS ON P.ProjectStatusID = PS.ProjectStatusID
    ORDER BY ProjectID ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          ProjectsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getFlatList = function (callback) {
  var FUNCTIONNAME = "getFlatList";

  var sqlStatement = `
		SELECT F.FlatID,
           F.FlatNo,
           P.ProjectID,
           P.ProjectName,
           FT.FlatTypeID,
           FT.FlatTypeName,
           FS.FlatStatusID,
           FS.FlatStatusName,
           F.Price,
           CONVERT(varchar, F.CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, F.UpdateDate, 23) AS 'UpdateDate' 
    FROM Flat AS F
    LEFT JOIN Project AS P ON F.ProjectID = P.ProjectID
    LEFT JOIN FlatType AS FT ON F.FlatTypeID = FT.FlatTypeID
    LEFT JOIN FlatStatus AS FS ON F.FlatStatusID = FS.FlatStatusID
    ORDER BY F.FlatID ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          FlatsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getEmployeeList = function (callback) {
  var FUNCTIONNAME = "getEmployeeList";

  var sqlStatement = `
		SELECT EmployeeID,
           EmployeeName,
           EmployeeSurname,          
           CONVERT(varchar, CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
    FROM Employee
    ORDER BY EmployeeName, EmployeeSurname ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          EmployeesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            EmployeesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getFlatStatusList = function (callback) {
  var FUNCTIONNAME = "getFlatStatusList";

  var sqlStatement = `
		SELECT FlatStatusID,
           FlatStatusName,                     
           CONVERT(varchar, CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
    FROM FlatStatus
    ORDER BY FlatStatusName ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          FlatStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatStatusTable: result.recordsets[0],
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

exports.postProject = function (callback) {
  var FUNCTIONNAME = "postProject";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Project (
    ProjectName,
    CityID,
    ProjectStatusID
    ) VALUES (
      '${serviceParameters.ProjectName}',
      '${serviceParameters.CityID}',
      '${serviceParameters.ProjectStatusID}'
      )`;
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

exports.postFlat = function (callback) {
  var FUNCTIONNAME = "postFlat";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Flat (
    FlatNo,
    ProjectID,
    FlatTypeID,
    FlatStatusID,
    Price
    ) VALUES (
      '${serviceParameters.FlatNo}', 
      ${serviceParameters.ProjectID}, 
      ${serviceParameters.FlatTypeID}, 
      ${serviceParameters.FlatStatusID}, 
      '${serviceParameters.Price}'
      )`;
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

exports.postEmployee = function (callback) {
  var FUNCTIONNAME = "postEmployee";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Employee (
    EmployeeName,
    EmployeeSurname,
    Username,
    Password
    ) VALUES (
      '${serviceParameters.EmployeeName}',
      '${serviceParameters.EmployeeSurname}',
      '${serviceParameters.Username}',
      '${serviceParameters.Password}'
      )`;
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

//#endregion POST END

//#region PUT START

exports.putProject = function (callback) {
  var FUNCTIONNAME = "putProject";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Project SET 
  ProjectName='${serviceParameters.ProjectName}', 
  CityID =${serviceParameters.CityID}, 
  ProjectStatusID=${serviceParameters.ProjectStatusID}, 
  UpdateDate = GETDATE()
  WHERE ProjectID = ${serviceParameters.ProjectID}`;
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

exports.putFlat = function (callback) {
  var FUNCTIONNAME = "putFlat";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Flat SET 
  FlatNo='${serviceParameters.FlatNo}', 
  ProjectID=${serviceParameters.ProjectID},
  FlatTypeID=${serviceParameters.FlatTypeID},
  FlatStatusID=${serviceParameters.FlatStatusID},
  Price = '${serviceParameters.Price}', 
  UpdateDate = GETDATE()
  WHERE FlatID=${serviceParameters.FlatID}`;
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

exports.putEmployee = function (callback) {
  var FUNCTIONNAME = "putEmployee";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Employee SET 
  EmployeeName = ('${serviceParameters.EmployeeName}'), 
  EmployeeSurname = ('${serviceParameters.EmployeeSurname}'),  
  UpdateDate = GETDATE() 
  WHERE EmployeeID = (${serviceParameters.EmployeeID})`;

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

exports.deleteProject = function (callback) {
  var FUNCTIONNAME = "deleteProject";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM Project 
  WHERE ProjectID = ${serviceParameters.ProjectID}`;
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

exports.deleteFlat = function (callback) {
  var FUNCTIONNAME = "deleteFlat";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM Flat 
  WHERE FlatID = ${serviceParameters.FlatID}`;
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

exports.deleteEmployee = function (callback) {
  var FUNCTIONNAME = "deleteEmployee";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM Employee 
  WHERE EmployeeID = ${serviceParameters.EmployeeID}`;
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
