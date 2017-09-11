import { projects as ProjectList } from "../../data/projects.json";

class ProjectsDelegate {
  projects = ProjectList;

  getProjectIndex = project => {
    let index = this.projects.findIndex(item => item.name === project);
    return index;
  };

  getNextProject = project => {
    let index = this.getProjectIndex(project);

    if (index + 1 > this.projects.length - 1) {
      return this.projects[0];
    }

    return this.projects[index + 1];
  };
}

export default ProjectsDelegate;
