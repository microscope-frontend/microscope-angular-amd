define([
    'app',
], function(riaangular) {
    riaangular.controller('aboutController', ['$scope',
        function($scope) {
            $scope.about = "Sample page to illustrate the angular routing system.";
        }
    ]);
});