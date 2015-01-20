module.exports = function(config) {
  config.set({

    frameworks: ['requirejs', 'mocha'],

    files: [
      {pattern: './lib/**/*.js', included: false},
      {pattern: './test/**/*.js', included: false},

      {pattern: './node_modules/should/should.js', included: false},
      './main.js'
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_DEBUG,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
