import React, { Component } from "react";
import { Navbar } from "./components";
// import { LandingPage, FeaturePage } from "./Containers";
import { Home } from "./Pages";
import "./App.css";

import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "dark",
    };
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode(e) {
    this.setState({ mode: e.target.checked ? "light" : "dark" });
    console.log("presssed");
  }
  render() {
    return (
      <>
      {/* <ProgressBar/> */}
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
        <Routes>
          <Route exact path="/" element={<Home mode={this.state.mode} />} />
        </Routes>
      </>
    );
  }
}
