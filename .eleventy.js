const { DateTime } = require("luxon");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const pluginImages = require("./eleventy.config.images.js");
const { config } = require("dotenv");

module.exports = function (eleventyConfig) {
  // Add Passthrough Copy for CSS files
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("src/posts");

  // Watch Target for CSS directory
  eleventyConfig.addWatchTarget("./src/css");

  // Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg,gif}");


  // FILTERS - Modify data in template files at build time
  // Converts dates from JSDate format (Fri Dec 02 18:00:00 GMT-0600) to a locale format. https://11ty.rocks/eleventyjs/dates/
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addCollection("recentPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/**/*.md").reverse().slice(0, 3);
  });
  
  
  // Syntax Highlighting Plugin
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginImages);

  return {
	 // Control which files Eleventy will process
   templateFormats: ["md", "njk", "html", "liquid",],

    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

      dir: {
          input: "src",
          output: "_site",
          data: "_data",     
      },
  };
};