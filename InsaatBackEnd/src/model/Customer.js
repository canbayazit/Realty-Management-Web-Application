var msSql = require("../../MsSqlConfig");

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(msSql.Config, function (err) {
  console.log("Connected to SQL server successfully!");
});

//#region GET START

exports.getCustomerList = function (callback) {
  var FUNCTIONNAME = "getCustomerList";

  var sqlStatement = `
		SELECT C.CustomerID,
           C.CustomerName,
           C.CustomerSurname,
           C.GSM,
           CONVERT(varchar, C.BirthDate, 23) AS 'BirthDate',
           C.TC,
           C.EMail,
           C.Address,
           G.GenderID,
           G.GenderName,
           CT.CityID,
           CT.CityName,
           C.CustomerNo,
           IT.IncomeTypeID,
           IT.IncomeTypeName,
           CONVERT(varchar, C.CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, C.UpdateDate, 23) AS 'UpdateDate' 
    FROM Customer AS C
    LEFT JOIN Gender AS G ON C.GenderID = G.GenderID
    LEFT JOIN City AS CT ON C.CityID = CT.CityID
    LEFT JOIN IncomeType AS IT ON C.IncomeTypeID = IT.IncomeTypeID
    ORDER BY C.CustomerName, C.CustomerSurname ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          CustomersTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CustomersTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getVisitList = function (callback) {
  var FUNCTIONNAME = "getVisitList";

  var sqlStatement = `
		SELECT V.VisitID,
           CONVERT(varchar, V.VisitDate, 23) AS 'VisitDate',
           C.CustomerID,
           C.CustomerName,
           C.CustomerSurname,
           P.ProjectID,
           P.ProjectName,
           V.Notes,
           CONVERT(varchar, V.CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, V.UpdateDate, 23) AS 'UpdateDate'
    FROM Visit AS V
    LEFT JOIN Customer AS C ON V.CustomerID = C.CustomerID
    LEFT JOIN Project AS P ON V.ProjectID = P.ProjectID
    ORDER BY V.VisitDate DESC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          VisitsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            VisitsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getSaleList = function (callback) {
  var FUNCTIONNAME = "getSaleList";

  var sqlStatement = `
		SELECT S.SaleID,           
           CONVERT(varchar, S.SaleDate, 23) AS 'SaleDate',
           C.CustomerID,
           C.CustomerName,
           C.CustomerSurname,
           F.FlatID,
           F.FlatNo,
           S.Price,
           E.EmployeeID,
           E.EmployeeName,
           E.EmployeeSurname,
           S.Notes,
           CONVERT(varchar, S.CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, S.UpdateDate, 23) AS 'UpdateDate' 
    FROM Sales AS S
    LEFT JOIN Customer AS C ON S.CustomerID = C.CustomerID
    LEFT JOIN Flat AS F ON S.FlatID = F.FlatID
    LEFT JOIN Employee AS E ON S.EmployeeID = E.EmployeeID
    ORDER BY S.SaleDate DESC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          SalesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            SalesTable: result.recordsets[0],
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

exports.postCustomer = function (callback) {
  var FUNCTIONNAME = "postCustomer";
  var serviceParameters = arguments[1];
  var sqlStatement = `DECLARE @CustomerID AS int
  SET NOCOUNT ON 
  INSERT INTO Customer (
    [CustomerName],
      [CustomerSurname],
      [GSM],
      [BirthDate],
      [TC],
      [EMail],
      [Address],
      [GenderID],
      [CityID],
      [CustomerNo],
      [IncomeTypeID]
    )
  VALUES (
    '${serviceParameters.CustomerName}',
    '${serviceParameters.CustomerSurname}',		
    '${serviceParameters.GSM}',
    '${serviceParameters.BirthDate}',
    '${serviceParameters.TC}',
    '${serviceParameters.EMail}',
    '${serviceParameters.Address}',
    ${serviceParameters.GenderID},		
    ${serviceParameters.CityID},
    '${serviceParameters.CustomerNo}', 
    ${serviceParameters.IncomeTypeID}
    )

    SELECT @CustomerID = SCOPE_IDENTITY()


    `;
    
    for(var i = 0; i < serviceParameters.FlatTypeID.length; i++) {
      sqlStatement += `INSERT INTO CustomerRequest (CustomerID, FlatTypeID)
      VALUES (@CustomerID, ${serviceParameters.FlatTypeID[i]})`
    };
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
            message: sqlStatement,
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postVisit = function (callback) {
  var FUNCTIONNAME = "postVisit";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Visit (
    VisitDate, 
    CustomerID, 
    ProjectID, 
    Notes
    ) VALUES (
      '${serviceParameters.VisitDate}',
      '${serviceParameters.CustomerID}',
      '${serviceParameters.ProjectID}',
      '${serviceParameters.Notes}'
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

exports.postSale = function (callback) {
  var FUNCTIONNAME = "postSale";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Sales (
    SaleDate,
    CustomerID,
    FlatID,
    Price,
    EmployeeID,
    Notes
    ) VALUES (
      '${serviceParameters.SaleDate}',
      ${serviceParameters.CustomerID},
      ${serviceParameters.FlatID},
      ${serviceParameters.Price},
      ${serviceParameters.EmployeeID},
      '${serviceParameters.Notes}'
      )`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          message: sqlStatement,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Ekleme işlemi başarıyla gerçekleşti.",
            message: sqlStatement,
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

exports.putCustomer = function (callback) {
  var FUNCTIONNAME = "putCustomer";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Customer SET
  [CustomerName] = '${serviceParameters.CustomerName}',
  [CustomerSurname] ='${serviceParameters.CustomerSurname}',
  [GSM] = '${serviceParameters.GSM}',
  [BirthDate]='${serviceParameters.BirthDate}',
  [TC]='${serviceParameters.TC}',
  [EMail]='${serviceParameters.EMail}',
  [Address]='${serviceParameters.Address}',
  [GenderID]=${serviceParameters.GenderID},
  [CityID]=${serviceParameters.CityID},
  [CustomerNo]='${serviceParameters.CustomerNo}',
  [IncomeTypeID]=${serviceParameters.IncomeTypeID},
  UpdateDate = GETDATE()
  WHERE CustomerID = ${serviceParameters.CustomerID}`;
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

exports.putVisit = function (callback) {
  var FUNCTIONNAME = "putVisit";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Visit SET 
  VisitDate = '${serviceParameters.VisitDate}', 
  CustomerID = '${serviceParameters.CustomerID}', 
  ProjectID = '${serviceParameters.ProjectID}', 
  Notes = '${serviceParameters.Notes}', 
  UpdateDate = GETDATE()
  WHERE VisitID = ${serviceParameters.VisitID}`;

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

exports.deleteCustomer = function (callback) {
  var FUNCTIONNAME = "deleteCustomer";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM Customer 
  WHERE CustomerID = ${serviceParameters.CustomerID}`;
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

exports.deleteVisit = function (callback) {
  var FUNCTIONNAME = "deleteVisit";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM Visit 
  WHERE VisitID = ${serviceParameters.VisitID}`;
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

exports.deleteSale = function (callback) {
  var FUNCTIONNAME = "deleteSale";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE FROM Sale 
  WHERE SaleID = ${serviceParameters.SaleID}`;
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
