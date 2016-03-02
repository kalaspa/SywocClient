'use strict';
angular.module('sywocClientApp')
    .factory('authInterceptorService', ['$q', '$location', 'localStorageService', function ($q, $location, localStorageService) {

    var authInterceptorServiceFactory = {};

    var request = function (config) {
        config.headers = config.headers || {};
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Token ' + authData.token;
        }
        return config;
    };

    var responseError = function (rejection) {
        if (rejection.status === 401) {
            $location.path('/login');
        }
        return $q.reject(rejection);
    };

    return {
            request : request,
            responseError : responseError
    };
}]);
