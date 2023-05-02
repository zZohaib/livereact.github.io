import React, { Component } from "react";
import image from "../../assets/bg.jpg";
import landingPageStyles from "./landingPage.module.css";
export default class LandingPage extends Component {
  render() {
    const propertyColor =
      this.props.mode === "dark"
        ? landingPageStyles.darkFontColor
        : landingPageStyles.lightFontColor;
    return (
      <div className={landingPageStyles.container} id="Home">
        <div>
          <img src={image} alt="" className={landingPageStyles.landing_image} />
        </div>
        <div className={landingPageStyles.content_container}>
          <div className={landingPageStyles.h6_div}>
            <h6 className={propertyColor}>Digital Consulting Agency</h6>
          </div>
          <h1 className={propertyColor}>Unique Business Consulting.</h1>
          <p className={landingPageStyles.p}>
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials.
          </p>
          <div className={landingPageStyles.services}>
            <div className={landingPageStyles.services_container}>
              <div className={landingPageStyles.services_logo}>
                <div
                  className={`${landingPageStyles.adjustmentPurpose} ${
                    this.props.mode === "dark"
                      ? landingPageStyles.darkBackgroundColor
                      : landingPageStyles.lightBackgroundColor
                  }`}
                >
                  <span className="material-symbols-outlined">
                    laptop_chromebook
                  </span>
                </div>
              </div>
              <div className={landingPageStyles.container_h6_p}>
                <h6 className={propertyColor}>Web Development</h6>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </div>
            <div className={landingPageStyles.services_container}>
              <div className={landingPageStyles.services_logo}>
                <div
                  className={`${landingPageStyles.adjustmentPurpose} ${
                    this.props.mode === "dark"
                      ? landingPageStyles.darkBackgroundColor
                      : landingPageStyles.lightBackgroundColor
                  }`}
                >
                  <span className="material-symbols-outlined">
                    phone_android
                  </span>
                </div>
              </div>
              <div className={landingPageStyles.container_h6_p}>
                <h6 className={propertyColor}>App Development</h6>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
