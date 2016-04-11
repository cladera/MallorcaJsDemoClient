'use strict';

/**
 * @ngdoc function
 * @name MallorcaJsDemoClient.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the MallorcaJsDemoClient
 */

function NewArticleController(Article, $location){
  var vm = this;
  vm.submit = submit;

  function submit() {
    var promise = Article.save(vm.article).$promise;
    promise.then(function(){
      $location.path('/');
    });
    return promise;
  }
}

NewArticleController.$inject = ['Article', '$location'];

angular.module('MallorcaJsDemoClient')
  .controller('NewArticleCtrl', NewArticleController);
