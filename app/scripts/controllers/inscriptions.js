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
    $scope.success = "";

    $scope.registration = {
        username: "",
        password: "",
        email: ""
    };

    $scope.signUp = function () {

        InscriptionsAPI.signUp($scope.registration , $scope.boat , $scope.boat.crew , $scope.boat.number)
        .then(function(){
            $scope.success = "You registered successfully";
        },function (response) {
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
