module.exports = function () {
  return {
    files: [
      {
        pattern: "packages/**",
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
        pattern: "packages/**/node_modules/**/__tests__/**",
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
