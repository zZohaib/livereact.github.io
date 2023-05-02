import React, { Component } from "react";
import progressBarStyles from "./progressBar.module.css";
export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  }
  handleClick() {
   
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  //   () => {
  //     document.body.style.setProperty(
  //       "--scroll",
  //       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //     );
  //   },
  //   false
  // );

  render() {
    return (
      <div>
        {/* <div className={progressBarStyles.progress_indicator}>
          <svg>
            <g>
              <circle
                cx="0"
                cy="0"
                r="10"
                stroke="black"
                className={progressBarStyles.animated_circle}
                transform="translate(50,50) rotate(-90)"
              />
            </g>
            <g>
              <circle
                cx="0"
                cy="0"
                r="18"
                transform="translate(50,50) rotate(-90)"
              />
            </g>
          </svg>
          <div className={progressBarStyles.progress_count}></div>
          
        </div> */}
        {/* <svg
          className={progressBarStyles.svg}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="M480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
          </svg> */}
        <div className={progressBarStyles.progress}>
          {/* <button className={progressBarStyles.circle} onClick={this.handleClick} >^</button> */}
          <div className={progressBarStyles.circle} onClick={this.handleClick}>
            ^
          </div>
          <div className={progressBarStyles.svg}></div>
        </div>
      </div>
    );
  }
}
