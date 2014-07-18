define([
    'app',
], function(riaangular) {
    riaangular.controller('homeController', ['$scope',
        function($scope) {

            $scope.title = "Angular ready to use project";
        }
    ]);
});