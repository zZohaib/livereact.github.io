import React, { Component } from "react";
import featureCardStyles from "./featureCard.module.css";

// import mobileicon from '../../assets/website.svg'
export default class FeatureCard extends Component {
  render() {
    return (
      <div
        className={`${featureCardStyles.container} ${
          this.props.mode === "dark"
            ? featureCardStyles.darkBackgroundColor
            : featureCardStyles.lightBackgroundColor
        }`}
      >
        <span className={this.props.icon}>{this.props.iconName}</span>
        <h6
          className={
            this.props.mode === "dark"
              ? featureCardStyles.darkFontColor
              : featureCardStyles.lightFontColor
          }
        >
          {this.props.h6}
        </h6>
        <p>{this.props.p}</p>
      </div>
    );
  }
}
