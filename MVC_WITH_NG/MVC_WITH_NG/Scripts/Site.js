var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../Ng_Templates/home.html',
            controller: 'HomeController'
        })
        .when('/settings', {
            templateUrl: '../Ng_Templates/settings.html',
            controller: 'SettingsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('HomeController', function ($scope) {

});

app.controller('SettingsController', function ($scope) {
    $scope.person = {
        name: 'Arnab'
    };
}); 