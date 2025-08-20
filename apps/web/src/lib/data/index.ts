import blogs from "#blogs";
import projects from "#project";

const data = {
  blogs,
  projects,
  getBlogs(limit?: number) {
    return blogs
      .filter((blog) => blog.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit ? limit : blogs.length);
  },
  getBlogBySlug(slug: string) {
    return this.blogs.find((blog) => blog.slugAsParams === slug);
  },
  getProjects(limit?: number) {
    return projects
      .sort((a, b) => parseInt(b.sort) - parseInt(a.sort))
      .filter((project) => project.published)
      .slice(0, limit ? limit : projects.length);
  },
  getProjectBySlug(slug: string) {
    return this.projects.find((project) => project.slugAsParams === slug);
  },
};

export default data;
