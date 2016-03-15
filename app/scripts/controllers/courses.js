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
  }]);
