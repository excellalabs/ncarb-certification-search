var certificationsService = angular.module('certificationsService', ['ngResource']);

certificationsService.factory('Certification', ['$resource',
    function($resource) {
        return $resource(
            'https://my.ncarb.org/Public/api/certification/search', {}, {
                query: {
                    method: 'GET',
                    params: { pageSize:'10', page:'0', orderBy:'name'},
                    isArray: false
                }
            }
        );
    }
]);