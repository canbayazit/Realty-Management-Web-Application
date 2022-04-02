import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("username") == "") {
      navigate("/");
    }
  }, []);

  return (
    <div className="page-header">
      <div className="page-header-top">
        <div className="container">
          {/* BEGIN LOGO */}
          <div className="page-logo">
            <Link to="/index">
              <img
                src="../../assets/admin/layout3/img/logo-default.png"
                alt="logo"
                className="logo-default"
              />
            </Link>
          </div>
          {/* END LOGO */}
          {/* BEGIN RESPONSIVE MENU TOGGLER */}
          <Link to="#" className="menu-toggler" />
          {/* END RESPONSIVE MENU TOGGLER */}
          {/* BEGIN TOP NAVIGATION MENU */}
          <div className="top-menu">
            <ul className="nav navbar-nav pull-right">
              {/* BEGIN NOTIFICATION DROPDOWN */}
              <li
                className="dropdown dropdown-extended dropdown-dark dropdown-notification"
                id="header_notification_bar"
              >
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-close-others="true"
                >
                  <i className="icon-bell" />
                  <span className="badge badge-default">7</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="external">
                    <h3>
                      You have <strong>12 pending</strong> tasks
                    </h3>
                    <Link to="#">view all</Link>
                  </li>
                  <li>
                    <ul
                      className="dropdown-menu-list scroller"
                      style={{ height: "250px" }}
                      data-handle-color="#637283"
                    >
                      <li>
                        <Link to="#">
                          <span className="time">just now</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-success">
                              <i className="fa fa-plus" />
                            </span>
                            New user registered.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="time">3 mins</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-danger">
                              <i className="fa fa-bolt" />
                            </span>
                            Server #12 overloaded.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="time">10 mins</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-warning">
                              <i className="fa fa-bell-o" />
                            </span>
                            Server #2 not responding.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="time">14 hrs</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-info">
                              <i className="fa fa-bullhorn" />
                            </span>
                            Application error.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="time">2 days</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-danger">
                              <i className="fa fa-bolt" />
                            </span>
                            Database overloaded 68%.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="time">3 days</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-danger">
                              <i className="fa fa-bolt" />
                            </span>
                            A user IP blocked.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="time">4 days</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-warning">
                              <i className="fa fa-bell-o" />
                            </span>
                            Storage Server #4 not responding dfdfdfd.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="time">5 days</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-info">
                              <i className="fa fa-bullhorn" />
                            </span>
                            System Error.
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="time">9 days</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-danger">
                              <i className="fa fa-bolt" />
                            </span>
                            Storage server failed.
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* END NOTIFICATION DROPDOWN */}
              {/* BEGIN TODO DROPDOWN */}
              <li
                className="dropdown dropdown-extended dropdown-dark dropdown-tasks"
                id="header_task_bar"
              >
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-close-others="true"
                >
                  <i className="icon-calendar" />
                  <span className="badge badge-default">3</span>
                </Link>
                <ul className="dropdown-menu extended tasks">
                  <li className="external">
                    <h3>
                      You have <strong>12 pending</strong> tasks
                    </h3>
                    <Link to="#">view all</Link>
                  </li>
                  <li>
                    <ul
                      className="dropdown-menu-list scroller"
                      style={{ height: "275px" }}
                      data-handle-color="#637283"
                    >
                      <li>
                        <Link to="#">
                          <span className="task">
                            <span className="desc">New release v1.2 </span>
                            <span className="percent">30%</span>
                          </span>
                          <span className="progress">
                            <span
                              style={{ width: "40%" }}
                              className="progress-bar progress-bar-success"
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span className="sr-only">40% Complete</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="task">
                            <span className="desc">Application deployment</span>
                            <span className="percent">65%</span>
                          </span>
                          <span className="progress">
                            <span
                              style={{ width: "65%" }}
                              className="progress-bar progress-bar-danger"
                              aria-valuenow={65}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span className="sr-only">65% Complete</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="task">
                            <span className="desc">Mobile app release</span>
                            <span className="percent">98%</span>
                          </span>
                          <span className="progress">
                            <span
                              style={{ width: "98%" }}
                              className="progress-bar progress-bar-success"
                              aria-valuenow={98}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span className="sr-only">98% Complete</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="task">
                            <span className="desc">Database migration</span>
                            <span className="percent">10%</span>
                          </span>
                          <span className="progress">
                            <span
                              style={{ width: "10%" }}
                              className="progress-bar progress-bar-warning"
                              aria-valuenow={10}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span className="sr-only">10% Complete</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="task">
                            <span className="desc">Web server upgrade</span>
                            <span className="percent">58%</span>
                          </span>
                          <span className="progress">
                            <span
                              style={{ width: "58%" }}
                              className="progress-bar progress-bar-info"
                              aria-valuenow={58}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span className="sr-only">58% Complete</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="task">
                            <span className="desc">Mobile development</span>
                            <span className="percent">85%</span>
                          </span>
                          <span className="progress">
                            <span
                              style={{ width: "85%" }}
                              className="progress-bar progress-bar-success"
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span className="sr-only">85% Complete</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="task">
                            <span className="desc">New UI release</span>
                            <span className="percent">38%</span>
                          </span>
                          <span className="progress progress-striped">
                            <span
                              style={{ width: "38%" }}
                              className="progress-bar progress-bar-important"
                              aria-valuenow={18}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span className="sr-only">38% Complete</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* END TODO DROPDOWN */}
              <li className="droddown dropdown-separator">
                <span className="separator" />
              </li>
              {/* BEGIN INBOX DROPDOWN */}
              <li
                className="dropdown dropdown-extended dropdown-dark dropdown-inbox"
                id="header_inbox_bar"
              >
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-close-others="true"
                >
                  <span className="circle">3</span>
                  <span className="corner" />
                </Link>
                <ul className="dropdown-menu">
                  <li className="external">
                    <h3>
                      You have <strong>7 New</strong> Messages
                    </h3>
                    <Link to="#">view all</Link>
                  </li>
                  <li>
                    <ul
                      className="dropdown-menu-list scroller"
                      style={{ height: "275px" }}
                      data-handle-color="#637283"
                    >
                      <li>
                        <Link to="/index">
                          <span className="photo">
                            <img
                              src="../../assets/admin/layout3/img/avatar2.jpg"
                              className="img-circle"
                              alt=""
                            />
                          </span>
                          <span className="subject">
                            <span className="from"> Lisa Wong </span>
                            <span className="time">Just Now </span>
                          </span>
                          <span className="message">
                            Vivamus sed auctor nibh congue nibh. auctor nibh
                            auctor nibh...
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/index">
                          <span className="photo">
                            <img
                              src="../../assets/admin/layout3/img/avatar3.jpg"
                              className="img-circle"
                              alt=""
                            />
                          </span>
                          <span className="subject">
                            <span className="from"> Richard Doe </span>
                            <span className="time">16 mins </span>
                          </span>
                          <span className="message">
                            Vivamus sed congue nibh auctor nibh congue nibh.
                            auctor nibh auctor nibh...
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/index">
                          <span className="photo">
                            <img
                              src="../../assets/admin/layout3/img/avatar1.jpg"
                              className="img-circle"
                              alt=""
                            />
                          </span>
                          <span className="subject">
                            <span className="from"> Bob Nilson </span>
                            <span className="time">2 hrs </span>
                          </span>
                          <span className="message">
                            Vivamus sed nibh auctor nibh congue nibh. auctor
                            nibh auctor nibh...
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/index">
                          <span className="photo">
                            <img
                              src="../../assets/admin/layout3/img/avatar2.jpg"
                              className="img-circle"
                              alt=""
                            />
                          </span>
                          <span className="subject">
                            <span className="from"> Lisa Wong </span>
                            <span className="time">40 mins </span>
                          </span>
                          <span className="message">
                            Vivamus sed auctor 40% nibh congue nibh...
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/index">
                          <span className="photo">
                            <img
                              src="../../assets/admin/layout3/img/avatar3.jpg"
                              className="img-circle"
                              alt=""
                            />
                          </span>
                          <span className="subject">
                            <span className="from"> Richard Doe </span>
                            <span className="time">46 mins </span>
                          </span>
                          <span className="message">
                            Vivamus sed congue nibh auctor nibh congue nibh.
                            auctor nibh auctor nibh...
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* END INBOX DROPDOWN */}
              {/* BEGIN USER LOGIN DROPDOWN */}
              <li className="dropdown dropdown-user dropdown-dark">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-close-others="true"
                >
                  <img
                    alt=""
                    className="img-circle"
                    src="../../assets/admin/layout3/img/avatar9.jpg"
                  />
                  <span className="username username-hide-mobile">
                    {localStorage.getItem("username")}
                  </span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-default">
                  <li>
                    <Link to="/index">
                      <i className="icon-user" /> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/index">
                      <i className="icon-calendar" /> My Calendar
                    </Link>
                  </li>
                  <li>
                    <Link to="/index">
                      <i className="icon-envelope-open" /> My Inbox
                      <span className="badge badge-danger"> 3 </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-rocket" /> My Tasks
                      <span className="badge badge-success"> 7 </span>
                    </Link>
                  </li>
                  <li className="divider" />
                  <li>
                    <Link to="/index">
                      <i className="icon-lock" /> Lock Screen
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon-key" /> Log Out
                    </Link>
                  </li>
                </ul>
              </li>
              {/* END USER LOGIN DROPDOWN */}
            </ul>
          </div>
          {/* END TOP NAVIGATION MENU */}
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
