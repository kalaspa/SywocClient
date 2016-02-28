'use strict';

angular.module('sywocClientApp')
    .factory('InscriptionsAPI' , ['$http' , function($http){
        var serviceBase = "http://localhost:8000/"

        return {
            addBoat : addBoat
        };

        function addBoat(boat){
            var data = "name=" + boat.name + "&university=" + boat.university ;
            return $http.post(serviceBase + 'boats/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        }
    }]);
