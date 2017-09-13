import { projects as ProjectList } from "../../data/projects.json";

const webpackRequireContext = require.context(
  "!markdown-with-front-matter-loader!../../_posts",
  false,
  /.md$/
);

class PortfolioDelegate {
  projects = ProjectList;
  blogs = webpackRequireContext.keys().reduce(
    (memo, fileName) =>
      memo.concat({
        path: fileName.match(/.\/([^.]+).*/)[1],
        postData: webpackRequireContext(fileName)
      }),
    []
  ).sort((a, b) => {
    return a.postData.date_published > b.postData.date_published
  });

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

  getLatestBlog = () => {
    console.log(this.blogs)
    // once I write more blogs I'll get one of five of the latest blog posts. until then just get the latest blog
    let index = this.blogs.length - 1;

    return this.blogs[index];
  }
}

export default PortfolioDelegate;
