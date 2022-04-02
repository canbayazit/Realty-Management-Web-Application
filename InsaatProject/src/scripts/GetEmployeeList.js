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

function GetEmployeeList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [open, setOpen] = useState(false);
  const [employeeName, setEmployeeName] = useState();
  const [employeeSurname, setEmployeeSurname] = useState();
  const [searchParam, setSearchParam] = useSearchParams();

  const btnSave = async () => {
    let request = {
      EmployeeName: employeeName,
      EmployeeSurname: employeeSurname,
      EmployeeID: searchParam.get("id"),
    };

    const response = await axios.put(myLink.putEmployeeLink, request);

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
    const response = await axios.get(myLink.getEmployeeLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].EmployeesTable);

    if (myArrayData.length != 0) {
      document.getElementById("txtEmployeeName").value = myArrayData
        .filter((item) => item.EmployeeID == searchParam.get("id"))
        .map((item2) => item2.EmployeeName);

      setEmployeeName(document.getElementById("txtEmployeeName").value);

      document.getElementById("txtEmployeeSurname").value = myArrayData
        .filter((item) => item.EmployeeID == searchParam.get("id"))
        .map((item2) => item2.EmployeeSurname);

      setEmployeeSurname(document.getElementById("txtEmployeeSurname").value);
    }
  }, [open]);
  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.EmployeeID}>
          <td>
            <Link to={`?id=${item.EmployeeID}`} onClick={handleClickToOpen}>
              {item.EmployeeName} {item.EmployeeSurname}
            </Link>
          </td>
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
                    <b>Çalışan Adı</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.EmployeeID == searchParam.get("id")
                      )
                      .map((item2) => item2.EmployeeName)}
                    type="text"
                    className="form-control"
                    placeholder="Projenin Adı"
                    name="txtEmployeeName"
                    id="txtEmployeeName"
                    onChange={(e) => setEmployeeName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Çalışan Soyadı</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.EmployeeID == searchParam.get("id")
                      )
                      .map((item2) => item2.EmployeeSurname)}
                    type="text"
                    className="form-control"
                    name="txtEmployeeSurname"
                    id="txtEmployeeSurname"
                    onChange={(e) => setEmployeeSurname(e.target.value)}
                    defaultValue={myArrayData
                      .filter(
                        (item2) => item2.EmployeeID == searchParam.get("id")
                      )
                      .map((item3) => item3.EmployeeSurname)}
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

export default GetEmployeeList;
