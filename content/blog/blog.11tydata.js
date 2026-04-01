export default {
  eleventyComputed: {
    layout: (data) => (data.page.fileSlug === "index" ? data.layout : "layouts/post.njk"),
    tags: (data) => (data.page.fileSlug === "index" ? [] : ["posts"]),
    permalink: (data) =>
      data.page.fileSlug === "index" ? data.permalink : `/posts/${data.page.fileSlug}/index.html`,
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
