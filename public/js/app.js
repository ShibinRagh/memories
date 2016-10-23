var app = angular.module('appMemories', ['ui.router', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider.
    state('root',{
        abstract: true,
        url:'',
        templateUrl:'views/layout.html'
    })
    .state('root.layout',{
        url:'',
        views:{
            'header@root':{
                templateUrl:'views/header.html'
            }
            
        }
    })
    .state('root.layout.dashboard',{
        url:'/dashboard',
        views:{
            'content@root':{
                templateUrl:'views/dashboard.html',
                controller: 'dashboard',
                controllerAs: 'asDashboard'
            }
        }
    })
    .state('root.layout.users',{
        url:'/users',
        views:{
            'content@root':{
                templateUrl:'views/users.html',
                controller: 'users',
                controllerAs: 'asUsers'
            }
        }
    })
    .state('root.layout.login',{
        url:'/login',
        views:{
            'content@root':{
                templateUrl:'views/login.html',
                controller: 'login',
                controllerAs: 'asLogin'
            }
        }
    })
    .state('root.layout.register',{
        url:'/register',
        views:{
            'content@root':{
                templateUrl:'views/register.html',
                controller: 'login',
                controllerAs: 'asLogin'
            }
        }
    })
});