export default {
  layout: "layouts/post.njk",
  tags: ["posts"],
  permalink: (data) => `/posts/${data.page.fileSlug}/index.html`,
  eleventyComputed: {
    lower: (data) => {
      const posts = data.collections?.posts || [];
      const idx = posts.findIndex((post) => post.url === data.page.url);
      if (idx < 0 || idx >= posts.length - 1) return null;
      return posts[idx + 1];
    },
    higher: (data) => {
      const posts = data.collections?.posts || [];
      const idx = posts.findIndex((post) => post.url === data.page.url);
      if (idx <= 0) return null;
      return posts[idx - 1];
    }
  }
};
