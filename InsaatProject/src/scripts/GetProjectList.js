import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useSearchParams } from "react-router-dom";
import myLink from "./Links";

function GetProjectList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [myArrayData2, setMyArrayData2] = useState([]);
  const [myArrayData3, setMyArrayData3] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [open, setOpen] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [cityID, setCityID] = useState("");
  const [projectStatusID, setProjectStatusID] = useState("");

  const btnSave = async () => {
    let request = {
      ProjectName: projectName,
      CityID: cityID,
      ProjectStatusID: projectStatusID,
      ProjectID: searchParam.get("id"),
    };

    const response = await axios.put(myLink.putProjectLink, request);

    if (response.status === 200 || 201) {
      window.alert("Başarıyla güncellendi!");
      handleToClose();
    } else {
      window.alert("Başarısız!");
      handleToClose();
    }
  };

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getProjectLink, {
      params: { myJwt: _myJwt },
    });
    setMyArrayData(response.data[0].ProjectsTable);

    const response2 = await axios.get(myLink.getCityLink, {
      params: { myJwt: _myJwt },
    });
    setMyArrayData2(response2.data[0].CitiesTable);

    const response3 = await axios.get(myLink.getProjectStatusLink, {
      params: { myJwt: _myJwt },
    });
    setMyArrayData3(response3.data[0].ProjectStatusTable);

    if (myArrayData.length != 0) {
      document.getElementById("txtName").value = myArrayData
        .filter((item) => item.ProjectID == searchParam.get("id"))
        .map((item2) => item2.ProjectName);

      setProjectName(document.getElementById("txtName").value);

      document.getElementById("cmbCity").value = myArrayData
        .filter((item2) => item2.ProjectID == searchParam.get("id"))
        .map((item3) => item3.CityID);

      setCityID(document.getElementById("cmbCity").value);

      document.getElementById("cmbStatus").value = myArrayData
        .filter((item2) => item2.ProjectID == searchParam.get("id"))
        .map((item3) => item3.ProjectStatusID);

      setProjectStatusID(document.getElementById("cmbStatus").value);
    }
  }, [open]);

  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.ProjectID}>
          <td>
            <Link onClick={handleClickToOpen} to={`?id=${item.ProjectID}`}>
              {item.ProjectName}
            </Link>
          </td>
          <td>{item.CityName}</td>
          <td>{item.ProjectStatusName}</td>
          <td>{item.CreationDate}</td>
        </tr>
      ))}

      <Dialog fullWidth open={open} onClose={handleToClose}>
        <center>
          <DialogTitle>
            {
              <div
                className="caption"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                }}
              >
                <i className="fa fa-cogs font-green-sharp" />
                &nbsp;
                <span className="caption-subject font-green-sharp bold uppercase">
                  TÜM KAYITLAR
                </span>
              </div>
            }
          </DialogTitle>
        </center>
        <DialogContent>
          <DialogContentText>
            <form role="form ">
              <div className="form body ">
                <div className="form-group">
                  <label>
                    <b>Proje Adı</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Projenin Adı"
                    name="txtName"
                    id="txtName"
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Şehir</b>
                  </label>
                  <select
                    className="form-control"
                    name="cmbCity"
                    id="cmbCity"
                    onChange={(e) => setCityID(e.target.value)}
                  >
                    <option defaultValue="">Lütfen seçiniz...</option>
                    {myArrayData2.map((item) => (
                      <option key={item.CityID} value={item.CityID}>
                        {item.CityName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <b>Proje Durumu</b>
                  </label>
                  <select
                    className="form-control"
                    name="cmbStatus"
                    id="cmbStatus"
                    onChange={(e) => setProjectStatusID(e.target.value)}
                  >
                    <option value>Lütfen seçiniz...</option>
                    {myArrayData3.map((item) => (
                      <option
                        key={item.ProjectStatusID}
                        value={item.ProjectStatusID}
                      >
                        {item.ProjectStatusName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-actions center">
                <DialogActions>
                  <button
                    type="button"
                    className="btn default"
                    name="btnCancel"
                    id="btnCancel"
                    onClick={handleToClose}
                  >
                    Vazgeç
                  </button>
                  <button
                    type="button"
                    className="btn green"
                    name="btnSubmit"
                    id="btnSubmit"
                    onClick={() => btnSave()}
                  >
                    Kaydet
                  </button>
                </DialogActions>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </tbody>
  );
}

export default GetProjectList;
