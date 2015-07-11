'use strict';

describe('searchApp.search module', function() {
  var controller, http, q, scope;
  var mockBaseResponse = { data: [{firstName:'Test', lastName:'Person'}, {firstName:'Test', lastName:'Person2'}], paging: {count:2, pageSize:10, page:0, totalPages:1}};
  var mockVAResponse = { data: [{firstName:'Test', lastName:'Person'}], paging: {count:1, pageSize:10, page:0, totalPages:1}};

  beforeEach(module('searchApp.search'));

  beforeEach(inject(function($controller, $httpBackend, $q, $rootScope) {
    scope = $rootScope.$new();
    http = $httpBackend;
    controller = $controller('SearchCtrl');
    q = $q;

    scope.$filterRow = {};
    scope.$loading = false;
    scope.params = controller.tableParams;
    controller.tableParams.settings().$scope = scope;

    http.whenGET('https://my.ncarb.org/Public/api/certification/search?orderBy=name&page=0&pageSize=10')
        .respond(200, mockBaseResponse);
    http.whenGET('https://my.ncarb.org/Public/api/certification/search?orderBy=name&page=0&pageSize=10&state=VA')
        .respond(200, mockVAResponse);
  }));

  describe('search controller', function(){

    it('should load', function() {
      expect(controller).toBeDefined();
      controller.tableParams.reload();

      http.flush();
      expect(controller.tableParams.total()).toBe(2);
    });

    it('should submit filters', function() {
      expect(controller).toBeDefined();

      controller.filter.state = 'VA';
      controller.submit();

      http.flush();
      expect(controller.tableParams.total()).toBe(1);
    });

  });
});