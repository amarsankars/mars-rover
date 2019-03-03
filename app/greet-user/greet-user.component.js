angular.module('marsRoverApp')
    .component('greetUser', {
        template: 'Hello {{$ctrl.user}}!! Welcome to, {{$MarsRoverController.appTitle}}',
        controller: function GreetUserController() {
            this.user = 'Sankar';
        }
    })