/**
 * riaangular angular application.
 */
define([
        'angular'
    ],
    function(angular) {

        //
        // Create angular application.
        //
        var riaangular = angular.module('riaangular', []);

        //
        // Configure httpProvider to use cross domain ajax request.
        //
        riaangular.config(['$httpProvider',
            function($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
            }
        ]);

        return riaangular;
    });