'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:RanksCtrl
 * @description
 * # RanksCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('RanksCtrl', ['$scope', '$route' , 'CoursesAPI' , 'ParticipantsAPI', function ($scope, $route, CoursesAPI, ParticipantsAPI) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    ParticipantsAPI.getBoat().then(function(response){
        $scope.boats = response;
    });

    CoursesAPI.getCourses().then(function(response){
        $scope.courses = response;
    });

    CoursesAPI.getRankings().then(function(response){
        $scope.rankings = response;
    });

    $scope.boat = function(boatId){
        for (var u in $scope.boats){
            if ($scope.boats[u].id === boatId){
                return $scope.boats[u];
            }
        }
        return null;
    };

  }]);
