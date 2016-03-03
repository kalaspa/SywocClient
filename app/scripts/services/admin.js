'use strict';

angular.module('sywocClientApp')
    .factory('AdminAPI' , ['$http' , 'LoginAPI', function($http, LoginAPI){
        var serviceBase = LoginAPI.serviceBase;

        function getUsers(){
            return $http.get(serviceBase + 'users/').then(function(response){
                return response.data;
            });
        }

        function deleteBoat(boat){
            return $http.delete(serviceBase + 'boats/' + boat.id + '/');
        }

        function deleteCrewmate(crewmate){
            return $http.delete(serviceBase + 'crewmates/' + crewmate.id + '/');
        }


        function deleteUser(user){
            return $http.delete(serviceBase + 'users/' + user.id + '/');
        }

        function pay(boat){
            return $http.post(serviceBase + 'boats/' + boat.id + '/pay/');
        }

        return {
            getUsers : getUsers,
            deleteBoat : deleteBoat,
            deleteCrewmate : deleteCrewmate,
            deleteUser : deleteUser,
            pay : pay
        };
    }]);
