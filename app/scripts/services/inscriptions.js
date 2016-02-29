'use strict';

angular.module('sywocClientApp')
    .factory('InscriptionsAPI' , ['$http' , 'LoginAPI', function($http, LoginAPI){
        var serviceBase = LoginAPI.serviceBase;


        function addBoat(boat){
            var data = "name=" + boat.name + "&university=" + boat.university ;
            return $http.post(serviceBase + 'boats/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        }

        return {
            addBoat : addBoat
        };
    }]);
