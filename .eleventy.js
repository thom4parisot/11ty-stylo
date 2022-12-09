require('dotenv').config()
const markdownIt = require('markdown-it')

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData('layout', 'default.html')

  const md = new markdownIt({
    html: true,
    linkify: true,
    typographer: true
  })

  eleventyConfig.addFilter('md', text => md.render(text))

}
