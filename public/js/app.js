angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
           .when('/scenario-edit', {
                templateUrl: 'views/scenarioEdit.html',
                controller: 'ScenarioEditController'
            })
           .otherwise({
                redirectTo: '/scenario-edit'
            });
    }]);
    