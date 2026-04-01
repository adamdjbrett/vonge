export default {
  layout: "layouts/project.njk",
  tags: ["projects"],
  permalink: (data) => `/projects/${data.page.fileSlug}/index.html`,
  eleventyComputed: {
    higher: (data) => {
      const projects = data.collections?.projects || [];
      const idx = projects.findIndex((project) => project.url === data.page.url);
      if (idx <= 0) return null;
      return projects[idx - 1];
    }
  }
};
