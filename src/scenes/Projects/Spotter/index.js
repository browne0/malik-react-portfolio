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
            interesting projects I worked on was the landing page for a fitness
            startup called <span style={style.title}>Spotter.</span>
          </p>

          <p>
            <span style={style.title}>Spotter</span> provides a fitness tracking
            device that any person from the everyday bodybuilder to the novice
            can utilize fully.
          </p>
        </ProjectSection>
        <ProjectSection title="Requirements">
          <p>
            Since the team had earned the opportunity to present at TechCrunch
            in New York City, they needed a landing page for them to do perform
            the following tasks:
          </p>
          <ol>
            <li>Show off their awesome product</li>
            <li>Provide an option to join their email list for updates</li>
            <li>
              Link their social media to provide live updates from the team
            </li>
          </ol>

          <p>
            I also wanted to learn more about parallax scrolling and using{" "}
            <a href="http://imakewebthings.com/waypoints/">Waypoints</a> in
            websites, so I added those as requirements as well.
          </p>
        </ProjectSection>
        <ProjectSection title="Implementation" />
        <ProjectSection title="Project Challenges" />
      </ProjectPage>
    );
  }
}

export default Spotter;
