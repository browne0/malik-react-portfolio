import React, { Component } from "react";
import ProjectPage from "../../../components/ProjectPage/index";
import ProjectSection from "../../../components/ProjectSection/index";
import Helmet from "react-helmet";
class OldPortfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: this.props.location.state
    };
  }
  render() {
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
        <Helmet title={this.state.project.name}>
          <meta name="description" content={this.state.project.description} />
          <meta
            name="keywords"
            content="old portfolio, front end development, ui/ux, web development, full stack development, malik browne, malik"
          />
          <meta property="og:title" content="Old Portfolio | Malik Browne" />
          <meta
            property="og:description"
            content={this.state.project.description}
          />
          <meta
            property="og:url"
            content="https://malikbrowne.com/old-portfolio"
          />
          <meta
            property="og:image"
            content={this.state.project.image_urls.screenshots[0]}
          />
        </Helmet>
        <ProjectSection title="Background" />
        <ProjectSection title="Requirements" />
        <ProjectSection title="Implementation" />
        <ProjectSection title="Project Challenges" />
      </ProjectPage>
    );
  }
}

export default OldPortfolio;
