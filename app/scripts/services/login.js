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
            username : "",
            isAdmin: false,
            hasBoat: false,
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
                authentication.isAuth = true;
                authentication.username = loginData.username;
                deferred.resolve(response);

                $http.get(serviceBase + 'users/').success(function(resp){
                    authentication.isAdmin = true;
                    localStorageService.set('authorizationData', { token: response.token, username: loginData.username , isAdmin: authentication.isAdmin, hasBoat: authentication.hasBoat});
                }).error(function(err, status){
                    authentication.isAdmin = false;
                    localStorageService.set('authorizationData', { token: response.token, username: loginData.username , isAdmin: authentication.isAdmin, hasBoat: authentication.hasBoat});
                });

                $http.get(serviceBase + 'boats/myboat/').success(function(resp){
                    authentication.hasBoat = (response.length > 0);
                    localStorageService.set('authorizationData', { token: response.token, username: loginData.username , isAdmin: authentication.isAdmin, hasBoat: authentication.hasBoat});
                    console.log(localStorageService.get('authorizationData'));
                }).error(function(err,status){
                    authentication.hasBoat = false;
                    localStorageService.set('authorizationData', { token: response.token, username: loginData.username , isAdmin: authentication.isAdmin, hasBoat: authentication.hasBoat});
                });
                localStorageService.set('authorizationData', { token: response.token, username: loginData.username , isAdmin: authentication.isAdmin, hasBoat: authentication.hasBoat});
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
            authentication.isAdmin = false;
            authentication.hasBoat = false;
        };

        var fillAuthData = function () {
            var authData = localStorageService.get('authorizationData');
            if (authData)
            {
                authentication.isAuth = true;
                authentication.username = authData.username;
                authentication.isAdmin = authData.isAdmin;
                authentication.hasBoat = authData.hasBoat;
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
