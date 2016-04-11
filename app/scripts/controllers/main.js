'use strict';

/**
 * @ngdoc function
 * @name MallorcaJsDemoClient.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the MallorcaJsDemoClient
 */
angular.module('MallorcaJsDemoClient')
  .controller('MainCtrl', function (env) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.apiEndpoint = env.api.endpoint;
  });
