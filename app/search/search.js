'use strict';

angular.module('searchApp.search', ['ui.router', 'certificationsService', 'ngTable', 'darthwade.dwLoading'])

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
      .state('search', {
          url: '/',
          templateUrl: 'search/search.html',
          controller: 'SearchCtrl as vm'
      });
}])

.controller('SearchCtrl', SearchController);

function SearchController (Certification, ngTableParams, $loading) {
    var vm = this;

    vm.filter = {};

    vm.tableParams = new ngTableParams({
        page: 1,
        count: 10
    }, {
        total: 0,
        getData: function($defer, params) {
                    $loading.start('certifications');

                    vm.filter.page = params.page() - 1;
                    vm.filter.pageSize = params.count();

                    Certification.query(vm.filter).$promise.then(function(result) {
                        params.total(result.paging.count);
                        $defer.resolve(result.data);

                        $loading.finish('certifications');
                    });
                 }
    });

    vm.submit = function() {
        vm.tableParams.page(1);
        vm.tableParams.reload();
    }
}