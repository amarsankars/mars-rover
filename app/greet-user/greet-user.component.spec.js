describe('greet', function() {
    beforeEach(module('marsRoverApp'));

    describe('GreetUserController', function() {
        it('should have a user variable defined and should not be empty', inject(function($componentController) {
            var ctrl = $componentController('greetUser');

            expect(ctrl.user).toBeTruthy();
            expect(ctrl.user).toBe('Sankar');
        }))
    })
})