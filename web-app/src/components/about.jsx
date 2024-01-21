import React from "react";
// import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "I was born and raised in Philadelphia, Pennsylvania. I graduated from James Madison University in 2016, with degrees in Computer Science and Applied Mathematics. I have been working as a software developer at Vanguard since I graduated. I am currently a \
            product architect for the Emerging Technology Research Team. I get to spend my time researching the most cutting edge technologies today such as quantum computing, generative AI, tokenization and blockchaining and more. \
            I help lead pilots and proof of concepts in these areas to help define Vanguards approach moving forward."
        },
        {
          id: "second-p-about",
          content:
            "I spend my free time reading, playing video games and playing sports, namely snowboarding, tennis and basketball. I am also an avid cooker, and there is nothing I enjoy more \
            than cooking for friends and family. I enjoy playing video games and working on personal coding projects that interest me. I am lucky  "
        },
        {
          id: "third-p-about",
          content:
            "I graduated from James Madison University in 2016, with degrees in Computer Science and Applied Mathematics. I have been working as a software developer at Vanguard since i graduated. I am currently a \
            product architect for the Emerging Technology Research Team. I get to spend my time researching the most cutting edge technologies today such as quantum computing, generative AI, tokenization and blockchaining and more. \
            I help lead pilots and proof of concepts in these areas to help define Vanguards approach moving forward."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-center">About Me</h5>
                    </div>
                    {this.state.about_me.map(content => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
