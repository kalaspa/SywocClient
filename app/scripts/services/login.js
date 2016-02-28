'use strict';

angular.module('sywocClientApp')
    .factory('LoginAPI' , ['$resource' , function($resource){
        return {
            login : login
        };

        function login(){
            return $resource('http://localhost:8000/api-token-auth/');
        }
    }]);
