import React from "react";

const ProjectSection = props => {
  let className = props.className ? `project-section ${props.className}` : 'project-section'
  return (
    <section className={className}>
      <h4>
        {props.title}
      </h4>
      <hr/>
      <div className="section-content">
        {props.children}
      </div>
    </section>
  );
};

ProjectSection.defaultProps = {
  className: ""
}
export default ProjectSection;
