'use strict';

angular.module('sywocClientApp')
    .factory('ParticipantsAPI' , ['$http' , 'LoginAPI' , function($http, LoginAPI){

        var serviceBase = LoginAPI.serviceBase;

        function getBoat(boat){
            return $http.get(serviceBase + 'boats/').then(function(response){
                return response.data;
            });
        }

        return {
            getBoat : getBoat
        };
    }]);
