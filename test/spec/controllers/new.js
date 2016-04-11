'use strict';

describe('Controller: NewArticleCtrl', function () {

  // load the controller's module
  beforeEach(module('MallorcaJsDemoClient'));

  var NewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewCtrl = $controller('NewArticleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
});
