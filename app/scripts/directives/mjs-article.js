'use strict';

/**
 * @ngdoc directive
 * @name MallorcaJsDemoClient.directive:mjsArticle
 * @description
 * # mjsArticle
 */
angular.module('MallorcaJsDemoClient')
  .directive('mjsArticle', MjsArticleDirective);

function MjsArticleDirective(){
  return {
    restrict: 'E',
    templateUrl: 'views/mjs-article.html',
    scope: {
      article: '='
    },
    link: linkFunc,
    controller: MjsArticleDirectiveController,
    controllerAs: 'vm',
    bindToController: true
  };
  
  function linkFunc(){}
}

function MjsArticleDirectiveController(){
}

MjsArticleDirectiveController.inject = [];
