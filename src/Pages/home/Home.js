import React, { Component } from "react";
import { GradientText, Line } from "../../components";
import { LandingPage, FeaturePage } from "../../Containers";
import homeStyles from "./home.module.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Navbar mode={this.state.mode} toggleMode={this.toggleMode} /> */}
        <div
          className={`${homeStyles.App_container} ${
            this.props.mode === "dark"
              ? homeStyles.bodydark
              : homeStyles.bodylight
          } ${homeStyles.App_landing_page_height}`}
        >
          <LandingPage mode={this.props.mode} />
        </div>

        <div
          className={`${homeStyles.App_feature_page_container} ${
            this.props.mode === "dark"
              ? homeStyles.darkBackgroundColor
              : homeStyles.lightBackgroundColor
          } ${homeStyles.App_feature_page_height}`}
        >
          <div className={`${homeStyles.absolute} ${homeStyles.right}`}>
            <Line />
          </div>
          <div
            className={`${homeStyles.App_gradient_position} ${homeStyles.App_gradient_margin}`}
          >
            <GradientText
              mode={this.props.mode}
              h6="best features"
              h3="We are a new digital product development agency"
            />
          </div>
          <div className={homeStyles.App_feature_margin}>
            <FeaturePage mode={this.props.mode} />
          </div>
          <div className={`${homeStyles.absolute} ${homeStyles.left}`}>
            <Line />
          </div>
        </div>
      </div>
    );
  }
}
