module.exports = function(config) {
  config.set({
      frameworks: ["jasmine", "karma-typescript"],
      files: [
          "src/**/*.ts" // *.tsx for React Jsx
      ],
      preprocessors: {
          "**/*.ts": "karma-typescript" // *.tsx for React Jsx
      },
      plugins: [
          require('karma-jasmine'),
          require('karma-jasmine-html-reporter'),
          require('karma-coverage'),
        ],
      coverageReporter: {
          dir: require('path').join(__dirname, './coverage'),
          subdir: '.',
          reports: ['html', 'lcovonly', 'text-summary'],
        },
      reporters: ["progress", "karma-typescript"],
      browsers: ["Chrome"],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      singleRun: false,
      restartOnFileChange: true
  });
};