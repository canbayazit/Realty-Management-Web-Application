import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import myLink from "./Links";

function GetVisitList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [myArrayData2, setMyArrayData2] = useState([]);
  const [myArrayData3, setMyArrayData3] = useState([]);

  const [projectID, setProjectID] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [notes, setNotes] = useState("");

  const [searchParam, setSearchParam] = useSearchParams();

  const [open, setOpen] = useState(false);

  const btnSave = async () => {
    let request = {
      VisitDate: visitDate,
      CustomerID: customerID,
      ProjectID: projectID,
      Notes: notes,
      VisitID: searchParam.get("id"),
    };

    const response = await axios.put(myLink.putVisitLink, request);

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
    const response = await axios.get(myLink.getVisitLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].VisitsTable);

    const response2 = await axios.get(myLink.getProjectLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData2(response2.data[0].ProjectsTable);

    const response3 = await axios.get(myLink.getCustomerLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData3(response3.data[0].CustomersTable);

    if (myArrayData.length != 0) {
      document.getElementById("dVisitDate").value = myArrayData
        .filter((item) => item.VisitID == searchParam.get("id"))
        .map((item2) => item2.VisitDate);

      setVisitDate(document.getElementById("dVisitDate").value);

      document.getElementById("cmbCustomerID").value = myArrayData
        .filter((item) => item.VisitID == searchParam.get("id"))
        .map((item2) => item2.CustomerID);

      setCustomerID(document.getElementById("cmbCustomerID").value);

      document.getElementById("txtProjectName").value = myArrayData
        .filter((item) => item.VisitID == searchParam.get("id"))
        .map((item2) => item2.ProjectID);

      setProjectID(document.getElementById("txtProjectName").value);

      document.getElementById("txtNotes").value = myArrayData
        .filter((item) => item.VisitID == searchParam.get("id"))
        .map((item2) => item2.Notes);

      setNotes(document.getElementById("txtNotes").value);
    }
  }, [open]);
  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.VisitID}>
          <td>
            <Link to={`?id=${item.VisitID}`} onClick={handleClickToOpen}>
              {item.VisitDate}
            </Link>
          </td>
          <td>
            {item.CustomerName} {item.CustomerSurname}
          </td>
          <td>{item.ProjectName}</td>
          <td>{item.Notes}</td>
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
                    <b>Ziyaret Tarihi</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter((item) => item.VisitID == searchParam.get("id"))
                      .map((item2) => item2.VisitDate)}
                    type="date"
                    className="form-control"
                    placeholder="Ziyaret Tarihi"
                    name="dVisitDate"
                    id="dVisitDate"
                    onChange={(e) => setVisitDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Müşteri Adı ve Soyadı</b>
                  </label>
                  <select
                    className="form-control"
                    name="cmbCustomerID"
                    id="cmbCustomerID"
                    value={customerID}
                    onChange={(e) => setCustomerID(e.target.value)}
                  >
                    <option defaultValue="">Lütfen seçiniz...</option>
                    {myArrayData3.map((item) => (
                      <option
                        key={item.CustomerID}
                        value={item.CustomerID}
                        selected={
                          myArrayData
                            .filter(
                              (item2) => item2.VisitID == searchParam.get("id")
                            )
                            .map((item3) => item3.ProjectID) == item.ProjectID
                        }
                      >
                        {item.CustomerName} {item.CustomerSurname}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <b>Proje Adı</b>
                  </label>
                  <select
                    className="form-control"
                    name="txtProjectName"
                    id="txtProjectName"
                    value={projectID}
                    onChange={(e) => setProjectID(e.target.value)}
                  >
                    <option defaultValue="">Lütfen seçiniz...</option>
                    {myArrayData2.map((item) => (
                      <option
                        key={item.ProjectID}
                        value={item.ProjectID}
                        selected={
                          myArrayData
                            .filter(
                              (item2) => item2.VisitID == searchParam.get("id")
                            )
                            .map((item3) => item3.ProjectID) == item.ProjectID
                        }
                      >
                        {item.ProjectName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <b>Notlar</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter((item) => item.VisitID == searchParam.get("id"))
                      .map((item2) => item2.Notes)}
                    type="textarea"
                    className="form-control"
                    name="txtNotes"
                    id="txtNotes"
                    onChange={(e) => setNotes(e.target.value)}
                  />
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

export default GetVisitList;
