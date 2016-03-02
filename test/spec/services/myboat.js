'use strict';

describe('MyBoatAPI' , function() {

    // load the controller's module
    beforeEach(module('sywocClientApp'));

    var MyBoatAPI, $httpBackend;

    beforeEach(inject(function(_MyBoatAPI_ , _$httpBackend_){
        MyBoatAPI = _MyBoatAPI_;
        $httpBackend = _$httpBackend_;
    }));

});
