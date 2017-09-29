import React, { Component } from "react";
import ProjectPage from "../../../components/ProjectPage";
import ProjectSection from "../../../components/ProjectSection/index";
import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/styles";

class myChef extends Component {
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
        technologies={this.state.project.technologies}
        description={this.state.project.description}
        github={this.state.project.github_url}
        liveUrl={this.state.project.live_url}
        bgColor={this.state.project.background_color}
        images={this.state.project.image_urls.screenshots}
        bigPicture={this.state.project.big_picture}
      >
        <ProjectSection title="Background">
          <p>
            When I was in college, a friend of mine reached out to me about an
            idea for a company.{" "}
          </p>
        </ProjectSection>
        <ProjectSection title="Requirements" />
        <ProjectSection title="Implementation" />
        <ProjectSection title="Project Challenges" />
      </ProjectPage>
    );
  }
}

export default myChef;
