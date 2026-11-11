export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles");
};

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};