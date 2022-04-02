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

function GetCustomerList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [myArrayData2, setMyArrayData2] = useState([]);
  const [myArrayData3, setMyArrayData3] = useState([]);
  const [myArrayData4, setMyArrayData4] = useState([]);
  const [myArrayData5, setMyArrayData5] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const [GSM, setGSM] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerSurname, setCustomerSurname] = useState("");
  const [TC, setTC] = useState("");
  const [eMail, setEMail] = useState("");
  const [address, setAddress] = useState("");
  const [genderID, setGenderID] = useState("");
  const [flatTypeID, setFlatTypeID] = useState("");
  const [cityID, setCityID] = useState("");
  const [customerNo, setCustomerNo] = useState("");
  const [incomeTypeID, setIncomeTypeID] = useState("");

  const [open, setOpen] = useState(false);

  const btnSave = async () => {
    let request = {
      CustomerName: customerName,
      CustomerSurname: customerSurname,
      GSM: GSM,
      BirthDate: birthDate,
      TC: TC,
      EMail: eMail,
      Address: address,
      GenderID: genderID,
      CityID: cityID,
      CustomerNo: customerNo,
      IncomeTypeID: incomeTypeID,
      CustomerID: searchParam.get("id"),
    };

    const response = await axios.put(myLink.putCustomerLink, request);

    if (response.data.status === 200 || 201) {
      window.alert("Başarıyla güncellendi!");
      handleToClose();
    } else {
      window.alert("Başarısız!");
      handleToClose();
    }
  };

  const handleClickToOpen = async () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");

    const response = await axios.get(myLink.getCustomerLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].CustomersTable);

    const response2 = await axios.get(myLink.getCityLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData2(response2.data[0].CitiesTable);

    const response3 = await axios.get(myLink.getIncomeTypeLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData3(response3.data[0].IncomeTypesTable);

    const response4 = await axios.get(myLink.getFlatTypeLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData4(response4.data[0].FlatsTypeTable);

    const response5 = await axios.get(myLink.getGenderLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData5(response5.data[0].GendersTable);

    if (myArrayData.length != 0) {
      setGSM(document.getElementById("txtGSM").value);
      setBirthDate(document.getElementById("dBirthDate").value);
      setCustomerName(document.getElementById("txtCustomerName").value);
      setCustomerSurname(document.getElementById("txtCustomerSurname").value);
      setTC(document.getElementById("txtTC").value);
      setEMail(document.getElementById("txtEMail").value);
      setAddress(document.getElementById("txtAddress").value);
      setGenderID(document.getElementById("cmbGenderName").value);
      setFlatTypeID(document.getElementById("cmbFlatTypeName").value);
      setCityID(document.getElementById("cmbCityName").value);
      setCustomerNo(document.getElementById("txtCustomerNo").value);
      setIncomeTypeID(document.getElementById("cmbIncomeTypeName").value);
    }
  }, [open]);
  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.CustomerID}>
          <td>
            <Link to={`?id=${item.CustomerID}`} onClick={handleClickToOpen}>
              {item.CustomerName} {item.CustomerSurname}
            </Link>
          </td>
          <td>{item.GSM}</td>
          <td>{item.BirthDate}</td>
          <td>{item.TC}</td>
          <td>{item.EMail}</td>
          <td>{item.Address}</td>
          <td>{item.GenderName}</td>
          <td>VERİ EKSİK</td>
          <td>{item.CityName}</td>
          <td>{item.CustomerNo}</td>
          <td>{item.IncomeTypeName}</td>
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
                    <b>Müşteri Adı</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.CustomerID == searchParam.get("id")
                      )
                      .map((item2) => item2.CustomerName)}
                    type="text"
                    className="form-control"
                    placeholder="Müşterinin Adı"
                    name="txtCustomerName"
                    id="txtCustomerName"
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Müşteri Soyadı</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.CustomerID == searchParam.get("id")
                      )
                      .map((item2) => item2.CustomerSurname)}
                    type="text"
                    className="form-control"
                    name="txtCustomerSurname"
                    id="txtCustomerSurname"
                    onChange={(e) => setCustomerSurname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>GSM</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.CustomerID == searchParam.get("id")
                      )
                      .map((item2) => item2.GSM)}
                    type="text"
                    className="form-control"
                    placeholder="0(5**)"
                    name="txtGSM"
                    id="txtGSM"
                    onChange={(e) => setGSM(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Doğum Tarihi</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.CustomerID == searchParam.get("id")
                      )
                      .map((item2) => item2.BirthDate)}
                    type="date"
                    className="form-control"
                    placeholder="YYYY--AA--GG"
                    name="dBirthDate"
                    id="dBirthDate"
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>TC</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.CustomerID == searchParam.get("id")
                      )
                      .map((item2) => item2.TC)}
                    type="text"
                    className="form-control"
                    name="txtTC"
                    id="txtTC"
                    onChange={(e) => setTC(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>E-Mail</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.CustomerID == searchParam.get("id")
                      )
                      .map((item2) => item2.EMail)}
                    type="text"
                    className="form-control"
                    name="txtEMail"
                    id="txtEMail"
                    onChange={(e) => setEMail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Adres</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter(
                        (item) => item.CustomerID == searchParam.get("id")
                      )
                      .map((item2) => item2.Address)}
                    type="textarea"
                    className="form-control"
                    name="txtAddress"
                    id="txtAddress"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Cinsiyet</b>
                  </label>
                  <select
                    className="form-control"
                    name="cmbGenderName"
                    id="cmbGenderName"
                    onChange={(e) => setGenderID(e.target.value)}
                  >
                    <option value>Lütfen seçiniz...</option>
                    {myArrayData5.map((item) => (
                      <option
                        key={item.GenderID}
                        value={item.GenderID}
                        selected={
                          myArrayData
                            .filter(
                              (item2) =>
                                item2.CustomerID == searchParam.get("id")
                            )
                            .map((item3) => item3.GenderID) == item.GenderID
                        }
                      >
                        {item.GenderName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <b>İlgilendiği Daireler</b>
                  </label>
                  <select
                    className="form-control"
                    name="cmbFlatTypeName"
                    id="cmbFlatTypeName"
                    onChange={(e) => setFlatTypeID(e.target.value)}
                  >
                    <option value>Lütfen seçiniz...</option>
                    {myArrayData4.map((item) => (
                      <option
                        key={item.FlatTypeID}
                        value={item.FlatTypeID}
                        selected={
                          myArrayData
                            .filter(
                              (item2) =>
                                item2.CustomerID == searchParam.get("id")
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
                    <b>Şehir</b>
                  </label>
                  <select
                    className="form-control"
                    name="cmbCityName"
                    id="cmbCityName"
                    onChange={(e) => setCityID(e.target.value)}
                  >
                    <option defaultValue="">Lütfen seçiniz...</option>
                    {myArrayData2.map((item) => (
                      <option
                        key={item.CityID}
                        value={item.CityID}
                        selected={
                          myArrayData
                            .filter(
                              (item2) =>
                                item2.CustomerID == searchParam.get("id")
                            )
                            .map((item3) => item3.CityID) == item.CityID
                        }
                      >
                        {item.CityName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <b>Müşteri Numarası</b>
                  </label>
                  <input
                    className="form-control"
                    name="txtCustomerNo"
                    id="txtCustomerNo"
                    onChange={(e) => setCustomerNo(e.target.value)}
                    defaultValue={myArrayData
                      .filter(
                        (item2) => item2.CustomerID == searchParam.get("id")
                      )
                      .map((item3) => item3.CustomerNo)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Gelir Durumu</b>
                  </label>
                  <select
                    className="form-control"
                    name="cmbIncomeTypeName"
                    id="cmbIncomeTypeName"
                    onChange={(e) => setIncomeTypeID(e.target.value)}
                  >
                    <option value>Lütfen seçiniz...</option>
                    {myArrayData3.map((item) => (
                      <option
                        key={item.IncomeTypeID}
                        value={item.IncomeTypeID}
                        selected={
                          myArrayData
                            .filter(
                              (item2) =>
                                item2.CustomerID == searchParam.get("id")
                            )
                            .map((item3) => item3.IncomeTypeID) ==
                          item.IncomeTypeID
                        }
                      >
                        {item.IncomeTypeName}
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

export default GetCustomerList;
