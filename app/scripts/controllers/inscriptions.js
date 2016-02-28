'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:InscriptionsCtrl
 * @description
 * # InscriptionsCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('InscriptionsCtrl', ['$scope', '$location', 'LoginAPI', 'InscriptionsAPI', function ($scope, $location, LoginAPI, InscriptionsAPI ) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.boat = {};
    $scope.boat.crew = [{},{},{},{},{},{},{},{},{},{}];

    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        username: "",
        password: "",
        email: ""
    };

    $scope.signUp = function () {

        LoginAPI.saveRegistration($scope.registration).then(function (response) {
            $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
            LoginAPI.login($scope.registration).then(function (response2){
                InscriptionsAPI.addBoat($scope.boat).then(function(response3){
                    $scope.message += "Boat added";
                });
            });

        },
         function (response) {
             var errors = [];
             for (var key in response.data) {
                 for (var i = 0; i < response.data[key].length; i++) {
                     errors.push(key + response.data[key][i]);
                 }
             }
             $scope.message = "Failed to register user due to:" + ' ' + errors.join(' ');
         });
    };

}]);
