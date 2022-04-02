import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetFlatStatusNameCmb({ setFlatStatus, flatStatus }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getFlatStatusLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].FlatStatusTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbFlatStatus"
      id="cmbFlatStatus"
      onChange={(e) => setFlatStatus(e.target.value)}
      value={flatStatus}
    >
      <option value>Lütfen seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.FlatStatusID} value={item.FlatStatusID}>
          {item.FlatStatusName}
        </option>
      ))}
    </select>
  );
}

export default GetFlatStatusNameCmb;
