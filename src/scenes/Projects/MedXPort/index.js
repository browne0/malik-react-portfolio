import React, { Component } from "react";
import ProjectPage from "../../../components/ProjectPage/index";
import ProjectSection from "../../../components/ProjectSection/index";

class MedxPort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: this.props.location.state
    };
  }
  render() {
    let style = {
      title: {
        color: "red",
        fontWeight: "bold"
      }
    };
    return (
      <ProjectPage
        name={this.state.project.name}
        title={this.state.project.name}
        color="#333"
        technologies={this.state.project.technologies}
        description={this.state.project.description}
        github={this.state.project.github_url}
        liveUrl={this.state.project.live_url}
        bgColor={this.state.project.background_color}
        images={this.state.project.image_urls.screenshots}
        bigPicture={this.state.project.big_picture}
      >
        <div className="container">
          <img
            src={this.state.project.image_urls.screenshots[1]}
            alt="Three types of rich links"
            className="pic"
            style={{ width: "100%" }}
          />
        </div>
        <ProjectSection title="Background">
          <p>
            What's the worst part about going to the doctor?{" "}
            <b>
              Waiting for your appointment to go through, and the rescheduling
              of your apppointment. MedxPort was a solution to that problem.
            </b>
          </p>
          <p>
            MedxPort was my team's submission at MHacks 2016. The goal of the
            application was to provide users with an easy way to check in when
            they go to the doctor.
          </p>

          <p>
            We had 24 hours to get a working version of the app, and we were
            able to get everything except one minor feature done.
          </p>
        </ProjectSection>
        <ProjectSection title="Requirements">
          <p>The application had two parts:</p>
          <ol>
            <li>
              A web application where a user could sign up, and fill out their
              medical information
            </li>
            <li>
              An iOS application where a user could sign in, and check in via a
              QR code in the application
            </li>
          </ol>

          <p>
            For the hackathon we chose to use{" "}
            <a href="https://firebase.google.com/">Firebase</a> in order to
            create a real time database for both the iOS and Web app to consume.
            We were also encourage to use Angular, as Firebase had great
            documentation on how to implement Firebase via Angular.
          </p>
        </ProjectSection>
        <ProjectSection title="Implementation" />
        <ProjectSection title="Project Challenges" />
      </ProjectPage>
    );
  }
}

export default MedxPort;
