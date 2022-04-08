module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true)
  eleventyConfig.addPassthroughCopy({
    public: '.',
    'public/img': 'assets/img',
    'node_modules/alpinejs/dist/cdn.min.js': 'assets/js/alpine.js'
  })
  eleventyConfig.addShortcode('version', function () {
    return Date.now()
  })

  return {
    templateFormats: ['html'],
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
