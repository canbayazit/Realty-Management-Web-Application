import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetEmployeeNameCmb({ setEmployeeID, employeeID }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getEmployeeLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].EmployeesTable);
  }, []);
  return (
    <select
      className="form-control"
      name="txtEmployeeName"
      id="txtEmployeeName"
      onChange={(e) => setEmployeeID(e.target.value)}
      value={employeeID}
    >
      <option value>Lütfen seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.EmployeeID} value={item.EmployeeID}>
          {item.EmployeeName} {item.EmployeeSurname}
        </option>
      ))}
    </select>
  );
}

export default GetEmployeeNameCmb;
