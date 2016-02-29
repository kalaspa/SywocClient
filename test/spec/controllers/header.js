'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('sywocClientApp'));

  var HeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeaderCtrl = $controller('HeaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HeaderCtrl.awesomeThings.length).toBe(3);
  });

  it('should implement isAuth, isActive and logout' , function(){
     expect(scope.isAuth).toBeDefined();
     expect(scope.isActive).toBeDefined();
     expect(scope.logout).toBeDefined();
  });
});
