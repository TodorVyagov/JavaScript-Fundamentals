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

    // Task 1
    function Solve(params) {
        var N = parseInt(params[0]);
        var arr = params.map(Number);

        arr.splice(0, 1);
        //writeLine(arr.join(', '));
        //writeLine(arr.length);
        var subsequencesCounter = 0;
        //var isBiggerThanPrevious = true;
        var nextElement;
        var currentElement;

        for (var i = 0; i < N - 1; i++) {
            currentElement = arr[i];
            nextElement = arr[i + 1];

            if (currentElement > nextElement) {
                subsequencesCounter += 1;
                //writeLine('El ' + currentElement)
            }

        }

        if ((arr.length > 1) && (arr[arr.length - 2] <= arr[arr.length - 1])) {
            subsequencesCounter += 1;
        }

        if (arr[arr.length - 2] > arr[arr.length - 1]) {
            subsequencesCounter += 1;
        }

        //writeLine(subsequencesCounter);

        return subsequencesCounter;
    }

    var test1 = [
        '7',
        '1',
        '2',
        '-3',
        '4',
        '4',
        '0',
        '1'
    ];

    var test2 = [
        '6',
        '1',
        '3',
        '-5',
        '8',
        '7',
        '-6'
    ];

    var test3 = [
        '9',
        '1',
        '8',
        '8',
        '7',
        '6',
        '5',
        '7',
        '7',
        '6'
    ];

    Solve(test1);
    Solve(test2);
    Solve(test3);

    // End of task
}