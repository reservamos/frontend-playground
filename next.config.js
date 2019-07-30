const withSass = require('@zeit/next-sass');
const bourbon = require('bourbon');

module.exports = withSass({
  cssModules: false,
  sassLoaderOptions: {
    includePaths: [bourbon.includePaths],
  },
});
