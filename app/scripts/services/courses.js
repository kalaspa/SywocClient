'use strict';

angular.module('sywocClientApp')
    .factory('CoursesAPI' , ['$http' , 'LoginAPI' , '$q' , function($http, LoginAPI , $q){

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

        function deleteIt(course , rankings){
            return deleteCourse(course)
            .then(function(){
                var promises = [];
                for (var i = 0 ; i < rankings.length ; i++){
                    if (rankings[i].course === course.id){
                        promises.push(deleteRanking( rankings[i]));
                    }
                }
                return $q.all(promises);
            });
        }

        function addIt(course , boats){
            return addCourse(course)
            .then(function(response){
                var promises = [];
                var courseId = response.id;
                for (var i = 0 ; i < boats.length ; i++){
                    promises.push(addRanking( i , boats[i].id , courseId));
                }
                return $q.all(promises);
            });
        }

        return {
            getCourses : getCourses,
            getRankings : getRankings,
            deleteIt : deleteIt,
            addIt : addIt
        };
    }]);
