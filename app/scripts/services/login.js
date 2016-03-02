'use strict';
angular.module('sywocClientApp')
    .run(['LoginAPI', function (LoginAPI) {
        LoginAPI.fillAuthData();
    }])
    .factory('LoginAPI', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {

        var serviceBase = 'http://localhost:8000/';
        var authServiceFactory = {};

        var authentication = {
            isAuth: false,
            username : ""
        };

        var saveRegistration = function (registration) {
            logOut();
            var data = "username=" + registration.username + "&password=" + registration.password + "&email=" + registration.email ;
            return $http.post(serviceBase + 'register/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        };

        var login = function (loginData) {
            var data = "username=" + loginData.username + "&password=" + loginData.password;
            var deferred = $q.defer();
            $http.post(serviceBase + 'api-token-auth/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
                localStorageService.set('authorizationData', { token: response.token, username: loginData.username });
                authentication.isAuth = true;
                authentication.username = loginData.username;
                deferred.resolve(response);
            }).error(function (err, status) {
                logOut();
                deferred.reject(err);
            });

            return deferred.promise;
        };

        var logOut = function () {
            localStorageService.remove('authorizationData');
            authentication.isAuth = false;
            authentication.username = "";
        };

        var fillAuthData = function () {
            var authData = localStorageService.get('authorizationData');
            if (authData)
            {
                authentication.isAuth = true;
                authentication.username = authData.username;
            }
        };
        return {
            saveRegistration : saveRegistration,
            login : login,
            logOut : logOut,
            fillAuthData : fillAuthData,
            authentication : authentication,
            serviceBase : serviceBase,
        };
    }]);
