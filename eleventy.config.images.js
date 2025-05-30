// Copied from 11ty Starter Template: https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.images.js

const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

function relativeToInputPath(inputPath, relativeFilePath) {
	let split = inputPath.split("/");
	split.pop();

	return path.resolve(split.join(path.sep), relativeFilePath);

}

function isFullUrl(url) {
	try {
		new URL(url);
		return true;
	} catch(e) {
		return false;
	}
}

module.exports = function(eleventyConfig) {
	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		// Warning: Avif can be resource-intensive so take care!
		let formats = ["avif", "webp", "svg", "gif", "gif", "auto"];
		let input;
		if(isFullUrl(src)) {
			input = src;
		} else {
			input = relativeToInputPath(this.page.inputPath, src);
		}

		let metadata = await eleventyImage(input, {
			widths: widths || ["auto"],
			formats,
			dryRun: src.endsWith(".svg"),
			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
		},
		{
			sharpOptions: {
				animated: true, // <-- This line enables animated GIFs/WebP
			},
		});

		// TODO loading=eager and fetchpriority=high
		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		return eleventyImage.generateHTML(metadata, imageAttributes);
	});
};