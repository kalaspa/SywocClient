'use strict';

angular.module('sywocClientApp')
    .factory('InscriptionsAPI' , ['$http' , '$q' , 'LoginAPI', function($http, $q, LoginAPI){
        var serviceBase = LoginAPI.serviceBase;


        function addBoat(boat){
            var data = "name=" + boat.name + "&university=" + boat.university ;
            return $http.post(serviceBase + 'boats/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        }

        function addCrewmate(crewmate , boatId){
            var data = "lastname=" + crewmate.lastname + "&firstname=" + crewmate.firstname + "&boat=" + boatId;
            return $http.post(serviceBase + 'crewmates/', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response;
            });
        }

        function signUp(registration , boat , crewmates , number){

            return LoginAPI.saveRegistration(registration)
            .then(function(){
                return LoginAPI.login(registration);
            }).then(function(){
                return addBoat(boat);
            }).then(function(resp){
                var boatId = resp.data.id;
                var promises = [];
                for (var i = 0 ; i < number ; i++){
                    if (crewmates[i].lastname !== "" && crewmates[i].firstname !== ""){
                        promises.push(addCrewmate( crewmates[i] , boatId));
                    }
                }
                return $q.all(promises);
            });
        }

        return {
            addBoat : addBoat,
            addCrewmate : addCrewmate,
            signUp : signUp
        };
    }]);
