import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetFlatNoCmb({ setFlatNo, flatNo }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getFlatLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].FlatsTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbFlatNo"
      id="cmbFlatNo"
      onChange={(e) => setFlatNo(e.target.value)}
      value={flatNo}
    >
      <option defaultValue="">Lütfen seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.FlatID} value={item.FlatID}>
          {item.FlatNo}
        </option>
      ))}
    </select>
  );
}

export default GetFlatNoCmb;
