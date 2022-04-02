import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetIncomeTypeNameCmb({ setIncomeType, incomeType }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getIncomeTypeLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].IncomeTypesTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbIncomeType"
      id="cmbIncomeType"
      onChange={(e) => setIncomeType(e.target.value)}
      value={incomeType}
    >
      <option defaultValue>Lütfen seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.IncomeTypeID} value={item.IncomeTypeID}>
          {item.IncomeTypeName}
        </option>
      ))}
    </select>
  );
}

export default GetIncomeTypeNameCmb;
