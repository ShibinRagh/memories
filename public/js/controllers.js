var app = angular.module('appMemories');
app.controller('login',['$scope', '$http', function($scope, $http){
    var vm = this;
    vm.data= {};
    vm.btnlogin = function(purpose){
        if(purpose === 'login'){
        console.log(vm.data);
        $http.post('/admin/login', vm.data ).then(function(response){
            console.log(response);
        }, function(response){
            console.log(response);
        });
        }else{
            $http.post('/admin/register', vm.data ).then(function(response){
                
            }, function(response){
                console.log(response);
            });
        }
    }
    vm.user = function(){
        $http.get('/admin/dashboard' ).then(function(response){
            console.log(response);
        }, function(response){
            console.log(response);
        });
    }
}]);