'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('LoginCtrl', ['$scope','LoginAPI' , '$location' , function ($scope , LoginAPI , $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.loginData = {
        username: "",
        password: ""
    };

    $scope.message = "";

    $scope.signIn = function () {
        LoginAPI.login($scope.loginData).then(function (response) {
            $location.path('/home/');
        },
         function (err) {
             $scope.message = err.non_field_errors[0];
             console.log(err);
         });
    };
}]);
