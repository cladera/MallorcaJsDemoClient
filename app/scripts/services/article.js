'use strict';

/**
 * @ngdoc service
 * @name MallorcaJsDemoClient.Article
 * @description
 * # Article
 * Factory in the MallorcaJsDemoClient.
 */
angular.module('MallorcaJsDemoClient')
  .factory('Article', function ($resource, env) {
    return $resource(env.api.endpoint+'articles/:id', {
      id: '@id'
    });
  });
