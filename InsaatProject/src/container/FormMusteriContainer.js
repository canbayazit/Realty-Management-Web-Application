import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import GetCityNameCmb from "../scripts/GetCityNameCmb";
import GetFlatTypeNameChk from "../scripts/GetFlatTypeNameChk";
import GetGenderNameRadio from "../scripts/GetGenderNameRadio";
import GetIncomeTypeNameCmb from "../scripts/GetIncomeTypeNameCmb";
import myLink from "../scripts/Links";

function FormMusteriContainer() {
  const [customerName, setCustomerName] = useState("");
  const [customerSurname, setCustomerSurname] = useState("");
  const [GSM, setGSM] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [TC, setTC] = useState("");
  const [eMail, setEMail] = useState("");
  const [address, setAddress] = useState("");
  const [genderID, setGenderID] = useState("");
  const [cityID, setCityID] = useState("");
  const [customerNo, setCustomerNo] = useState("");
  const [incomeType, setIncomeType] = useState("");
  const [_flatTypeID, _setFlatTypeID] = useState([]);

  const btnAdd = async (typeID) => {
    if (_flatTypeID.includes(typeID)) {
      let index = _flatTypeID.indexOf(typeID);
      _flatTypeID.splice(index, 1);
      console.warn("Flat:", _flatTypeID);
      console.error("Length:", _flatTypeID.length);
    } else {
      _flatTypeID.push(typeID);
      console.warn("Flat:", _flatTypeID);
      console.error("Length:", _flatTypeID.length);
    }
  };

  const btnSave = async () => {
    
    //console.log("...", _flatTypeID);

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
      IncomeTypeID: incomeType,
      FlatTypeID: _flatTypeID,
    };

    const response = await axios.post(myLink.postCustomerLink, request);

    if (response.status === 200 || 201) {
      setCustomerName("");
      setCustomerSurname("");
      setGSM("");
      setBirthDate("");
      setTC("");
      setEMail("");
      setAddress("");
      setGenderID("");
      setCityID("");
      setCustomerNo("");
      setIncomeType("");
      window.alert("İşlem başarıyla tamamlandı!");
      console.warn(request);
    } 
    else 
    {
      window.alert("Ekleme işlemi başarısız!");
      console.warn(request);
    }
  };

  return (
    <div>
      {/*
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.4
Version: 4.0.1
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
*/}
      {/*[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]*/}
      {/*[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]*/}
      {/*[if !IE]><!*/}
      {/*<![endif]*/}
      {/* BEGIN HEAD */}

      {/* END HEADER */}
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            <div className="page-title">
              <h1> Müşteri </h1>
            </div>
            {/* END PAGE TITLE */}
            {/* BEGIN PAGE TOOLBAR */}
            <div className="page-toolbar">
              {/* BEGIN THEME PANEL */}
              <div className="btn-group btn-theme-panel">
                <Link
                  to="#"
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="icon-settings" />
                </Link>
                <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <h3>THEME COLORS</h3>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-default"
                              data-theme="default"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Default</span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-hoki"
                              data-theme="blue-hoki"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Hoki
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-steel"
                              data-theme="blue-steel"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Steel
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-orange"
                              data-theme="yellow-orange"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Orange</span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-crusta"
                              data-theme="yellow-crusta"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Yellow Crusta
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-green-haze"
                              data-theme="green-haze"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Green Haze
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-sunglo"
                              data-theme="red-sunglo"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Sunglo
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-intense"
                              data-theme="red-intense"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Intense
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-plum"
                              data-theme="purple-plum"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Plum
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-studio"
                              data-theme="purple-studio"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Studio
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                      <h3>LAYOUT</h3>
                      <ul className="theme-settings">
                        <li>
                          Theme Style
                          <select
                            className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change theme style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Square corners
                            </option>
                            <option value="rounded">Rounded corners</option>
                          </select>
                        </li>
                        <li>
                          Layout
                          <select
                            className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change layout type"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Boxed
                            </option>
                            <option value="fluid">Fluid</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Style
                          <select
                            className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change top menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Mode
                          <select
                            className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) top menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed">Fixed</option>
                            <option value="not-fixed" selected="selected">
                              Not Fixed
                            </option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Style
                          <select
                            className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change mega menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Mode
                          <select
                            className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) mega menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed" selected="selected">
                              Fixed
                            </option>
                            <option value="not-fixed">Not Fixed</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* END THEME PANEL */}
            </div>
            {/* END PAGE TOOLBAR */}
          </div>
        </div>
        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <Link to="#">Müşteri Yönetimi</Link>
                <i className="fa fa-circle" />
              </li>
              <li>
                <Link to="/FormMusteri">Müşteri</Link>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Yeni Giriş</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-6 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        MÜŞTERİ BİLGİLERİ
                      </span>
                    </div>
                    <div className="tools">
                      <Link to="#" className="collapse"></Link>
                      <Link
                        to="#portlet-config"
                        data-toggle="modal"
                        className="config"
                      ></Link>
                      <Link to="#" className="reload"></Link>
                      <Link to="#" className="remove"></Link>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form role="form">
                      <div className="form-body">
                        <div className="form-group">
                          <label>Müşteri Adı*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Müşterinin Adı"
                            name="txtName"
                            id="txtName"
                            required
                            onChange={(e) => setCustomerName(e.target.value)}
                            value={customerName}
                          />
                        </div>
                        <div className="form-group">
                          <label>Müşteri Soyadı</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Müşterinin Soyadı"
                            name="txtSurname"
                            id="txtSurname"
                            onChange={(e) => setCustomerSurname(e.target.value)}
                            value={customerSurname}
                          />
                        </div>
                        <div className="form-group">
                          <label>GSM</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtGSM"
                            id="txtGSM"
                            onChange={(e) => setGSM(e.target.value)}
                            value={GSM}
                          />
                        </div>
                        <div className="form-group">
                          <label>Doğum Tarihi</label>
                          <input
                            type="date"
                            className="form-control"
                            name="dBirthDate"
                            id="dBirthDate"
                            onChange={(e) => setBirthDate(e.target.value)}
                            value={birthDate}
                          />
                        </div>
                        <div className="form-group">
                          <label>T.C.*</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtTC"
                            id="txtTC"
                            required
                            onChange={(e) => setTC(e.target.value)}
                            value={TC}
                          />
                        </div>
                        <div className="form-group">
                          <label>E-Mail</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtEMail"
                            id="txtEMail"
                            onChange={(e) => setEMail(e.target.value)}
                            value={eMail}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
              </div>
              <div className="col-md-6 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        MÜŞTERİ BİLGİLERİ
                      </span>
                    </div>
                    <div className="tools">
                      <Link to="#" className="collapse"></Link>
                      <Link
                        to="#portlet-config"
                        data-toggle="modal"
                        className="config"
                      ></Link>
                      <Link to="#" className="reload"></Link>
                      <Link to="#" className="remove"></Link>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form role="form">
                      <div className="form-body">
                        <div className="form-group">
                          <label>Adres</label>
                          <textarea
                            className="form-control"
                            name="txtAddress"
                            id="txtAddress"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                          />
                        </div>
                        <div className="form-group">
                          <label>Cinsiyet&nbsp;&nbsp;</label>
                          <GetGenderNameRadio
                            setGenderID={setGenderID}
                            genderID={genderID}
                          />
                        </div>
                        <div className="form-group">
                          <label>İlgilendiği Daireler&nbsp;&nbsp;</label>
                          <GetFlatTypeNameChk btnAdd={btnAdd} />
                        </div>
                        <div className="form-group">
                          <label>Şehir</label>
                          <GetCityNameCmb
                            setCityID={setCityID}
                            cityID={cityID}
                          />
                        </div>
                        <div className="form-group">
                          <label>Müşteri Numarası</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtCustomerNo"
                            id="txtCustomerNo"
                            onChange={(e) => setCustomerNo(e.target.value)}
                            value={customerNo}
                          />
                        </div>
                        <div className="form-group">
                          <label>Gelir Durumu</label>
                          <GetIncomeTypeNameCmb
                            setIncomeType={setIncomeType}
                            incomeType={incomeType}
                          />
                        </div>
                      </div>
                      <div className="form-actions right">
                        <button
                          type="button"
                          className="btn default"
                          name="btnCancel"
                          id="btnCancel"
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
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
              </div>
              <div className="col-md-12 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        KAYIT GEÇMİŞİ
                      </span>
                    </div>
                    <div className="tools">
                      <Link to="#" className="collapse"></Link>
                      <Link
                        to="#portlet-config"
                        data-toggle="modal"
                        className="config"
                      ></Link>
                      <Link to="#" className="reload"></Link>
                      <Link to="#" className="remove"></Link>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form role="form">
                      <div className="form-body">
                        <div className="form-group">
                          <label>
                            <strong>Oluşturan Kullanıcı</strong>
                          </label>
                          <p className="form-control-static">User XXX</p>
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Oluşturma Tarihi</strong>
                          </label>
                          <p className="form-control-static">DD/MM/YYYY</p>
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Güncelleyen Kullanıcı</strong>
                          </label>
                          <p className="form-control-static">User YYY</p>
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Güncelleme Tarihi</strong>
                          </label>
                          <p className="form-control-static">DD/MM/YYYY</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      {/* BEGIN PRE-FOOTER */}

      {/* END FOOTER */}
      {/* BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) */}
      {/* BEGIN CORE PLUGINS */}
      {/*[if lt IE 9]>

 
<![endif]*/}
      {/* IMPORTANT! Load jquery-ui.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip */}
      {/* END CORE PLUGINS */}
      {/* END JAVASCRIPTS */}
      {/* END BODY */}
    </div>
  );
}

export default FormMusteriContainer;
