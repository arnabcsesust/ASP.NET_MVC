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

app.controller('MailListingController', ['$scope','$http',function ($scope, $http) {
    $scope.email = [];
    $http({
        method: 'GET',
        url: '/Api/getEmails'
    }).success(function (data, status, headers) {
        $scope.email = data;
    }).error(function (data, status, headers) { });
}]);

app.controller('SettingsController', function ($scope) {
    $scope.settings = {
        name: 'Md. Hasib Hasan Tarafder',
        email: 'arnab.sust@gmail.com',
        age: 28
    };

    $scope.updateSettings = function () {
        console.log('updateSettings was called!');
    }
}); 