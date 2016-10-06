/*************************
 Resource Module
 **************************/
(function () {
    'use strict';

    angular
        .module('JetThunder2.resource')
        /*************************
         Profile Controller
         **************************/
        .factory('BlogResource', BlogResource);

    /*************************
     Service Function
     **************************/
    BlogResource.$inject = ['$resource'];
    function BlogResource($resource) {
        return $resource('/posts/:id', {id: '@id'}, {update: {method: "PUT"}, remove: {method: "DELETE"}});
    }
})();