'Use strict';

describe('InscriptionsAPI' , function() {

    // load the controller's module
    beforeEach(module('sywocClientApp'));

    var inscriptionsAPI, $httpBackend;

    beforeEach(inject(function(_inscriptionsAPI_ , _$httpBackend_){
        inscriptionsAPI = _inscriptionsAPI_;
        $httpBackend = _$httpBackend_;
    }));

    it('should implement addBoat' , function(){
        expect(inscriptionsAPI.addBoat()).toEqual(0);
    });

});
