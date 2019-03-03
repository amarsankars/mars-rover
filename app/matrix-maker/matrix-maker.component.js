angular.module('matrixMaker')
    .component('matrixMaker', {
        templateUrl: 'matrix-maker/matrix-maker.template.html',
        controller: function MatrixMakerContoller() {
            this.appTitle = 'Mars Rover';
            this.matrixSize = 8;
    
            this.rows = [0, 1, 2, 3, 4, 5, 6, 7];
            // function() {
            //     var rows = [];
            //     for(var i=0; i<gridSize; i++) {
            //         rows.push(i);
            //     }
            //     return rows;
            // }
    
            this.columns = [0, 1, 2, 3, 4, 5, 6, 7];
            // function() {
            //     var columns = [];
            //     for(var i=0; i<gridSize; i++) {
            //         columns.push(i);
            //     }
            //     console.log(columns);
            //     return columns;
            // }
        }
    })
    // .controller('MarsRoverController', ['this', ])