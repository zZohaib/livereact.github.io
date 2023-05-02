import React, { Component } from "react";
import navBarStyles from "./navbar.module.css";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
   
    const propertyColor =
      this.props.mode === "dark"
        ? navBarStyles.darkFontColor
        : navBarStyles.lightFontColor;
    return (
      <div
        className={`${navBarStyles.navbarStyles}   ${
          this.props.mode === "dark" ? navBarStyles.dark : navBarStyles.light
        }`}
      >
        <div>
          <img className={navBarStyles.logo} src={logo} alt="logo-imag" />
        </div>
        <div>
          <ul className={navBarStyles.container}>
            <li>
              <Link className={propertyColor} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={propertyColor} to="/About">
                About
              </Link>
            </li>
            <li>
              <Link className={propertyColor} to="/Work">
                Work
              </Link>
            </li>
            <li>
              <Link className={propertyColor} to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={navBarStyles.body}>
          <label className={navBarStyles.label}>
            <div className={`${navBarStyles.text} ${propertyColor}`}>
              Enable {this.props.mode === "light" ? "Dark" : "Light"} Mode
            </div>
            <div
              className={`${navBarStyles.toggle} ${
                this.props.mode === "dark"
                  ? navBarStyles.darkBackgroundtoggle
                  : navBarStyles.lightBackgroundtoggle
              }`}
            >
              <input
                className={navBarStyles.toggleState}
                onChange={this.props.toggleMode}
                type="checkbox"
              />
              <div className={navBarStyles.indicator}></div>
            </div>
          </label>
        </div>
      </div>
    );
  }
}
