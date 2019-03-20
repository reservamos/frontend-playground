const withSass = require('@zeit/next-sass');
const bourbon = require('bourbon');

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: [bourbon.includePaths],
  },
});
