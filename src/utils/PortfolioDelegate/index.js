import { projects as ProjectList } from "../../data/projects.json";

const webpackRequireContext = require.context(
  `!markdown-with-front-matter-loader!../../_posts`,
  true,
  /.md$/
);

class PortfolioDelegate {
  projects = ProjectList;
  blogs = webpackRequireContext
    .keys()
    .reduce(
      (memo, fileName) =>
        memo.concat({
          path: fileName.match(/.\/([^.]+).*/)[1],
          postData: webpackRequireContext(fileName)
        }),
      []
    )
    .map(blog => {
      blog.path = blog.path.split("/")[1];
      return blog;
    })
    .sort((a, b) => {
      return a.postData.date_published > b.postData.date_published;
    });

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
    // once I write more blogs I'll get one of five of the latest blog posts. until then just get the latest blog
    let index = this.blogs.length - 1;

    return this.blogs[index];
  };

  getBlogIndex = title => {
    let index = this.blogs.findIndex(blog => blog.postData.title === title);

    return index;
  };

  getNextBlog = blog => {
    let index = this.getBlogIndex(blog);

    if (index + 1 > this.blogs.length - 1) {
      return null;
    }

    return this.blogs[index + 1];
  };

  getPreviousBlog = blog => {
    let index = this.getBlogIndex(blog);

    if (index - 1 < 0) {
      return null;
    }

    return this.blogs[index - 1];
  };
}

export default PortfolioDelegate;
