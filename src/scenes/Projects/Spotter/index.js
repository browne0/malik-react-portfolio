import React, { Component } from "react";
import ProjectPage from "../../../components/ProjectPage";
import ProjectSection from "../../../components/ProjectSection";

class Spotter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: this.props.location.state
    };
  }
  render() {
    let style = {
      title: {
        color: this.state.project.background_color,
        fontWeight: "bold"
      }
    };
    return (
      <ProjectPage
        name={this.state.project.name}
        title={this.state.project.name}
        description={this.state.project.description}
        github={this.state.project.github_url}
        liveUrl={this.state.project.live_url}
        bgColor={this.state.project.background_color}
        technologies={this.state.project.technologies}
        images={this.state.project.image_urls.screenshots}
        bigPicture={this.state.project.big_picture}
      >
        <ProjectSection title="Background">
          <p>
            During my time in college, I helped create landing pages for several
            different groups, businesses, and people. One of the more
            interesting projects was the landing page for a fitness startup
            called <span style={style.title}>Spotter.</span>
          </p>

          <p>
            <span style={style.title}>Spotter</span> provides a fitness tracking
            device that anyone from the everyday bodybuilder to the novice can
            utilize fully.
          </p>
          <p>
            Since the team had earned the opportunity to present at TechCrunch
            in New York City, they needed a landing page for them to grow an
            email list and show off their fully functional bluetooth fitness tracker.
          </p>
        </ProjectSection>
      </ProjectPage>
    );
  }
}

export default Spotter;
