const withSass = require('@zeit/next-sass');
const bourbon = require('bourbon');

module.exports = withSass({
  cssModules: true,
  sassLoaderOptions: {
    includePaths: [bourbon.includePaths],
  },
});
