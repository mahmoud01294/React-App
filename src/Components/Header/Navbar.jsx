import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={style.Header} id="Header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className={style.imglogo} src="/logo.jpg"></img>
            </a>
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
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Courses">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/Accounts"
                    id="x"
                    data-bs-toggle="dropdown"
                  >
                    Accounts
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="x">
                    <Link to="/Instructor" className="dropdown-item">
                      Instructor Dash Board
                    </Link>
                    <Link to="/Student" className="dropdown-item">
                      Student Dash Board
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
