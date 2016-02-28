'use strict';

angular.module('sywocClientApp')
    .factory('ParticipantsAPI' , ['$resource' , function($resource){
        return {
            getBoat : getBoat
        };

        function getBoat(boat){
            return $resource('http://localhost:8000/boats/');
        }
    }]);
