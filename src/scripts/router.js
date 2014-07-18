/**
 * riaangular router.
 */
define([
        'app',
        'controllers/home/homeController',
        'controllers/home/aboutController',
    ],
    function(riaangular, homeController, aboutController) {

        //
        // Define application router.
        //
        return riaangular.config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                        controller: 'homeController',
                        templateUrl: '/templates/home/index.html'
                    }).
                when('/about', {
                    templateUrl: '/templates/home/about.html',
                    controller: 'aboutController'
                }).
                otherwise({
                    redirectTo: '/'
                });
            }
        ]);

    });