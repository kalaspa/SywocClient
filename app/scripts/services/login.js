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
            var data = "username=" + registration.username + "&password=" + registration.password + "&email=" + registration.email + "&secret_code=" + registration.code;
            return $http.post(serviceBase + 'register/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        };

        var logIn = function (loginData) {
            var data = "username=" + loginData.username + "&password=" + loginData.password;
            var deferred = $q.defer();
            $http.post(serviceBase + 'api-token-auth/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
                authentication.isAuth = true;
                authentication.username = loginData.username;
                authentication.token = response.token;
                deferred.resolve(response);

                localStorageService.set('authorizationData', { token: response.token, username: loginData.username , isAdmin: authentication.isAdmin, hasBoat: authentication.hasBoat});
            }).error(function (err, status) {
                logOut();
                deferred.reject(err);
            });

            return deferred.promise;
        };

        var login = function (loginData){
            var deferred = $q.defer();

            logIn(loginData).then(function(response){
                $http.get(serviceBase + 'users/').then(function(){
                    authentication.isAdmin = true;
                    return $http.get(serviceBase + 'boats/myboat/');
                }, function(){
                    authentication.isAdmin = false;
                    return $http.get(serviceBase + 'boats/myboat/');
                })
                .then(function(resp){
                    authentication.hasBoat = (resp.data.length > 0);
                    localStorageService.set('authorizationData', { token: authentication.token, username: loginData.username , isAdmin: authentication.isAdmin, hasBoat: authentication.hasBoat});
                    deferred.resolve(response);
                } , function(){
                    authentication.hasBoat = false;
                    localStorageService.set('authorizationData', { token: authentication.token, username: loginData.username , isAdmin: authentication.isAdmin, hasBoat: authentication.hasBoat});
                    deferred.resolve(response);
                });
            } , function(error){
                deferred.reject(error);
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
