// describe('MarsRoverController', function() {
//     beforeEach(module('marsRoverApp'));

//     it('Should create a greeting with app Title `Mars Rover`', inject(function($controller) {
//         var scope = {};
//         var ctrl = $controller('MarsRoverController', {$scope: scope});

//         expect(scope.appTitle).toBe('Mars Rover');
//     }))

//     it('Should check the matrixSize to be 8', inject(function($controller) {
//         var scope = {};
//         var ctrl = $controller('MarsRoverController', {$scope: scope});

//         expect(scope.matrixSize).toBe(8);
//     }))

//     it('Should match the matrixSize to rows and columns length to be equql', inject(function($controller) {
//         var scope = {};
//         var ctrl = $controller('MarsRoverController', {$scope: scope});

//         expect(scope.rows.length).toBe(scope.matrixSize);
//         expect(scope.columns.length).toBe(scope.matrixSize);
//     }))
// })