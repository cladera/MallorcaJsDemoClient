'use strict';

/**
 * @ngdoc overview
 * @name MallorcaJsDemoClient
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('MallorcaJsDemoClient', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'MallorcaJsDemoClientConfig'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
