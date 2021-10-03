import React, { Component } from "react";
import Naxbar from "./Navbar";
import About from "./about";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Status from "./status";
import "../index.css";
import SearchBar from "./search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false };
  }
  getDarkStatus = (status) => {
    this.setState({ darkMode: status });
    console.log(this.state.darkMode);
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: `${this.state.darkMode ? "#2c2b2b" : "#ffffff"}`,
        }}
      >
        <Naxbar getDarkStatus={this.getDarkStatus} />   
        <Status dark={this.state.darkMode}/>
        <SearchBar dark={this.state.darkMode}/>
        <About dark={this.state.darkMode}/>
        <Footer />
      </div>
    );
  }
}

export default App;
