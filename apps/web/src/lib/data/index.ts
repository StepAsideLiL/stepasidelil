import blogs from "#blogs";
import portfolio from "#portfolio";

const data = {
  blogs,
  getBlogBySlug(slug: string) {
    return this.blogs.find((blog) => blog.slugAsParams === slug);
  },
  getPortfolio() {
    return portfolio[0];
  },
};

export default data;
