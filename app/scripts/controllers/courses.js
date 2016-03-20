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
        $scope.boats = response;
    });

    CoursesAPI.getCourses().then(function(response){
        $scope.courses = response;
    });

    CoursesAPI.getRankings().then(function(response){
        $scope.rankings = response;
    });

    $scope.addCourse = function() {
        CoursesAPI.addCourse($scope.course).then(function(response){
            $scope.message = "Course added";
            console.log(response);
            var courseId = response.id;
            for (var i = 0 ; i < $scope.boats.length ; i++){
                CoursesAPI.addRanking( i , $scope.boats[i].id , courseId);
            }
        },function (err) {
             $scope.message = err.non_field_errors[0];
         }
        );
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
        CoursesAPI.deleteCourse(course).then(function(){
            for (var i = 0 ; i < $scope.rankings.length ; i++){
                if ($scope.rankings[i].course === course.id){
                    CoursesAPI.deleteRanking($scope.rankings[i]);
                }
            }
            $route.reload();
        });
    };
  }]);
