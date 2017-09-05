import React, { Component } from "react";
import ProjectsDelegate from "../../utils/ProjectsDelegate";
import PropTypes from "prop-types";
import Button from "../../components/ThemedButton";
import ProjectSection from "../../components/ProjectSection";

class ProjectPage extends Component {
  constructor(props) {
    super(props);

    const projects = new ProjectsDelegate();

    this.state = {
      nextProj: projects.getNextProject(this.props.name)
    };
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  static defaultProps = {
    name: "",
    description: undefined,
    github: undefined,
    liveUrl: undefined
  };

  render(props) {
    const style = {
      button: {
        display: 'inline-block',
        padding: '0px 15px 5px 0px'
      }
    }
    let githubButton = this.props.github
      ? <Button
          label="Github"
          url={this.props.github}
        />
      : null;
    let liveUrlButton = this.props.liveUrl
      ? <Button
          label="Live Demo"
          url={this.props.liveUrl}
        />
      : null;
    let screenshotClass = this.props.bigPicture 
    ? 'screenshot-big-picture'
    : `screenshot-${this.props.name}`
    return (
      <div className={`project ${this.props.name}`}>
        <div className="hero">
          <h2 style={{color: this.props.bgColor}}>
            {this.props.name}
          </h2>
          <p>
            {this.props.description}
          </p>
        </div>
        <div className={screenshotClass} style={{backgroundImage: `url(${this.props.bgImage})`}}/>
        {this.props.children}
        <ProjectSection title="Available Links">
          <div style={style.button}>{githubButton}</div>
          <div style={style.button}>{liveUrlButton}</div>
        </ProjectSection>
      </div>
    );
  }
}

export default ProjectPage;
