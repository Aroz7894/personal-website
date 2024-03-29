import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Andrew Rozniakowski</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Full Stack Engineer.",
                      "Architect.",
                      "Snowboarder.",
                      "Husband.",
                      "Back End Developer.",
                      "Tennis Player.",
                      "Front End Developer.",
                      "Chef.",
                      "Investor.",
                      "Site Reliability Engineer.",
                      "World Traveler."
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <div className="socials">
                <ul>
                  <li>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/andrew-rozniakowski-2b63a6aa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-linkedin"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Aroz7894"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-github"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
