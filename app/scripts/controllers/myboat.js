'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:MyBoatCtrl
 * @description
 * # MyBoatCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('MyBoatCtrl', ['$scope', 'MyBoatAPI', '$location' , function ($scope, MyBoatAPI, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    MyBoatAPI.getBoat().then(function(response){
        if (response.length > 0){
            $scope.boat = response[0];
        }
        else{
            $location.path("/home/");
        }
    });

    MyBoatAPI.getCrew().then(function(response){
        $scope.crew = response;
    });

    $scope.toggleModify = function(crewmate){
        crewmate.fix = ! crewmate.fix;
    };

    $scope.updateCrewmate = function(crewmate){
        MyBoatAPI.updateCrewmate(crewmate).then(function(resp){
            crewmate.fix = !crewmate.fix;
        });
    };
  }]);
