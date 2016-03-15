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

        LoginAPI.saveRegistration($scope.registration).then(function (resp) {

            $scope.success = "User has been registered successfully. ";
            LoginAPI.login($scope.registration).then(function (resp2){

                InscriptionsAPI.addBoat($scope.boat).then(function(resp3){

                    $scope.success += "Boat added. ";
                    for (var i = 0 ; i < $scope.boat.number ; i++){
                        var crewmate = $scope.boat.crew[i];
                        if (crewmate.lastname !== "" && crewmate.firstname !== ""){
                            InscriptionsAPI.addCrewmate(crewmate , resp3.data.id);
                        }
                    }
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
