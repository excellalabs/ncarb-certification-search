'use strict';

angular.module('searchApp.search', ['ui.router'])

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
      .state('search', {
          url: '/',
          templateUrl: 'search/search.html',
          controller: 'SearchCtrl as vm'
      });
}])

.controller('SearchCtrl', SearchController);

function SearchController() {
    var vm = this;

    vm.submit = function() {

    }
}