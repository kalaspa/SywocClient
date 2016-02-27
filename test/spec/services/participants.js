'use strict';

describe('ParticipantsAPI' , function() {

    // load the controller's module
    beforeEach(module('sywocClientApp'));

    var ParticipantsAPI, $httpBackend;

    beforeEach(inject(function(_ParticipantsAPI_ , _$httpBackend_){
        ParticipantsAPI = _ParticipantsAPI_;
        $httpBackend = _$httpBackend_;
    }));

    it('should implement addBoat' , function(){
        expect(ParticipantsAPI.getBoat()).toEqual(0);
    });

});
