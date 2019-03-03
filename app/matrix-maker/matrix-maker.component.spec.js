describe('matrixMaker', function() {
    beforeEach(module('marsRoverApp'));

    describe('MatrixMakerContoller', function() {
        it('Should create a greeting with app Title `Mars Rover`', inject(function($componentController) {
            var scope = {};
            var ctrl = $componentController('matrixMaker');
    
            expect(ctrl.appTitle).toBe('Mars Rover');
        }))
    
        it('Should check the matrixSize to be 8', inject(function($componentController) {
            var scope = {};
            var ctrl = $componentController('matrixMaker');
    
            expect(ctrl.matrixSize).toBe(8);
        }))
    
        it('Should match the matrixSize to rows and columns length to be equql', inject(function($componentController) {
            var scope = {};
            var ctrl = $componentController('matrixMaker');
    
            expect(ctrl.rows.length).toBe(ctrl.matrixSize);
            expect(ctrl.columns.length).toBe(ctrl.matrixSize);
        }))
    })
    
})