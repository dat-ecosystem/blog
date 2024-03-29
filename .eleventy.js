const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
// const generateSocialImages = require("@manustays/eleventy-plugin-generate-social-images");

module.exports = function(eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // // Not in use, because instead of generic social preview picture generated with this plugin
  // // we use the "cover picture" created manually for each blog post markdown file
  // // and specified in it's front matter
  // // https://abhi.page/notes/11ty-plugin-generate-social-images/
  // // https://github.com/manustays/eleventy-plugin-generate-social-images
  // // but instead see:
  // // https://obsolete29.com/posts/2021/01/03/setup-social-sharing-previews-seo-and-favicons-on-eleventy/
  // eleventyConfig.addPlugin(generateSocialImages, {
  //   promoImage: "./src/img/dat-logo.svg",
  //   outputDir: "./docs/img/preview",
  //   urlPath: "/img/preview",
  //   siteName: "blog.dat-ecosystem.org",
  //   titleColor: "#cc87bb",
  //   lineBreakAt: 30,
  //   bgGradient: ['#4ab657', '#4ab657'],
  // });

  // Alias `layout: post` to `layout: layouts/post.njk`
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("d LLLL yyyy");
  });

  eleventyConfig.addFilter("postTag", tags => {
    return (tags || []).find(tag => tag != 'post' && tag != 'posts' && tag != 'home' && tag != 'error');
  });

  eleventyConfig.addFilter("exec", prop => {
    console.log({ exec: prop })
    if (typeof prop === 'function') {
      prop = prop()
    }
    return prop
  });

  eleventyConfig.addFilter("bodyClass", tags => {
    if (!tags) {
      tags = []
    }
    let type = 'other'
    if (tags.includes('post') || tags.includes('posts')) {
      type = 'post'
    } else if (tags.includes('home')) {
      type = 'home'
    } else if (tags.includes('error')) {
      type = 'error'
    }
    return `${type}-template`
  });

  eleventyConfig.addFilter("headerTemplate", header => {
    return ''
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", function (array, n) {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  eleventyConfig.addFilter("filterTagList", tags => {
    // should match the list in tags.njk
    return (tags || []).filter(tag => ["all", "nav", "post", "posts", "home"].indexOf(tag) === -1);
  })

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return [...tagSet];
  });

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("content");

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('docs/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "liquid",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // Opt-out of pre-processing global data JSON files: (default: `liquid`)
    dataTemplateEngine: false,

    // These are all optional (defaults are shown):
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "docs"
    }
  };
};
