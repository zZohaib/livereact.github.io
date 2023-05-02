import React, { Component } from "react";
import gradientTextStyles from "./gradientText.module.css";

export default class GradientText extends Component {
  render() {
    return (
      <div className={gradientTextStyles.gradient__bg}>
        <h6
          className={
            this.props.mode === "dark"
              ? gradientTextStyles.darkFontColor
              : gradientTextStyles.lightFontColor
          }
        >
          {this.props.h6}
        </h6>
        <h3>{this.props.h3}</h3>
      </div>
    );
  }
}
