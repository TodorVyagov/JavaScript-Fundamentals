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
        //args[0] = rows, cols, jumps
        //args[1] = start pos (row, col)
        //args[2] ... [2 + jumps] coords of jumps
        var rowsColsJumps = args[0].trim().split(' ').map(Number);
        var rows = rowsColsJumps[0];
        var cols = rowsColsJumps[1];
        var jumps = rowsColsJumps[2];

        var field = [];
        var counter = 1;

        for (var row = 0; row < rows; row++) {
            field[row] = [];

            for (var col = 0; col < cols; col++) {
                field[row][col] = counter++;


                //if (field[row][col] < 10) {
                //    write('_');
                //}
                //write(field[row][col] + ' ');
            }
            //writeLine('');
        }

        //read start position
        var startPosition = args[1].trim().split(' ').map(Number);
        var currentPosition = {
            R: startPosition[0],
            C: startPosition[1]
        };

        if (currentPosition.R < 0 || currentPosition.R >= rows || currentPosition.C < 0 || currentPosition.C >= cols) {
            return 'escaped ' + 0;
        }

        //read array of jump coords
        var jumpsArr = [];

        for (var i = 2; i < jumps + 2; i++) {
            var jumpPosition = args[i].trim().split(' ').map(Number);
            var currentJump = {
                R: jumpPosition[0],
                C: jumpPosition[1]
            };

            jumpsArr.push(currentJump);
        }

        // Jumping
        var numberOfJumps = 0;
        var sumOfNumbers = field[currentPosition.R][currentPosition.C];

        while (true) {
            for (var i = 0; i < jumpsArr.length; i++) {
                //new position
                currentPosition.R += jumpsArr[i].R;
                currentPosition.C += jumpsArr[i].C;

                //check if it is out of array
                if (currentPosition.R < 0 || currentPosition.R >= rows || currentPosition.C < 0 || currentPosition.C >= cols) {
                    //writeLine('escaped ' + sumOfNumbers)
                    return 'escaped ' + sumOfNumbers;
                }

                //check if it is visited
                if (field[currentPosition.R][currentPosition.C] === '-1') {
                    return 'caught ' + numberOfJumps;
                }

                //if both false increase counter and sum
                numberOfJumps += 1;
                sumOfNumbers += field[currentPosition.R][currentPosition.C];
                field[currentPosition.R][currentPosition.C] = -1;
            }
        }
    }

    var test1 = [
        '6 7 3',
        '0 0',
        '2 2',
        '-2 2',
        '3 -1'
    ];

    Solve(test1);

    //End
}