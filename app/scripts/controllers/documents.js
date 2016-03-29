'use strict';

/**
 * @ngdoc function
 * @name sywocClientApp.controller:DocumentsCtrl
 * @description
 * # DocumentsCtrl
 * Controller of the sywocClientApp
 */
angular.module('sywocClientApp')
  .controller('DocumentsCtrl', ['$scope','pdfDelegate',function ($scope, pdfDelegate) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pdfUrl = 'docs/NoR-Sywoc16.pdf';

    $scope.next = function(){
        pdfDelegate.$getByHandle('my-pdf-container').next();
    };

    $scope.prev = function(){
        pdfDelegate.$getByHandle('my-pdf-container').prev();
    };
  }]);
