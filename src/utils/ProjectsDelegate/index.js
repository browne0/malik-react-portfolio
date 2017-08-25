import { projects as ProjectList } from "../../data/projects.json";

class ProjectsDelegate {
  projects = ProjectList;

  getProjectIndex = project => {
    this.projects.findIndex(item => item.name === project.name);
  };

  getNextProject = project => {
    let index = this.getProjectIndex(project);

    if (index + 1 > this.projects.length - 1) {
      return this.projects[0];
    }

    return this.projects[index + 1];
  };

  getPrevProject = project => {
    let index = this.getProjectIndex(project);

    if (index - 1 < 0) {
      return this.projects[this.projects.length - 1];
    }

    return this.projects[index - 1];
  };

  getProjectsMinusCurrent = project => {
    let projects_copy = this.projects.slice();
    let index = this.getProjectIndex(project);

    if (index > -1) {
      projects_copy.splice(index, 1);
    }

    return projects_copy;
  };
}

export default ProjectsDelegate;
