import { projects as ProjectList } from "../../data/projects.json";
import {createClient} from 'contentful';

class PortfolioDelegate {
  projects = ProjectList;

  getBlogs = () => {
    let client = createClient({
      space: 'vr1jne1k56yv',
      accessToken: 'e54141f9d445d4c967173c8ae71f27ee05777a67ee45eef8be8b44ca487831dc'
    })

    return client.getEntries({
      content_type: '2wKn6yEnZewu2SCCkus4as'
    })
  }

  getProjectIndex = name => {
    let index = this.projects.findIndex(item => item.name === name);
    return index;
  };

  getNextProject = project => {
    let index = this.getProjectIndex(project);

    if (index + 1 > this.projects.length - 1) {
      return this.projects[0];
    }

    return this.projects[index + 1];
  };

  getLatestBlog = () => {
    
    let index = this.blogs.length - 1;

    return this.blogs[index];
  };

  getNextBlog = (blogArray, title) => {
    let index = blogArray.findIndex(blog => blog.fields.title === title);

    if (index + 1 > blogArray.length - 1) {
      return null;
    }

    return blogArray[index + 1];
  };

  getPreviousBlog = (blogArray, title) => {
    let index = blogArray.findIndex(blog => blog.fields.title === title);    

    if (index - 1 < 0) {
      return null;
    }

    return blogArray[index - 1];
  };
}

export default PortfolioDelegate;
