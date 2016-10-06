/******************************
 * Main Module
 *******************************/
(function () {
    'use strict';
    angular
        .module('JetThunder2.home')
        /******************************
         * Main Factory
         *******************************/
        .factory('homeFactory', homeFactory);

    /******************************
     * Service Function
     *******************************/
    homeFactory.$inject = ['$http', '$log', 'urlsFactory', 'BlogResource'];
    function homeFactory($http, $log, urlsFactory, BlogResource) {
        return {
            addPost: addPost,
            deletePost: deletePost,
            getBlogItems: getBlogItems,
            getPosts: getPosts,
            updatePost: updatePost
        };

        function addPost() {

        }

        function deletePost() {

        }

        function getBlogItems() {
            return $http.get(urlsFactory.blogPosts)
                .then(_getBlogItemsSuccess)
                .catch(_getBlogItemsFailure);

            function _getBlogItemsSuccess(response) {
                return response.data;
            }

            function _getBlogItemsFailure(error) {
                $log.error('XHR Failed for getBlogItems' + error.data);
                return error;
            }
        }

        function getPosts() {
            console.log('Hello');
            var test = BlogResource.query();
                test.$promise.then(_getPostsSuccess);

            function _getPostsSuccess(response) {
                console.log(response);
            }
        }

        function updatePost() {

        }
    }
})();