module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.min.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'app/bower_components/angular-resource/angular-resource.min.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/ng-table/dist/ng-table.min.js',
      'app/bower_components/spin.js/spin.js',
      'app/bower_components/angular-loading/angular-loading.min.js',
      'app/search/**/*.js',
      'app/services/**/*.js'
    ],

    preprocessors: {
      'app/search/*.js': ['coverage', 'coveralls'],
      'app/services/*.js': ['coverage', 'coveralls']
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'coveralls',
            'karma-coveralls'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
