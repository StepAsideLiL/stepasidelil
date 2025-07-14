import blogs from "#blogs";
import projects from "#project";

const data = {
  blogs,
  projects,
  getBlogBySlug(slug: string) {
    return this.blogs.find((blog) => blog.slugAsParams === slug);
  },
  getProjects() {
    return projects;
  },
  getProjectBySlug(slug: string) {
    return this.projects.find((project) => project.slugAsParams === slug);
  },
};

export default data;
