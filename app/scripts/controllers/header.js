'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('HeaderCtrl', ['$scope', '$location', 'LoginAPI', 'MyBoatAPI', 'AdminAPI', function ($scope, $location, LoginAPI, MyBoatAPI, AdminAPI) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.isAuth = function(){
        return LoginAPI.authentication.isAuth;
    };

    $scope.hasBoat = function(){
        return LoginAPI.authentication.hasBoat;
    };

    $scope.isAdmin = function(){
        return LoginAPI.authentication.isAdmin;
    };

    $scope.logout = function () {
        LoginAPI.logOut();
        $location.path('/home/');
    };
  }]);
