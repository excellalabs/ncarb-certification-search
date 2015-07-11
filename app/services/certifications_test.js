'use strict';

describe('certificationService module', function() {

    beforeEach(module('certificationsService'));

    var service, http;
    beforeEach(inject(function(Certification, $httpBackend) {
        service = Certification;
        http = $httpBackend;
    }));

    describe('query function', function(){

        it('should return the first page with 1 results', function(done) {
            var testQuery = function(certifications) {
                expect(certifications.data).toBeDefined();
                expect(certifications.data.length).toEqual(1);
                expect(certifications.paging).toBeDefined();
                expect(certifications.paging.pageSize).toEqual(10);
            };

            var failTest = function(error) {
                expect(error).toBeUndefined();
            };

            http.expectGET('https://my.ncarb.org/Public/api/certification/search?orderBy=name&page=0&pageSize=10')
                .respond(200, { data: [{firstName:'Test', lastName:'Person'}], paging: {count:1, pageSize:10, page:0, totalPages:1}});

            service.query().$promise
                .then(testQuery)
                .catch(failTest)
                .finally(done);

            http.flush();
        });

    });
});
