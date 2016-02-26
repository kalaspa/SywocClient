'Use strict';

describe('Controller: loginCtrl', function () {

  // load the controller's module
  beforeEach(module('sywocClientApp'));

  var loginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    loginCtrl = $controller('loginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
      expect(loginCtrl.awesomeThings.length).toBe(3);
  });
});
