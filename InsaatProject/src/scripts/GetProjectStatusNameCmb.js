import React, { useState, useEffect } from "react";
import axios from "axios";
import myLink from "./Links";

function GetProjectStatusNameCmb({ setProjectStatusID, projectStatusID }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getProjectStatusLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].ProjectStatusTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbStatus"
      id="cmbStatus"
      onChange={(e) => setProjectStatusID(e.target.value)}
      value={projectStatusID}
    >
      <option value>Lütfen seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.ProjectStatusID} value={item.ProjectStatusID}>
          {item.ProjectStatusName}
        </option>
      ))}
    </select>
  );
}

export default GetProjectStatusNameCmb;
