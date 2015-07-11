'use strict';

// Declare app level module which depends on views, and components
angular.module('searchApp', [
  'ui.router',
  'ngTable',
  'darthwade.dwLoading',
  'searchApp.search',
  'certificationsService'
])

.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/');
    }
]);
