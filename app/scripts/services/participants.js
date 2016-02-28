'use strict';

angular.module('sywocClientApp')
    .factory('ParticipantsAPI' , ['$http' , function($http){
        return {
            getBoat : getBoat
        };

        function getBoat(boat){
            return $http.get('http://localhost:8000/boats/').then(function(response){
                console.log(response.data);
                return response.data;
            });
        }
    }]);
