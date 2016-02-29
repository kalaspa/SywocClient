'Use strict';

describe('LoginAPI' , function() {

    // load the controller's module
    beforeEach(module('sywocClientApp'));

    var LoginAPI, $httpBackend;

    beforeEach(inject(function(_LoginAPI_ , _$httpBackend_){
        LoginAPI = _LoginAPI_;
        $httpBackend = _$httpBackend_;
    }));

    it('should implement login, saveRegistration , logout , authentication and fillAuthData' , function(){
        expect(LoginAPI.login).toBeDefined();
        expect(LoginAPI.saveRegistration).toBeDefined();
        expect(LoginAPI.logOut).toBeDefined();
        expect(LoginAPI.fillAuthData).toBeDefined();
        expect(LoginAPI.authentication).toBeDefined();
    });

    it('should receive a token when loging' , function(){
        LoginAPI.login({username:"test",password:"test"}).then(function(response) {
            expect(true).toBe(true);
        }, function(response){
            expect(false).toBe(true);
        });
    });

    it('should not allow to log everybody' , function(){
        LoginAPI.login({username:"",password:""}).then(function(response) {
            expect(false).toBe(true);
        }, function(response){
            expect(true).toBe(true);
        });
    });

});
