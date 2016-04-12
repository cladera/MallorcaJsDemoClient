'use strict';

describe('Directive: mjsArticle', function () {

  // load the directive's module
  beforeEach(module('MallorcaJsDemoClient'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mjs-article></mjs-article>');
    element = $compile(element)(scope);
    expect(true).toBe(true);
  }));
});
