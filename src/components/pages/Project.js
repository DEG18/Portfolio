import React from "react";
import pawscitylogo from "../img/Projectimg/PawsCity_logo2.png";
import veganlogo from "../img/Projectimg/Vegan_logo1.png";


function Project() {
  const styles = {
    pawcity: {
      fontSize: "large",
      lineHeight: "35px"
    },
    hr: {
      borderTopWidth: "1px"
    },
    link: {
      color: "black",
      fontSize: "28px",
      padding: "4px",
      margin: "0px 10px"      
    },
    github: {
      color: "black",
      fontSize: "28px",
    }
  }

  const user = {
    project1link: "https://nata-stelmakh.github.io/PawsCity/",
    project2link: "https://ancient-oasis-67335.herokuapp.com/",
    project1github: "https://github.com/nata-stelmakh/PawsCity",
    project2github: "https://github.com/camrynnesullivan/Ahmed-Justin-Luyu-Xavier-Project-2",
    targetpage: "_blank"
  }

  return (
    <main className="container">
      <br />
      <br />
      {/* <!-- project link: https://nata-stelmakh.github.io/PawsCity/ --> */}
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4 align-self-center">
            <img
              src={pawscitylogo}
              className="card-img"
              alt="Project1_logo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Paw City  
                <a href={user.project1link} target={user.targetpage}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-share-fill" style={styles.link} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.024 3.797L4.499 7.56l-.448-.895 7.525-3.762.448.894zm-.448 9.3L4.051 9.335 4.5 8.44l7.525 3.763-.448.894z"/>
                    <path fillRule="evenodd" d="M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </a>
                <a href={user.project1github} target={user.targetpage}>
                  <svg stroke="currentColor" style={styles.github} fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="navbar__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              </h5>
              <hr style={styles.hr}/>
        
              {/* <p className="card-text"> */}
                <p className="text-muted card-text" style={styles.pawcity} >
                  An app designed for people looking to adopt and new pet
                  owners, given the user's input location, offers a choice of
                  nearby pet shelters, dog-friendly places, pet stores, and
                  parks. In this project, I designed the logo of our website,
                  participated in the design of the website, and helped the team
                  members debug.
                </p>
              {/* </p> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- project link: https://github.com/camrynnesullivan/Ahmed-Justin-Luyu-Xavier-Project-2 --> */}
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4 align-self-center">
            <img
              src={veganlogo}
              className="card-img"
              alt="Project2_logo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Vegan 
                <a href={user.project2link} target={user.targetpage}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-share-fill" style={styles.link} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.024 3.797L4.499 7.56l-.448-.895 7.525-3.762.448.894zm-.448 9.3L4.051 9.335 4.5 8.44l7.525 3.763-.448.894z"/>
                    <path fillRule="evenodd" d="M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </a>
                <a href={user.project2github} target={user.targetpage}>
                  <svg stroke="currentColor" style={styles.github} fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="navbar__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              </h5>
              <hr style={styles.hr}/>
        
              {/* <p className="card-text"> */}
                <p className="text-muted card-text" style={styles.pawcity}>
                  This APP is for any kind of herbivore! Our plant eaters can 
                  use our app to find the best places for vegan food! They can 
                  also review and become part of the greater vegan community! 
                  Eating plants and feeling great, just like Arnold Schwarzenegger! 
                  We used MySQL to be our database, so we can store the information 
                  of all users, including their reviews. My role in this project is 
                  Full Stack Web Developer. I designed the background image, 
                  participated in the layout of all web pages, and connected the 
                  front-end and back-end functions.
                </p>
              {/* </p> */}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

export default Project;