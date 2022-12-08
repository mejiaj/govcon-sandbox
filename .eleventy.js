module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  let pathPrefix = "/";
  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }
  // DEBUG
  console.log(`BASEURL: ${process.env.BASEURL}`);
  console.log(`pathPrefix: ${pathPrefix}`);

  return {
    pathPrefix: pathPrefix,
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      input: "src",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
