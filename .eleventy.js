module.exports = function (eleventyConfig) {
  // Add Passthrough Copy for CSS files
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css");

  // Return Eleventy configuration options
  return {
      dir: {
          input: "src",
          output: "public",
      },
  };
};