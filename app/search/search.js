'use strict';

angular.module('searchApp.search', ['ui.router'])

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
      .state('search', {
          url: '/',
          templateUrl: 'search/search.html',
          controller: 'SearchCtrl'
      });
}])

.controller('SearchCtrl', ['$scope', function($scope) {
    $scope.submit = function() {
        
    }
}]);