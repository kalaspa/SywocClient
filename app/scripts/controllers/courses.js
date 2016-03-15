'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('CoursesCtrl', ['$scope', '$route' , 'CoursesAPI' , function ($scope, $route, CoursesAPI) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addCourse = function(){
            CoursesAPI.addCourse($scope.course).then(function(data){
                $route.reload();
            })
    };
  }]);
