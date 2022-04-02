import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetCustomerNameCmb({ setCustomerID, customerID }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getCustomerLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].CustomersTable);
  }, []);
  return (
    <select
      className="form-control"
      name="txtEmployeeName"
      id="txtEmployeeName"
      onChange={(e) => setCustomerID(e.target.value)}
      value={customerID}
    >
      <option value>Lütfen seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.CustomerID} value={item.CustomerID}>
          {item.CustomerName} {item.CustomerSurname}
        </option>
      ))}
    </select>
  );
}

export default GetCustomerNameCmb;
