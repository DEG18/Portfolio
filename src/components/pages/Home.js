import React from "react";
import aboutme1 from "../img/Welcomeimg/HomepageAbout2.jpg";
import aboutme2 from "../img/Welcomeimg/Pink2.jpg";
import aboutme3 from "../img/Welcomeimg/HomepageAbout3.jpg";
import travel1 from "../img/Welcomeimg/HomepageTravel2.jpg";
import travel2 from "../img/Welcomeimg/Travel2.jpg";
import travel3 from "../img/Welcomeimg/HomepageTravel3.jpg";
import contact1 from "../img/Welcomeimg/HomepageContact2.jpg";
import contact2 from "../img/Welcomeimg/Circle2.jpg";
import contact3 from "../img/Welcomeimg/Email3.jpg";
import sport1 from "../img/Welcomeimg/badminton1.jpg";
import sport2 from "../img/Welcomeimg/sport.jpg";
import sport3 from "../img/Welcomeimg/basketball.jpg";

function Home(props) {
  return (
    <main className="container">
      <br/>
      {/* <!-- first row About --> */}
      <div className="row">
        <div className="col-sm-4">
          <img
            src={aboutme1}
            alt="About Me"
            className="img-thumbnail"
          />
        </div>
        <div className="col-sm-4">
          <a  href="#about" onClick={() => props.handlePageChange("About")}
            ><img
              src={aboutme2}
              alt="drop"
              className="img-thumbnail"
          /></a>
        </div>
        <div className="col-sm-4">
          <img
            src={aboutme3}
            alt="About Me"
            className="img-thumbnail"
          />
        </div>
      </div>
      <br />
      {/* <!-- sec. row Travel --> */}
      <div className="row">
        <div className="col-sm-4">
          <img
            src={travel1}
            alt="Travel"
            className="img-thumbnail"
          />
        </div>
        <div className="col-sm-4">
          <a href="#travel" onClick={() => props.handlePageChange("Travel")}
            ><img
              src={travel2}
              alt="Travel"
              className="img-thumbnail"
          /></a>
        </div>
        <div className="col-sm-4">
          <img
            src={travel3}
            alt="Travel"
            className="img-thumbnail"
          />
        </div>
      </div>
      <br />
      {/* <!-- Third row Contact --> */}

      <div className="row">
        <div className="col-sm-4">
          <img
            src={contact1}
            alt="Contact"
            className="img-thumbnail"
          />
        </div>
        <div className="col-sm-4">
          <a href="#contact" onClick={() => props.handlePageChange("Contact")}
            ><img
              src={contact2}
              alt="Circle"
              className="img-thumbnail"
          /></a>
        </div>
        <div className="col-sm-4">
          <img
            src={contact3}
            alt="Email"
            className="img-thumbnail"
          />
        </div>
      </div>
      {/* <!-- Fourth row Sport --> */}
      <div className="row">
        <div className="col-sm-4">
          <img
            src={sport1}
            alt="Badminton"
            className="img-thumbnail"
          />
        </div>
        <div className="col-sm-4">
          <a href="#sport" onClick={() => props.handlePageChange("Sport")}
            ><img
              src={sport2}
              alt="Sport"
              className="img-thumbnail"
          /></a>
        </div>
        <div className="col-sm-4">
          <img
            src={sport3}
            alt="basketball"
            className="img-thumbnail"
          />
        </div>
      </div>
      <br />
    </main>
  );
}

export default Home;
