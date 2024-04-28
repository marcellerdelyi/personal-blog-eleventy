// imports

const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Add Passthrough Copy for CSS files
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css");

  // FILTERS - Modify data in template files at build time
  // Converts dates from JSDate format (Fri Dec 02 18:00:00 GMT-0600) to a locale format. https://11ty.rocks/eleventyjs/dates/
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  

  // Return Eleventy configuration options
  return {
      dir: {
          input: "src",
          output: "public",
      },
  };
};

