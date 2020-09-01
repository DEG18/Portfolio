import React from "react";
import logo from "./img/Logo/Logo3.png";
import "./styles/Navtab.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <a href="#home" onClick={() => props.handlePageChange("Home")}
            ><img className="center" src={logo} alt="Logo"
          /></a>
        </div>
        <br />
        Copyright © 2020 Luyu Zeng. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;