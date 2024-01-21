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
          content1: "Research cutting edge Generative AI topics and architechture and published an external paper on the advancements in generative AI.",
          content2: "Developed a sandbox tool, called Enterprise Lab, to allow Vanguard crew members free range to previously blocked tools and aws services.",
          content3: "Led site reliability best practices for the Enterprise lab, including scaling policies, observability and alerting."
        },
        {
          id: "tech-lead",
          title: "Technical Lead",
          date: "Nov-2020 - Dec-2023",
          content1: "Led development team of 6 developers, of AWS Glue ETL jobs as well as REST and GraphQL APIs that receive over 1 million requests per month",
          content2: "Architechted a modern ingestion pipeline accross multiple AWS services.",
          content3: "Was a leader in Site Reliability Engineering for the department, where I lead a community of practice that implemented best practices such as \
           blue/green deployments, multi-region applications and resilience testing. "
        },
        {
          id: "junior-dev",
          title: "Software Developer",
          date: "Oct-2016 - Nov-2020",
          content1: "Worked in an agile development process to maintain and enhance data sourcing applications using Java and Spring framework.",
          content2: "Built and maintained web pages using JavaScript, Java Server Pages (JSP), AngularJs and HTML.",
          content3: "Worked on a large migration effort, that included over 30 microservices, to AWS cloud services that cut department costs"
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
                              <li>{content.content1}</li>
                              <li>{content.content2}</li>
                              <li>{content.content3}</li>
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
