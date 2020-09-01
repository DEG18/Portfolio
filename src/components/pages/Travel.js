import React from "react";
import travelimg1 from "../img/Travelimg/travel2.png";
import travelimg2 from "../img/Travelimg/travel1.png";
import travelimg3 from "../img/Travelimg/travel3.jpg";

function Travel() {
  const styles = {
    img3: {
      position: "absolute",
      bottom: "0px"
    },
    col: {
      color: "black",
      textAlign: "left",
      fontSize: "large",
      lineHeight: "35px"
    }
  }
  return (
    <main className="container">
    <br />
    <br />
      <div className="row">
        <div className="col">
          <img
            src={travelimg1}
            alt="Travel-img"
            className="img-thumbnail"
          />
        </div>

        <div className="col">
          <div className="row">
            <img
              src={travelimg2}
              alt="Travel-img"
              className="img-thumbnail"
            />
          </div>
          <div className="row">
            <img
              src={travelimg3}
              alt="Trave-img"
              className="img-thumbnail"
              style={styles.img3}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div
          className="col"
          style={styles.col} >
          <p>
            One of my most memorable trips was a trip to Seattle with my
            girlfriend! We spent four days in Seattle and went to a lot of
            iconic places. I highly recommend "Sky Hauz A Frame Cabin". As you
            can see I posted the picture of the cabin on top. The cabin is
            located on groves with a river nearby. The environment is very quiet
            and living in the city for a long time will miss the time of living
            the groves. The design of the cabin is very primitive and simple,
            which makes people feel very warm after staying. It is just over an
            hour's drive from the center of Seattle. To the east is the German
            town of "Leavenworth". There is a lot of delicious food in the
            German town, and the scenery is even more beautiful at night. The
            Bavarian flavor is still preserved here., from buildings, streets to
            Clothing, let me experience the traditional European country style.
          </p>
          <p>
            We also went to "Pike Place Market", one of Seattle's most famous
            destination, where there is the world's first Starbucks store, very
            delicious clam chowder from Pike Place Chowder, and a very delicious
            Piroshky Piroshky's Beef and Cheese bread, there is also "The
            Seattle Great Wheel" nearby.
          </p>
          <p>
            Everyone has a different way of traveling. Some people want to feel
            the fresh sea breeze blowing on their cheeks. Some people like
            shopping and some people like to taste delicious food. I wonder what
            kind of way you like to travel?
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

export default Travel;