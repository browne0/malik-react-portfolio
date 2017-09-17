import React, { Component } from 'react';
import ProjectPage from '../../../components/ProjectPage';
// import ProjectSection from '../../../components/ProjectSection';

class Spotter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: this.props.location.state
    }
  }
  render() {
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
        bigPicture={this.state.project.big_picture}>
      </ProjectPage>
    );
  }
}

export default Spotter;