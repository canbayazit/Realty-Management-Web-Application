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

function GetFlatList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [myArrayData3, setMyArrayData3] = useState([]);
  const [myArrayData4, setMyArrayData4] = useState([]);
  const [myArrayData5, setMyArrayData5] = useState([]);
  const [flatNo, setFlatNo] = useState("");
  const [projectID, setProjectID] = useState("");
  const [flatTypeID, setFlatTypeID] = useState("");
  const [flatStatusID, setFlatStatusID] = useState("");
  const [price, setPrice] = useState("");

  const [searchParam, setSearchParam] = useSearchParams();

  const [open, setOpen] = useState(false);

  const btnSave = async () => {
    let request = {
      FlatNo: flatNo,
      ProjectID: projectID,
      FlatTypeID: flatTypeID,
      FlatStatusID: flatStatusID,
      Price: price,
      FlatID: searchParam.get("id"),
    };

    const response = await axios.put(myLink.putFlatLink, request);

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
    const response2 = await axios.get(myLink.getFlatLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response2.data[0].FlatsTable);

    const response3 = await axios.get(myLink.getFlatTypeLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData3(response3.data[0].FlatsTypeTable);

    const response4 = await axios.get(myLink.getFlatStatusLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData4(response4.data[0].FlatStatusTable);

    const response5 = await axios.get(myLink.getProjectLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData5(response5.data[0].ProjectsTable);

    if (myArrayData.length != 0) {
      document.getElementById("txtFlatNo").value = myArrayData
        .filter((item) => item.FlatID == searchParam.get("id"))
        .map((item2) => item2.FlatNo);

      setFlatNo(document.getElementById("txtFlatNo").value);

      document.getElementById("txtProjectName").value = myArrayData
        .filter((item) => item.FlatID == searchParam.get("id"))
        .map((item2) => item2.ProjectID);

      setProjectID(document.getElementById("txtProjectName").value);

      document.getElementById("cmbFlat").value = myArrayData
        .filter((item) => item.FlatID == searchParam.get("id"))
        .map((item2) => item2.FlatTypeID);

      setFlatTypeID(document.getElementById("cmbFlat").value);

      document.getElementById("cmbFlatStatus").value = myArrayData
        .filter((item) => item.FlatID == searchParam.get("id"))
        .map((item2) => item2.FlatStatusID);

      setFlatStatusID(document.getElementById("cmbFlatStatus").value);

      document.getElementById("cmbFlatPrice").value = myArrayData
        .filter((item) => item.FlatID == searchParam.get("id"))
        .map((item2) => item2.Price);

      setPrice(document.getElementById("cmbFlatPrice").value);
    }
  }, [open]);
  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.FlatID}>
          <td>
            <Link to={`?id=${item.FlatID}`} onClick={() => handleClickToOpen()}>
              {item.FlatNo}
            </Link>
          </td>
          <td>{item.ProjectName}</td>
          <td>{item.FlatTypeName}</td>
          <td>{item.FlatStatusName}</td>
          <td>{item.Price}</td>
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
                    <b>Daire No</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter((item) => item.FlatID == searchParam.get("id"))
                      .map((item2) => item2.FlatNo)}
                    type="text"
                    className="form-control"
                    placeholder="Daire No..."
                    name="txtFlatNo"
                    id="txtFlatNo"
                    onChange={(e) => setFlatNo(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Proje Adı</b>
                  </label>
                  <select
                    className="form-control"
                    name="txtProjectName"
                    id="txtProjectName"
                    onChange={(e) => setProjectID(e.target.value)}
                  >
                    <option defaultValue="">Lütfen seçiniz...</option>
                    {myArrayData5.map((item) => (
                      <option
                        key={item.ProjectID}
                        value={item.ProjectID}
                        selected={
                          myArrayData
                            .filter(
                              (item2) => item2.FlatID == searchParam.get("id")
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
                    <b>Oda Sayısı</b>
                  </label>
                  <select
                    className="form-control"
                    name="cmbFlat"
                    id="cmbFlat"
                    onChange={(e) => setFlatTypeID(e.target.value)}
                  >
                    <option defaultValue="">Lütfen seçiniz...</option>
                    {myArrayData3.map((item) => (
                      <option
                        key={item.FlatID}
                        value={item.FlatTypeID}
                        selected={
                          myArrayData
                            .filter(
                              (item2) => item2.FlatID == searchParam.get("id")
                            )
                            .map((item3) => item3.FlatTypeID) == item.FlatTypeID
                        }
                      >
                        {item.FlatTypeName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <b>Daire Durumu</b>
                  </label>
                  <select
                    className="form-control"
                    name="cmbFlatStatus"
                    id="cmbFlatStatus"
                    value={flatStatusID}
                    onChange={(e) => setFlatStatusID(e.target.value)}
                  >
                    <option value>Lütfen seçiniz...</option>
                    {myArrayData4.map((item) => (
                      <option key={item.FlatStatusID} value={item.FlatStatusID}>
                        {item.FlatStatusName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <b>Daire Fiyatı</b>
                  </label>
                  <input
                    className="form-control"
                    name="cmbFlatPrice"
                    id="cmbFlatPrice"
                    onChange={(e) => setPrice(e.target.value)}
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

export default GetFlatList;
