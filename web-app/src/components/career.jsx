import React from "react";
import myImage from "../img/myImage.png";

class Career extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        }
      ],
      career_history: [
        {
          id: "current-role",
          title: "Product Architect",
          date: "Dec-2023 - Present",
          content: "New Team"
        },
        {
          id: "tech-lead",
          title: "Technical Lead",
          date: "Nov-2020 - Dec-2023",
          content: "lot of stuff"
        },
        {
          id: "junior-dev",
          title: "Software Developer",
          date: "Oct-2016 - Nov-2020",
          content: "front end backend "
        }
      ]
    };
  }

  render() {
    return (
      <section id="career" className="career-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-md-6"
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
                        <div className="title-box-2">
                          <h5 className="title-left">Skills</h5>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="career-history pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Career History</h5>
                      </div>
                      {this.state.career_history.map(content => {
                        return (
                          <div>
                            <h5>{content.title}</h5>
                            <h6>{content.date}</h6>
                            <ul>
                              <li>{content.content}</li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="certifications pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">Certifications</h5>
                    </div>
                    <ul>
                      <li>AWS Solutions Architect</li>
                      <li>Coursera Machine Learning Specialization</li>
                    </ul>
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

export default Career;
