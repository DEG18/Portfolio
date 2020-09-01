import React from "react";
import logo from "./img/Logo/Logo3.png";
import "./styles/Navtab.css";

function NavTabs(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <a href="#home" onClick={() => props.handlePageChange("Home")}
            ><img className="center" src={logo} alt="Logo"
          /></a>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#home" onClick={() => props.handlePageChange("Home")}> Luyu Zeng</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
                  CONTACT
                </a>
              </li>
              <li className="nav-item dropdown">
                <div className="d-flex">
                  <div className="btn-group">
                    <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")} className="nav-link">
                      PORTFOLIO
                    </a>
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      id="dropdownMenuReference"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-reference="parent"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuReference"
                    >
                      <a className="dropdown-item" href="#Project" onClick={() => props.handlePageChange("Project")}>Projects</a>
                      <a className="dropdown-item" href="#Travel" onClick={() => props.handlePageChange("Travel")}>Travel</a>
                      <a className="dropdown-item" href="#Sport" onClick={() => props.handlePageChange("Sport")}>Sports</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavTabs;
