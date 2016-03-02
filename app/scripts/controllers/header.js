'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('HeaderCtrl', ['$scope', '$location', 'LoginAPI', 'MyBoatAPI', function ($scope, $location, LoginAPI, MyBoatAPI) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.isAuth = LoginAPI.authentication.isAuth;

    MyBoatAPI.getBoat().then(function(resp){
        $scope.hasBoat = (resp.length != 0)
    })

    $scope.logout = function () {
        LoginAPI.logOut();
        $location.path('/home/');
    };
  }]);
