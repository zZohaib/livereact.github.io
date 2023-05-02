import React, { Component } from "react";
import { FeatureCard } from "../../components";
import featurePageStyles from "./featurePage.module.css";
export default class FeaturePage extends Component {
  render() {
    return (
      <div className={featurePageStyles.box}>
        <div className={featurePageStyles.container}>
          <div>
            <FeatureCard
              mode={this.props.mode}
              icon="material-symbols-outlined"
              iconName="laptop_chromebook"
              h6="Web Development"
              p="Lorem ipsum dolor, sit amet 
        consequatur commodi sint quos dolor a voluptas"
            />
          </div>
          <div>
            <FeatureCard
              mode={this.props.mode}
              icon="material-symbols-outlined"
              iconName="phone_android"
              h6="App Development"
              p="Lorem ipsum dolor, sit amet 
          consequatur commodi sint quos dolor a voluptas"
            />
          </div>
          <div>
            <FeatureCard
              mode={this.props.mode}
              icon="material-symbols-outlined"
              iconName="edit_note"
              h6="Content Writing"
              p="Lorem ipsum dolor, sit amet 
          consequatur commodi sint quos dolor a voluptas"
            />
          </div>
        </div>
      </div>
    );
  }
}
