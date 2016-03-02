'use strict';

angular.module('sywocClientApp')
    .factory('ParticipantsAPI' , ['$http' , 'LoginAPI' , function($http, LoginAPI){

        var serviceBase = LoginAPI.serviceBase;

        function getBoat(){
            return $http.get(serviceBase + 'boats/').then(function(response){
                return response.data;
            });
        }

        function getCrew(){
            return $http.get(serviceBase + 'crewmates/').then(function(response){
                return response.data;
            });
        }

        return {
            getBoat : getBoat,
            getCrew : getCrew
        };
    }]);
