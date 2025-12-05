import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.jpg";


function Navbar() {
  return (
    <div className={style.Header} id="Header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className={style.imglogo} src={logo} alt="logo" />
          </Link>
          <span className={style.s1}>Ta3alM</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav m-auto" >
              <li className="nav-item mx-3">
                <Link className={`nav-link active ${style.navFont}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${style.navFont}`} to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${style.navFont}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${style.navFont}`} to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item dropdown mx-3">
                <Link
                  className={`nav-link dropdown-toggle ${style.navFont}`}
                  to="/accounts"
                  id="x"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Accounts
                </Link>
                <div className="dropdown-menu" aria-labelledby="x">
                  <Link to="/accounts/instructor" className={`dropdown-item ${style.navfontSibling}`}>
                    Instructor Dash Board
                  </Link>
                  <Link to="/accounts/student" className={`dropdown-item ${style.navfontSibling}`}>
                    Student Dash Board
                  </Link>
                </div>
              </li>
              <button type="submit" className={style.btn1}>Sign in</button>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
