'use strict';

angular.module('sywocClientApp')
    .factory('CoursesAPI' , ['$http' , 'LoginAPI' , function($http, LoginAPI){

        var serviceBase = LoginAPI.serviceBase;

        function getCourses(){
            return $http.get(serviceBase + 'courses/').then(function(response){
                return response.data;
            });
        }

        function getRankings(){
            return $http.get(serviceBase + 'rankings/').then(function(response){
                return response.data;
            });
        }

        function addCourse(course){
            var data = "name=" + course.name + "&date=" + course.date ;
            return $http.post(serviceBase + 'courses/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        }

        function addRanking(ranking , boatId, courseId){
            var data = "boat" + boatId + "&course=" + courseId + "&rank=" + ranking.rank + "&score=" + ranking.score ;
            return $http.post(serviceBase + 'rankings/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        }

        return {
            getCourses : getCourses,
            getRankings : getRankings,
            addCourse : addCourse,
            addRanking : addRanking
        };
    }]);
