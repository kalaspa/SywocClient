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
                return response.data;
            });
        }

        function addRanking(ranking , boatId, courseId){
            var data = "boat=" + boatId + "&course=" + courseId + "&rank=" + ranking;
            return $http.post(serviceBase + 'rankings/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response.data;
            });
        }

        function deleteCourse(course){
            return $http.delete(serviceBase + 'courses/' + course.id + '/');
        }

        function deleteRanking(ranking){
            return $http.delete(serviceBase + 'rankings/' + ranking.id + '/');
        }

        return {
            getCourses : getCourses,
            getRankings : getRankings,
            addCourse : addCourse,
            addRanking : addRanking,
            deleteRanking : deleteRanking,
            deleteCourse : deleteCourse,
        };
    }]);
