import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="page-header-menu">
      <div className="container">
        {/* BEGIN HEADER SEARCH BOX */}
        <form className="search-form" action="extra_search.html" method="GET">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="query"
            />
            <span className="input-group-btn">
              <Link to="#" className="btn submit">
                <i className="icon-magnifier" />
              </Link>
            </span>
          </div>
        </form>
        {/* END HEADER SEARCH BOX */}
        {/* BEGIN MEGA MENU */}
        {/* DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background */}
        {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
        <div className="hor-menu ">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/index">Dashboard</Link>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <Link
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                to="#"
              >
                Proje Yönetimi <i className="fa fa-angle-down" />
              </Link>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <Link to="#">
                    <i className="icon-briefcase" />
                    Proje
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormProje">Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeProje">Liste </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to="#">
                    <i className="icon-home" />
                    Daire
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormDaire">Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeDaire">Liste </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to="#">
                    <i className="icon-user" />
                    Çalışan
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormCalisan">Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeCalisan">Liste </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <Link
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                to="#"
              >
                Müşteri Yönetimi <i className="fa fa-angle-down" />
              </Link>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <Link to="#">
                    <i className="icon-user-female" />
                    Müşteri
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormMusteri">Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeMusteri">Liste </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to="#">
                    <i className="icon-eye" />
                    Ziyaret
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormZiyaret">Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeZiyaret">Liste </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to="#">
                    <i className="icon-rocket" />
                    Satış
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormSatis">Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeSatis">Liste </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <Link
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                to="#"
              >
                İçerik Yönetimi <i className="fa fa-angle-down" />
              </Link>
              <ul className="dropdown-menu pull-left">
                <li className=" mega-menu-submenu">
                  <Link to="/ListeCinsiyet">
                    <i className="icon-settings" />
                    Cinsiyet
                  </Link>
                </li>
                <li className=" mega-menu-submenu">
                  <Link to="/ListeDaireTipi">
                    <i className="icon-settings" />
                    Daire Tipi
                  </Link>
                </li>
                <li className=" mega-menu-submenu">
                  <Link to="/ListeGelirTipi">
                    <i className="icon-settings" />
                    Gelir Tipi
                  </Link>
                </li>
                <li className=" mega-menu-submenu">
                  <Link to="/ListeProjeDurumu">
                    <i className="icon-settings" />
                    Proje Durumu
                  </Link>
                </li>
                <li className=" mega-menu-submenu">
                  <Link to="/ListeSehir">
                    <i className="icon-settings" />
                    Şehir
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* END MEGA MENU */}
      </div>
    </div>
  );
}

export default Menu;
