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

function GetCityList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();

  const btnDelete = async (cityID) => {
    let text = window.confirm("Silmek istediğinizden emin misiniz ?");

    if (text) {
      let request = 
      {
        data: { CityID: cityID },
      };
      const response = await axios.delete(myLink.deleteCityLink, request);

      if (response.status === 200 || 201) 
      {
        setOpen(true);
        setOpen(false);
        window.alert("Silme işlemi başarıyla gerçekleşti!");
        console.info("Veri silme işlemi gerçekleşti!");
        console.log(response);
      } 
      else
       {
        window.alert("Uyarı ! Bu veri silinemez!!");
        console.info("Başarısız!");
        console.log(response);
      }
    } 
    else 
    {
      window.alert("Silme işlemi iptal edildi!");
      console.info("İptal!");
    }
  };

  const btnSave = async () => {
    let request = 
    {
      CityName: cityName,
      CityID: searchParam.get("id"),
    };

    const response = await axios.put(myLink.putCityLink, request);

    if (response.status === 200 || 201) 
    {
      window.alert("Başarıyla güncellendi!");
      handleToClose();
    } 
    else 
    {
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
      CityName: cityName,
    };

    const response = await axios.post(myLink.postCityLink, request);

    if (response.status === 200 || 201) {
      window.alert(response.data[0].result);
      console.log("Request Verileri:", request);
      handleToClose2();
    } 
    else 
    {
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

  useEffect(async () => 
  {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getCityLink, 
      {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].CitiesTable);

    if (myArrayData.length != 0) 
    {
      setCityName(document.getElementById("txtCityName").value);
    }
  }, [open, open2]);
  
  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.CityID}>
          <td className="highlight">
            <div className="success"></div>
            <Link to="#">{item.CityName}</Link>
          </td>
          <td>
            <Link
              to={`?id=${item.CityID}`}
              className="btn default btn-xs purple"
              onClick={handleClickToOpen}
            >
              <i className="fa fa-edit" /> GÜNCELLE
            </Link>
            <Link
              to="#"
              className="btn default btn-xs black"
              onClick={() => btnDelete(item.CityID)}
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
                  ŞEHRİ GÜNCELLE
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
                    <b>Şehir</b>
                  </label>
                  <input
                    defaultValue={myArrayData
                      .filter((item) => item.CityID == searchParam.get("id"))
                      .map((item2) => item2.CityName)}
                    type="text"
                    className="form-control"
                    placeholder="Cinsiyet Giriniz..."
                    name="txtCityName"
                    id="txtCityName"
                    onChange={(e) => setCityName(e.target.value)}
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
                  YENİ ŞEHİR EKLE
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
                    <b>Şehir</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Şehir Giriniz..."
                    name="txtGenderName"
                    id="txtGenderName"
                    onChange={(e) => setCityName(e.target.value)}
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

export default GetCityList;
