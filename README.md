# Dat Ecosystem Blog

Blog for the dat-ecosystem. Built with 11ty.

## License

[Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)][CCBYNCSA]

[CCBYNCSA]: https://creativecommons.org/licenses/by-nc-sa/4.0/

## Getting Started

### 1. Clone this Repository

```
git clone https://github.com/dat-ecosystem/blog.git blog
```

### 2. Navigate to the directory

```
cd blog
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies

```
npm install
```

### 4. Edit _data/metadata.json

### 5. Run Eleventy

```
npx @11ty/eleventy
```

Or build and host locally for local development (includes watching)
```
npx @11ty/eleventy --serve
```

Or in debug mode:
```
DEBUG=* npx @11ty/eleventy
```

### Implementation Notes

* `posts/` has the blog posts but really they can live in any directory. They need only the `post` tag to be added to this collection.
* Content can be any template format (blog posts needn’t be markdown, for example). Configure your supported templates in `.eleventy.js` -> `templateFormats`.
	* Because `css` and `png` are listed in `templateFormats` but are not supported template types, any files with these extensions will be copied without modification to the output (while keeping the same directory structure).
* The blog post feed template is in `feed/feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
* This example uses three layouts:
  * `_includes/layouts/base.njk`: the top level HTML structure
  * `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
  * `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
* `_includes/postlist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.
