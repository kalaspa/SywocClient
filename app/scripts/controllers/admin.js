'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('AdminCtrl', ['$scope','AdminAPI', 'ParticipantsAPI', 'MyBoatAPI', '$route', function ($scope, AdminAPI, ParticipantsAPI, MyBoatAPI, $route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    ParticipantsAPI.getBoat().then(function(response){
        $scope.boats = response;
    });

    ParticipantsAPI.getCrew().then(function(response){
        $scope.crew = response;
    });

    AdminAPI.getUsers().then(function(response){
        $scope.users = response;
        console.log($scope.users);
    });

    $scope.user = function(boat){
        for (var u in $scope.users){
            if ($scope.users[u].username === boat.owner){
                return $scope.users[u];
            }
        }
        return null;
    };

    $scope.post = function(boat , method){
        AdminAPI.post(boat , method).then(function(){
            $route.reload();
        });
    };

    $scope.toggleModify = function(crewmate){
        crewmate.fix = !crewmate.fix;
    };

    $scope.updateCrewmate = function(crewmate){
        MyBoatAPI.updateCrewmate(crewmate).then(function(){
            crewmate.fix = !crewmate.fix;
        });
    };

    $scope.toggleDelete = function(boat){
        boat.delete = !boat.delete;
    };

    $scope.deleteBoat = function(boat){
        AdminAPI.deleteBoat(boat).then(function(){
            for (var i = 0 ; i < $scope.crew.length ; i++){
                if ($scope.crew[i].boat === boat.id){
                    AdminAPI.deleteCrewmate($scope.crew[i]);
                }
            }
            AdminAPI.deleteUser($scope.user(boat));
            $route.reload();
        });
    };

  }]);
