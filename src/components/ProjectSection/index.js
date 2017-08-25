import React from "react";

const ProjectSection = props => {
  return (
    <section className="project-section">
      <h4>
        {props.title}
      </h4>
      <div className="section-content">
        {props.children}
      </div>
    </section>
  );
};

export default ProjectSection;
