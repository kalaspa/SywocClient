'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('CoursesCtrl', ['$scope', '$route' , 'CoursesAPI' , 'ParticipantsAPI', function ($scope, $route, CoursesAPI, ParticipantsAPI) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.message = "";
    $scope.success = "";

    ParticipantsAPI.getBoat().then(function(response){
        $scope.boats = [];
        for (var i = 0 ; i < response.length ; i++){
            if (!response[i].abandon || response[i].abandon == null){
                $scope.boats.push(response[i]);
            }
        }
    });

    CoursesAPI.getCourses().then(function(response){
        $scope.courses = response;
    });

    CoursesAPI.getRankings().then(function(response){
        $scope.rankings = response;
    });

    $scope.addCourse = function() {
        CoursesAPI.addIt($scope.course , $scope.boats).then(function(){
            $route.reload();
        });
    };

    $scope.boat = function(boatId){
        for (var u in $scope.boats){
            if ($scope.boats[u].id === boatId){
                return $scope.boats[u];
            }
        }
        return null;
    };

    $scope.toggleDelete = function(course){
        course.delete = !course.delete;
    };

    $scope.deleteCourse = function(course){
        CoursesAPI.deleteIt(course , $scope.rankings).then(function(){
            $route.reload();
        });
    };
  }]);
