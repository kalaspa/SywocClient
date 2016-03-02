'use strict';

angular.module('sywocClientApp')
    .factory('MyBoatAPI' , ['$http' , 'LoginAPI' , function($http, LoginAPI){

        var serviceBase = LoginAPI.serviceBase;

        function getBoat(){
            return $http.get(serviceBase + 'boats/myboat/').then(function(response){
                return response.data;
            });
        }

        function getCrew(){
            return $http.get(serviceBase + 'crewmates/mycrew/').then(function(response){
                return response.data;
            });
        }

        function updateCrewmate(crewmate){
            var data = "firstname=" + crewmate.firstname + "&lastname=" + crewmate.lastname + "&boat=" + crewmate.boat;
            return $http.put(serviceBase + 'crewmates/' + crewmate.id + '/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        }

        return {
            getBoat : getBoat,
            getCrew : getCrew,
            updateCrewmate : updateCrewmate
        };
    }]);
