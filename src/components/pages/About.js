import React from "react";
import aboutme1 from "../img/Welcomeimg/HomepageAbout2.jpg";

function About() {
  const styles = {
    header: {
      color: "rgb(21,196,154)",
      textAlign: "left",
    },
    pagragph: {
      fontSize: "large",
      lineHeight: "35px",
    },
    row: {
      marginBottom: "110px",
    },
  };

  return (
    <main className="container">
      <br />
      <form className="formcontainer">
        <header style={styles.header}>
          <h1>About Me</h1>
        </header>
        <hr />
      </form>
      <div className="row" style={styles.row}>
        <div className="col-sm-4">
          <img src={aboutme1} alt="About Me" className="img-thumbnail" />
        </div>
        <div className="col">
          <p className="formcontainer" style={styles.pagragph}>
            Hello everyone, my name is Luyu Zeng. I grew up in Shenzhen, China,
            and moved to New York when I was 15 years old. After spending a few
            months in junior high school and I moved to Commack. I love Commack
            and I have many good memories back then (not saying I don't have
            good memories in NYC). When I was attending Commack High School, I
            was having a lot of trouble learning my second language "English",
            which is the first challenge I have to face. My friends and teachers
            are really nice to me, trying to help me out every time I stuck on a
            problem. Commack High school mean to me a lot, is where the dream
            starts. where I learned the first computer language called "Python".
            I am currently a student at Baruch College. My major is Finance and
            minor in Physics. Currently attending Columbia Coding Bootcamp
            trying to understand more about the true meaning of computers in
            life, and how to combine the programming knowledge I have learned
            with my future career goals.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
