'use strict';

describe('CoursesAPI' , function() {

    // load the controller's module
    beforeEach(module('sywocClientApp'));

    var CoursesAPI, $httpBackend;

    beforeEach(inject(function(_CoursesAPI_ , _$httpBackend_){
        CoursesAPI = _CoursesAPI_;
        $httpBackend = _$httpBackend_;
    }));

    it('should implement addBoat' , function(){
        expect(CoursesAPI.addBoat).toBeDefined();
    });

});
