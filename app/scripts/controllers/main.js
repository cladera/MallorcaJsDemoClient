'use strict';

/**
 * @ngdoc function
 * @name MallorcaJsDemoClient.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the MallorcaJsDemoClient
 */

function MainController(Account) {
  var vm = this;
  vm.articles = [];

  function activate() {
    return getArticles();
  }
  function getArticles(){
    var promise = Account.query().$promise;
    promise.then(function(data){
      vm.articles = data;
      return vm.articles;
    });
    return promise;
  }

  activate();
}

MainController.$inject = ['Article'];

angular.module('MallorcaJsDemoClient')
  .controller('MainCtrl', MainController);
