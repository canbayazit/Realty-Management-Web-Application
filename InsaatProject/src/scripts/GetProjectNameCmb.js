import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetProjectNameCmb({ setProjectID, projectID }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getProjectLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].ProjectsTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbProjectID"
      id="cmbProjectID"
      onChange={(e) => setProjectID(e.target.value)}
      value={projectID}
    >
      <option value>Lütfen seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.ProjectID} value={item.ProjectID}>
          {item.ProjectName}
        </option>
      ))}
    </select>
  );
}

export default GetProjectNameCmb;
