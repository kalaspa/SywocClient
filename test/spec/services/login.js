'Use strict';

describe('loginAPI' , function() {

    // load the controller's module
    beforeEach(module('sywocClientApp'));

    var loginAPI, $httpBackend;

    beforeEach(inject(function(_loginAPI_ , _$httpBackend_){
        loginAPI = _loginAPI_;
        $httpBackend = _$httpBackend_;
    }));

    it('should implement login' , function(){
        expect(loginAPI.login()).toEqual(0);
    });

});
