'Inscriptionse strict';

describe('Controller: InscriptionsCtrl', function () {

  // load the controller's module
  beforeEach(module('sywocClientApp'));

  var InscriptionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InscriptionsCtrl = $controller('InscriptionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InscriptionsCtrl.awesomeThings.length).toBe(3);
  });
});
