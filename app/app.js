angular.module('marsRoverApp', [])
    .controller('MarsRoverController', ['$scope', function ($scope) {
        $scope.appTitle = 'Mars Rover';
    }]);

angular.element(function () {
    angular.bootstrap(document, ['marsRoverApp']);
});