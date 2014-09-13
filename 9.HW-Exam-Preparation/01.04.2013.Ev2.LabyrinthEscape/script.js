function global() {
    //functions to write in the html file to visualize the JavaScript operations
    function write(element) {
        var node = document.getElementById("write").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = element.toString();
    }

    function writeLine(element) {
        var node = document.getElementById("writeLine").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = element.toString();
    }

    function writeTask(element) {
        var node = document.getElementById("task").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = element.toString();
    }
    // End of visualizing functions

    // Task 2
 
    function Solve(args) {
        var rowsCols = args[0].trim().split(' ').map(Number);
        var rows = rowsCols[0];
        var cols = rowsCols[1];
        var startPosArray = args[1].trim().split(' ').map(Number);
        var currentRow = startPosArray[0];
        var currentCol = startPosArray[1];

        var directions = []; //char matrix
        for (var i = 2; i < rows + 2; i++) {
            directions[i - 2] = args[i].trim().split('');
        }

        var labyrinth = []; //number matrix
        var counter = 1;
        for (var row = 0; row < rows; row++) {
            labyrinth[row] = [];
            for (var col = 0; col < cols; col++) {
                labyrinth[row][col] = counter;
                counter += 1;

                //if (labyrinth[row][col] < 10) {
                //    write('_');
                //}

                //write(labyrinth[row][col] + ' ');
            }
            //writeLine('');
        }

        var sum = labyrinth[currentRow][currentCol];
        var visitedCellsCounter = 0;

        while (true) {
            //move player
            var currentDirection = directions[currentRow][currentCol];
            directions[currentRow][currentCol] = 'VISITED';

            switch (currentDirection) {
                case 'l': currentCol -= 1; break;
                case 'r': currentCol += 1; break;
                case 'u': currentRow -= 1; break;
                case 'd': currentRow += 1; break;
            }

            //check if out of labyrinth
            if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
                //writeLine('out ' + sum);
                return 'out ' + sum;
            }

            //check if position visited
            if (currentDirection === 'VISITED') {
                //writeLine('lost ' + visitedCellsCounter);
                return 'lost ' + visitedCellsCounter;
            }
            
            //increase sum and Mark position as visited
            sum += labyrinth[currentRow][currentCol];
            visitedCellsCounter += 1;

            //writeLine(sum);
        }

    }

    var test1 = [
        "3 4",
        "1 3",
        "lrrd",
        "dlll",
        "rddd"
    ];

    var test2 = [
        "5 8",
        "0 0",
        "rrrrrrrd",
        "rludulrd",
        "durlddud",
        "urrrldud",
        "ulllllll"
    ];

    var test3 = [
        "5 8",
        "0 0",
        "rrrrrrrd",
        "rludulrd",
        "lurlddud",
        "urrrldud",
        "ulllllll"
    ];

    writeLine(Solve(test1));
    Solve(test2);
    Solve(test3);

    //End
}