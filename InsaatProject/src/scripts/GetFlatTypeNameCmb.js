import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetFlatTypeNameCmb({ setFlatType, flatType }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getFlatTypeLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].FlatsTypeTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbFlatType"
      id="cmbFlatType"
      onChange={(e) => setFlatType(e.target.value)}
      value={flatType}
    >
      <option value>Lütfen seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.FlatTypeID} value={item.FlatTypeID}>
          {item.FlatTypeName}
        </option>
      ))}
    </select>
  );
}

export default GetFlatTypeNameCmb;
