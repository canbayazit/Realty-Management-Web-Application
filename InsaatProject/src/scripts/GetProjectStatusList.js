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

function GetProjectStatusList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [projectStatusName, setProjectStatusName] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();

  const btnDelete = async (projectStatusID) => {
    let text = window.confirm("Silmek istediğinize emin misiniz?");

    if (text) {
      let request = {
        data: { ProjectStatusID: projectStatusID },
      };
      const response = await axios.delete(
        myLink.deleteProjectStatusLink,
        request
      );

      if (response.status === 200 || 201) {
        setOpen(true);
        setOpen(false);
        window.alert("Silme işlemi başarılı!");
        console.info("Veriler silindi.");
        console.log(response);
      } else {
        window.alert("Bu veri silinemez!!");
        console.info("Başarısız!");
        console.log(response);
      }
    } else {
      window.alert("Silme işlemi iptal edildi!");
      console.info("İptal!");
    }
  };

  const btnSave = async () => {
    let request = {
      ProjectStatusName: projectStatusName,
      ProjectStatusID: searchParam.get("id"),
    };

    const response = await axios.put(myLink.putProjectStatusLink, request);

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

  const btnSave2 = async () => {
    let request = {
      ProjectStatusName: projectStatusName,
    };

    const response = await axios.post(myLink.postProjectStatusLink, request);

    if (response.data.status === 200 || 201) {
      window.alert("Başarıyla eklendi!");
      console.log("Request Verileri:", request);
      handleToClose2();
    } else {
      window.alert("Başarısız!");
      handleToClose2();
    }
  };
  const handleClickToOpen2 = () => {
    setOpen2(true);
  };

  const handleToClose2 = () => {
    setOpen2(false);
  };

  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getProjectStatusLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].ProjectStatusTable);

    if (myArrayData.length != 0) {
      setProjectStatusName(
        document.getElementById("txtProjectStatusName").value
      );
    }
  }, [open, open2]);

  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.ProjectStatusID}>
          <td style={{ width: "30%" }} className="highlight">
            <div className="success"></div>
            <Link to="#">{item.ProjectStatusName} </Link>
          </td>
          <td>
            <Link
              to={`?id=${item.ProjectStatusID}`}
              className="btn default btn-xs purple"
              onClick={handleClickToOpen}
            >
              <i className="fa fa-edit" /> GÜNCELLE
            </Link>
            <Link
              to="#"
              className="btn default btn-xs black"
              onClick={() => btnDelete(item.ProjectStatusID)}
            >
              <i className="fa fa-trash-o" /> SİL
            </Link>
          </td>
        </tr>
      ))}
      <tr>
        <td colSpan={2} align="center">
          <Link
            to="#"
            className="btn default btn-xs green"
            onClick={handleClickToOpen2}
          >
            <i className="fa fa-edit" /> Ekle
          </Link>
        </td>
      </tr>

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
                  PROJE DURUMUNU GÜNCELLE
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
                    <b>Proje Durumu</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.ProjectStatusID == searchParam.get("id")
                      )
                      .map((item2) => item2.ProjectStatusName)}
                    type="text"
                    className="form-control"
                    placeholder="Proje Durumu Giriniz..."
                    name="txtProjectStatusName"
                    id="txtProjectStatusName"
                    onChange={(e) => setProjectStatusName(e.target.value)}
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
                    Güncelle
                  </button>
                </DialogActions>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Dialog fullWidth open={open2} onClose={handleToClose2}>
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
                  YENİ PROJE DURUMU EKLE
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
                    <b>Proje Durumu</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Proje Durumu Giriniz..."
                    name="txtProjectStatusName"
                    id="txtProjectStatusName"
                    onChange={(e) => setProjectStatusName(e.target.value)}
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
                    onClick={handleToClose2}
                  >
                    Vazgeç
                  </button>
                  <button
                    type="button"
                    className="btn green"
                    name="btnSubmit"
                    id="btnSubmit"
                    onClick={() => btnSave2()}
                  >
                    Ekle
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

export default GetProjectStatusList;
