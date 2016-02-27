'use strict';

/**
 * @ngdoc overview
 * @name sywocClientApp
 * @description
 * # sywocClientApp
 *
 * Main module of the application.
 */
angular
  .module('sywocClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/documents/', {
        templateUrl: 'views/documents.html',
        controller: 'DocumentsCtrl',
        controllerAs: 'documents'
      })
      .when('/inscriptions/', {
        templateUrl: 'views/inscriptions.html',
        controller: 'InscriptionsCtrl',
        controllerAs: 'inscriptions'
      })
      .when('/login/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/participants/', {
        templateUrl: 'views/participants.html',
        controller: 'ParticipantsCtrl',
        controllerAs: 'participants'
      })
      .when('/photos/', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl',
        controllerAs: 'photos'
      })
      .when('/sponsors/', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorsCtrl',
        controllerAs: 'sponsors'
      })
      .when('/us/', {
        templateUrl: 'views/us.html',
        controller: 'UsCtrl',
        controllerAs: 'us'
      })
      .when('/contact/', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
