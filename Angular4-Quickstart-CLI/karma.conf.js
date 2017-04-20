// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-junit-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('karma-phantomjs-launcher'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false  // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'json'],
      dir: './dist/reports/coverage',
      fixWebpackSourcePaths: true
    },
    junitReporter: {
      outputDir: './dist/reports/unit',
      outputFile: undefined,
      useBrowserName: true,
      suite: ''
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage ?
      ['progress', 'coverage-istanbul', 'junit']
      : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: !(config.angularCli && config.angularCli.codeCoverage),
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
