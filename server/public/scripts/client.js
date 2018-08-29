var app = angular.module('PetHotelApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/owners', {
            templateUrl: 'views/owners.html',
            controller: 'ownersController as vm'
        })
        .when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController as vm'
        })

        .otherwise({ template: '<h1>404</h1>' });

}]);