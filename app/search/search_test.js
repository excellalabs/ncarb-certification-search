'use strict';

describe('searchApp.search module', function() {
  var controller, http;

  beforeEach(module('searchApp.search'));

  beforeEach(inject(function($controller, $httpBackend) {
    http = $httpBackend;
    controller = $controller('SearchCtrl');

    http.expectGET('https://my.ncarb.org/Public/api/certification/search?orderBy=name&page=0&pageSize=10')
        .respond(200, { data: [{firstName:'Test', lastName:'Person'}], paging: {count:1, pageSize:10, page:0, totalPages:1}});
  }));

  describe('search controller', function(){

    it('should load', function() {
      expect(controller).toBeDefined();
    });

  });
});