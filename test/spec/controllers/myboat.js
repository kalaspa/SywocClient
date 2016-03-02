'use strict';

describe('Controller: MyBoatCtrl', function () {

  // load the controller's module
  beforeEach(module('sywocClientApp'));

  var MyBoatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyBoatCtrl = $controller('MyBoatCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyBoatCtrl.awesomeThings.length).toBe(3);
  });
});
