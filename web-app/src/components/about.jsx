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
            "As a dedicated full stack developer I am driven by a passion for innovation and a commitment to continuous growth. With experience in both front end and back end systems, \
            I aspire to make significant strides in my career. Which has led me to recieving certifications in Machine Learning, Site Reliability Engineering, AWS Solutions Architecht and more. \
            Currently serving as a Product Architect for the Emerging Technology Research Team at Vanguard, my goal is to shape the future of technology. "
        },
        {
          id: "second-p-about",
          content:
            "Outside the scope of my work life, I find joy and inspiration in various personal hobbies. Whether it's immersing myself in the pages of a captivating book, \
            exploring virtual worlds through video games or engaging in physical activities like tennis, basketball, and snowboarding. I am also lucky enough to get to travle the world with \
            my amazing wife Amanda. Additionally, I am an avid cook, finding creative expression and relaxation in the culinary arts. There are few things I love more than getting to cook for family and friends."
        },
        {
          id: "third-p-about",
          content:
            "Born and raised in Philadelphia Pennsylvania, I hold a distinguished academic background from James Madison University, specializing in Computer Science, Robotics, and Applied Mathematics. \
            I transitioned into my current role as a Product Architect, where I lead research and proof of concepts for cutting-edge technologies. At Vanguard, I play a pivotal role in exploring \
            and implementing advancements in quantum computing, generative AI, tokenization/blockchaining and more. This role allows me to channel my expertise and passion for innovation into pioneering initiatives, \
            contributing significantly to Vanguard's technological advancements and industry leadership."
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
                  </div>                  <div className="about-me pt-4 pt-md-0">
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
