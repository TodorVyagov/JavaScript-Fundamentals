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
    function Solve(params) {
        // TO check if number is float!!! is not 100 points
        var N = parseInt(params[0]);
        var arr = [];

        for (var i = 1; i <= N; i++) {
            arr[i - 1] = parseInt(params[i].trim());
        }

        //writeLine(arr); // TO REMOVE!!!!!!!!!!!!!!!!!!!!!
        var maximalSum;
        var isFirst = true;
        for (var i = 0; i < arr.length; i++) {
            var subsetSum = 0;
            for (var j = i; j < arr.length; j++) {
                subsetSum += arr[j];

                if (isFirst) {
                    maximalSum = subsetSum;
                    isFirst = false;
                }

                if (maximalSum < subsetSum) {
                    maximalSum = subsetSum;
                }
            }

        }

        //writeLine(maximalSum);
        return maximalSum;
    }

    var test1 = [
        '8',
        '1',
        '6',
        '-9',
        '4',
        '4',
        '-2',
        '10',
        '-1'
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
        '- 9',
        '- 8',
        '- 8',
        '- 7',
        '- 6',
        '- 5',
        '- 1',
        '- 7',
        '- 6'
    ];

    Solve(test1);
    Solve(test2);
    Solve(test3);

    //End
}