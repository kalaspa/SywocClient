'use strict';
angular.module('sywocClientApp')
    .run(['LoginAPI', function (LoginAPI) {
        LoginAPI.fillAuthData();
    }])
    .factory('LoginAPI', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {

        var serviceBase = 'http://localhost:8000/';
        var authServiceFactory = {};

        var _authentication = {
            isAuth: false,
            username : ""
        };

        var _saveRegistration = function (registration) {
            _logOut();
            var data = "username=" + registration.username + "&password=" + registration.password + "&email=" + registration.email ;
            return $http.post(serviceBase + 'register/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        };

        var _login = function (loginData) {
            var data = "username=" + loginData.username + "&password=" + loginData.password;
            var deferred = $q.defer();
            $http.post(serviceBase + 'api-token-auth/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
                localStorageService.set('authorizationData', { token: response.token, userName: loginData.username });
                _authentication.isAuth = true;
                _authentication.userName = loginData.userName;
                deferred.resolve(response);
            }).error(function (err, status) {
                _logOut();
                deferred.reject(err);
            });

            return deferred.promise;
        };

        var _logOut = function () {
            localStorageService.remove('authorizationData');
            _authentication.isAuth = false;
            _authentication.userName = "";
        };

        var _fillAuthData = function () {
            var authData = localStorageService.get('authorizationData');
            if (authData)
            {
                _authentication.isAuth = true;
                _authentication.userName = authData.userName;
            }
        }

        authServiceFactory.saveRegistration = _saveRegistration;
        authServiceFactory.login = _login;
        authServiceFactory.logOut = _logOut;
        authServiceFactory.fillAuthData = _fillAuthData;
        authServiceFactory.authentication = _authentication;

        return authServiceFactory;
    }]);
