angular.module('marsRoverApp', [])
    .controller('MarsRoverController', ['$scope', function ($scope) {
        $scope.appTitle = 'Mars Rover';
        $scope.matrixSize = 8;

        $scope.rows = [0, 1, 2, 3, 4, 5, 6, 7];
        // function() {
        //     var rows = [];
        //     for(var i=0; i<gridSize; i++) {
        //         rows.push(i);
        //     }
        //     return rows;
        // }

        $scope.columns = [0, 1, 2, 3, 4, 5, 6, 7];
        // function() {
        //     var columns = [];
        //     for(var i=0; i<gridSize; i++) {
        //         columns.push(i);
        //     }
        //     console.log(columns);
        //     return columns;
        // }
    }]);

angular.element(function () {
    angular.bootstrap(document, ['marsRoverApp']);
});