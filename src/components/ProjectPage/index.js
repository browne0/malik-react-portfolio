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

  componentDidMount() {
    document.title = this.props.title + ' | Malik Browne';
  }

  render(props) {
    const technologies = this.props.technologies.map(tech => {
      return <li key={tech}>{tech}</li>
    })
    const style = {
      button: {
        display: "inline-block",
        padding: "0px 10px 5px 0px"
      },
      img: {
        maxHeight: "500px"
      }
    };
    let githubButton = this.props.github ? (
      <div style={style.button}><Button label="Github" url={this.props.github} /></div>
    ) : null;
    let liveUrlButton = this.props.liveUrl ? (
      <div style={style.button}><Button label="Live Demo" url={this.props.liveUrl} /></div>
    ) : null;
    let screenshotClass = this.props.bigPicture
      ? "screenshot-big-picture"
      : null;

    let content = this.props.bigPicture ? (
      <div className="wrapper">
        <div className="hero">
          <h2 style={{ color: this.props.color ? this.props.color : this.props.bgColor }}>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
        <div
          className={screenshotClass}
          style={{ backgroundImage: `url(${this.props.images[0]})` }}
        />
        {this.props.children}
        <ProjectSection className="project-section-last" title="Available Links">
          <div style={style.button}>{githubButton}</div>
          <div style={style.button}>{liveUrlButton}</div>
        </ProjectSection>
      </div>
    ) : (
      <div className="wrapper">
        <div className="hero">
          <h2 style={{ color: this.props.color ? this.props.color : this.props.bgColor }}>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
        {this.props.children}
        <ProjectSection title="Technologies Used">
          <ul>
            {technologies}
          </ul>
        </ProjectSection>
        <ProjectSection className="project-section-last" title="Available Links">
          {githubButton}
          {liveUrlButton}
        </ProjectSection>
      </div>
    );

    return <div className={`project`}>{content}</div>;
  }
}

export default ProjectPage;