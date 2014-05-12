var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../Ng_Templates/home.html',
        controller: 'HomeController'
    }).otherwise({
        redirectTo: '/'
    });
});

app.controller('HomeController', function () {

});