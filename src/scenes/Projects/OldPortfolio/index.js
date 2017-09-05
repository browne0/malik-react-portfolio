import React, { Component } from 'react';
import ProjectPage from '../../../components/ProjectPage/index';

class OldPortfolio extends Component {
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
      description={this.state.project.description}
      github={this.state.project.github_url}
      liveUrl={this.state.project.live_url}
      bgColor={this.state.project.background_color}
      bgImage={this.state.project.image_urls.screenshots[0]}
      bigPicture={this.state.project.big_picture}>

    </ProjectPage>
    );
  }
}

export default OldPortfolio;