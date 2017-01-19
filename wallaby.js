const path = require('path');

module.exports = function (wallaby) {

  process.env.NODE_PATH += path.delimiter + path.join(wallaby.projectCacheDir, 'packages');

  return {
    files: [
      {
        pattern: "packages/**",
      },
      {
        pattern: "packages/**/node_modules/**",
        ignore: true
      },
      {
        pattern: "packages/**/__tests__/**",
        ignore: true
      }
    ],

    tests: [
      {
        pattern: "packages/**/__tests__/**",
      },
      {
        pattern: "packages/**/node_modules/**",
        ignore: true
      }
    ],

    testFramework: "jasmine",

    env: {
      type: "node",
    },

    loose: true,

    delay: {
      run: 1000
    },

    filesWithNoCoverageCalculated: [
      "**/node_modules/**"
    ],

    debug: true,

    reportConsoleErrorAsError: true,
  };
};
