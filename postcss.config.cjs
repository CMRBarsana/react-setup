const tailwindcss = require('tailwindcss');
const tailwindcssNesting = require('tailwindcss/nesting');
const postcssImport = require('postcss-import');
const postcssMinify = require('postcss-minify');
const postcssNested = require('postcss-nested');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss('tailwind.config.js'),
    tailwindcssNesting(),
    postcssMinify(),
    postcssNested(),
  ],
};
