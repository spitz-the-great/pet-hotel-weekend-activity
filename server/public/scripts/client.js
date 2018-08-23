var app = angular.module('PetHotelApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController as vm'
        })
        .when('/owners', {
            templateUrl: 'views/owners.html',
            controller: 'OwnersController as vm'
        })
        .otherwise( { template: '<h1>404</h1>' });
}]);