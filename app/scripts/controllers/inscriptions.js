'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:InscriptionsCtrl
 * @description
 * # InscriptionsCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('InscriptionsCtrl', ['$scope',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.boat = {};
    $scope.boat.crews = [{},{},{},{},{},{},{},{},{},{}];

}]);
