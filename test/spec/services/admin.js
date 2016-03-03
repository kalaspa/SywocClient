'use strict';

describe('AdminAPI' , function() {

    // load the controller's module
    beforeEach(module('sywocClientApp'));

    var AdminAPI, $httpBackend;

    beforeEach(inject(function(_AdminAPI_ , _$httpBackend_){
        AdminAPI = _AdminAPI_;
        $httpBackend = _$httpBackend_;
    }));

});
