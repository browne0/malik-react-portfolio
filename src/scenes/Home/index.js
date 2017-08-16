import React, { Component } from "react";
import { Link } from "react-router-dom";

import { projects } from "../../data/projects.json";

class Home extends Component {
  render() {
    let projectList = [];
    for (var i = 0; i < projects.length; i++) {
      let project = projects[i];
      if (project.big_picture) {
        let path = {
          pathname: project.path,
          state: project
        };
        projectList.push(
          <Link key={i} to={path} className="bigPicture">
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <div
                className="img"
                style={{
                  backgroundImage: `url(${project.image_urls.screenshots[0]})`
                }}
              />
            </div>
            <div className="overlay">
              <div className="project-information">
                <div className="description">
                  <h2>
                    {project.name}
                  </h2>
                  <p>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      } else {
        if (project.name === "Milkstarz: My YouTube Channel") {
          projectList.push(
            <a
              key={i}
              target="_blank"
              href={project.path}
              className="icon"
              style={{ backgroundColor: project.background_color }}
            >
              <img src={project.image_urls.logo} alt={project.name} />
              <div className="overlay">
                <div className="project-information">
                  <div className="description">
                    <h2>
                      {project.name}
                    </h2>
                    <p>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        } else {
          let path = {
            pathname: project.path,
            state: project
          };
          projectList.push(
            <Link
              key={i}
              to={path}
              className="icon"
              style={{ backgroundColor: project.background_color }}
            >
              <img src={project.image_urls.logo} alt={project.name} />
              <div className="overlay">
                <div className="project-information">
                  <div className="description">
                    <h2>
                      {project.name}
                    </h2>
                    <p>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      }
    }
    return (
      <div className="Home">
        <div className="hero">
          <h1>
            I create <span>beautiful</span> and <span>intuitive</span> websites
            and applications.
          </h1>
        </div>
        <div className="container">
          {projectList}
        </div>
      </div>
    );
  }
}

export default Home;
