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
    'MallorcaJsDemoClientConfig',
    'hc.marked'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewArticleCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
