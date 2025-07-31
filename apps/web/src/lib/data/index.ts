import blogs from "#blogs";
import projects from "#project";

const data = {
  blogs,
  projects,
  getBlogBySlug(slug: string) {
    return this.blogs.find((blog) => blog.slugAsParams === slug);
  },
  getProjects() {
    return projects
      .sort((a, b) => parseInt(b.sort) - parseInt(a.sort))
      .filter((project) => project.published);
  },
  getProjectBySlug(slug: string) {
    return this.projects.find((project) => project.slugAsParams === slug);
  },
};

export default data;
