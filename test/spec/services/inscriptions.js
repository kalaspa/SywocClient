'use strict';

describe('InscriptionsAPI' , function() {

    // load the controller's module
    beforeEach(module('sywocClientApp'));

    var InscriptionsAPI, $httpBackend;

    beforeEach(inject(function(_InscriptionsAPI_ , _$httpBackend_){
        InscriptionsAPI = _InscriptionsAPI_;
        $httpBackend = _$httpBackend_;
    }));

    it('should implement addBoat' , function(){
        expect(InscriptionsAPI.addBoat).toBeDefined();
    });

});
