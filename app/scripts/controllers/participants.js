'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:ParticipantsCtrl
 * @description
 * # ParticipantsCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('ParticipantsCtrl', ['$scope' , 'ParticipantsAPI',function ($scope , ParticipantsAPI) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.boats = ParticipantsAPI.getBoat().get();
}]);
