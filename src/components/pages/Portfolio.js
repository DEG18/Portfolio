import React from "react";
import travelimg from "../img/Portfolioimg/CoverTravel.jpg";
import sportimg from "../img/Portfolioimg/CoverSport.jpg";
import projectimg from "../img/Portfolioimg/CoverProjects.jpg";
import temimg from "../img/Portfolioimg/CoverTem2.jpg";

function Portfolio(props) {
  const styles = {
    row1: {
      margin: "auto"
    },
    travel1: {
      width: "100%",
      height: "100%"
    },
    sport1: {
      width: "100%"
    }


  }
  return (
    <main>
      <div className="container-fuil">
        <div className="row" style={styles.row1}>
          <div className="column">
            <a href="#project" onClick={() => props.handlePageChange("Project")}
              ><img
                src={projectimg}
                alt="CoverProjects by Yu Shi"
                style={styles.travel1}
            /></a>
          </div>

          <div className="column">
            <a href="#sport" onClick={() => props.handlePageChange("Sport")}
              ><img
                src={sportimg}
                alt="CoverSport"
                style={styles.sport1}
            /></a>
          </div>
        </div>
        <div className="row" style={styles.row1}>
          <div className="column">
            <a href="#travel" onClick={() => props.handlePageChange("Travel")}
              ><img
                src={travelimg}
                alt="CoverTravel by Yu Shi"
                style={styles.travel1}
            /></a>
          </div>

          <div className="column">
            <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")}
              ><img
                src={temimg}
                alt="Temporary-Img by Yu Shi Should be a link to my CV"
                style={styles.sport1}
            /></a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
