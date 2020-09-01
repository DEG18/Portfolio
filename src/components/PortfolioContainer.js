import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Sport from "./pages/Sport";
import Travel from "./pages/Travel";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    let result;

    switch(this.state.currentPage) {
      case "About":
        // code block
        result = <About />
          break;
      case "Portfolio":
        // code block
        result = <Portfolio currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}/>;
        break;
      case "Contact":
        // code block
        result = <Contact />;
        break;
      case "Project":
        // code block
        result = <Project />;
        break;
      case "Sport":
        result = <Sport />;
        break;
      case "Travel":
        result = <Travel />;
        break;       
      default:
        result = <Home currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}/>;
    }

    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {result}
        <Footer currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}/>
      </div>
    );
  }
}

export default PortfolioContainer;
