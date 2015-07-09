'use strict';

// Declare app level module which depends on views, and components
angular.module('searchApp', [
  'ngRoute',
  'searchApp.search',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/search'});
}]);
