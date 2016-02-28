'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('LoginCtrl', ['$scope','LoginAPI' , function ($scope , LoginAPI) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    LoginAPI.login().save({username:"akamine",password:":73E4Nxy"}).$promise.then(function(data){
        $scope.response = data;
    });

}]);
