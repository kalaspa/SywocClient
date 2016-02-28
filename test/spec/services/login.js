'Use strict';

describe('LoginAPI' , function() {

    // load the controller's module
    beforeEach(module('sywocClientApp'));

    var LoginAPI, $httpBackend;

    beforeEach(inject(function(_LoginAPI_ , _$httpBackend_){
        LoginAPI = _LoginAPI_;
        $httpBackend = _$httpBackend_;
    }));

    it('should implement login' , function(){
        expect(LoginAPI.login).toBeDefined();
    });

    it('should receive a token when loging' , function(){
        var token = LoginAPI.login().save({username:"akamine",password:":73E4Nxy"});
        console.log(token);
        expect(token).toBeDefined();
    });

    it('should not allow to log everybody' , function(){
        expect(LoginAPI.login().save().$resolved).toBe(false);
    });

});
