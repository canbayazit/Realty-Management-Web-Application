import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetCityNameCmb({ setCityID, cityID }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getCityLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].CitiesTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbCity"
      id="cmbCity"
      onChange={(e) => setCityID(e.target.value)}
      value={cityID}
    >
      <option defaultValue="">Lütfen seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.CityID} value={item.CityID}>
          {item.CityName}
        </option>
      ))}
    </select>
  );
}

export default GetCityNameCmb;
