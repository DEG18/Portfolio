import React from "react";
import hiking1 from "../img/Sportimg/Labyrinth-hike1.jpg";
import basketball2 from "../img/Sportimg/basketball2.jpg";
import hiking2 from "../img/Sportimg/hiking.jpg";
import kart from "../img/Sportimg/Kart.jpg";
import badminton2 from "../img/Sportimg/badminton2.jpg";

function Sport() {
  const styles = {
    col: {
      marginBottom: "auto"
    },
    col2: {
      color: "black",
      textAlign: "left",
      fontSize: "large",
      lineHeight: "35px"
  }
  }
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <img
            src={hiking1}
            alt="Sport-img"
            className="img-thumbnail"
          />
        </div>
        <div className="col">
          <img
            src={basketball2}
            alt="Sport-img"
            className="img-thumbnail"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <img
            src={hiking2}
            alt="Sport-img"
            className="img-thumbnail"
          />
        </div>
        <div className="col-md-4">
          <img
            src={badminton2}
            alt="Sport-img"
            className="img-thumbnail"
            style={styles.col}
          />
        </div>
        <div className="col-md-4">
          <img
            src={kart}
            alt="Sport-img"
            className="img-thumbnail"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div
          className="col"
          style={styles.col2}
        >
          <p>
            I have many hobbies, like competitive games, exciting and
            challenging sports, of course! Safety first! The first picture shows
            me going to Labyrinth hiking with my Cousins. I really like this
            hiking route, which is very exciting. When I climb to the peak, the
            scenery is very beautiful!
          </p>
          <p>
            I also love playing basketball, in the process of playing
            basketball, we can meet a lot of new friends, as well as a quick way
            to break in the team cooperation. While showing off your skills,
            your teammates are also creating a best-attacking environment for
            you, so teamwork is very important. Kart is also one of my favorite
            sports. I can pursue speed and passion under safe conditions. It is
            very important to set a strategic plan for each corner, so as to
            ensure that you will not be overtaken by your opponents and compete
            for the first.
          </p>
          <p>
            When I was studying at commack high school, I joined the school
            badminton team, I am very honored to I can compete on behalf of the
            school. Playing badminton has many advantages because we are now
            mostly through the computer to get the job done, so long-term
            working long hours can cause fatigue to our cervical vertebra,
            badminton can relieve fatigue, increase the lung capacity, and build
            your muscles to shape your body.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

export default Sport;