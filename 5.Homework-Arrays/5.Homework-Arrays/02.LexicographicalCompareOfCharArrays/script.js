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

    // Task
    writeTask('2. Write a script that compares two char arrays lexicographically (letter by letter).');
    function lexicographicalComparerOfArrays(arrayOne, arrayTwo) {
        var areArraysWithDifferentLength = arrayOne.length !== arrayTwo.length;
        var shorterArrayLength = arrayOne.length < arrayTwo.length ? arrayOne.length : arrayTwo.length;

        for (var letterIndex = 0; letterIndex < shorterArrayLength; letterIndex++) {
            if (arrayOne[letterIndex].toLowerCase() > arrayTwo[letterIndex].toLowerCase()) {
                writeLine('Letter "' + arrayOne[letterIndex] + '" is lexicographically after "' + arrayTwo[letterIndex] + '".');
            }
            else if (arrayOne[letterIndex].toLowerCase() < arrayTwo[letterIndex].toLowerCase()) {
                writeLine('Letter "' + arrayOne[letterIndex] + '" is lexicographically before "' + arrayTwo[letterIndex] + '".');
            }
            else {
                writeLine('Letter "' + arrayOne[letterIndex] + '" is lexicographically the same as "' + arrayTwo[letterIndex] + '".');
            }

            if (areArraysWithDifferentLength && letterIndex === shorterArrayLength - 1) {
                writeLine('The arrays have different length.');
                return;
            }
        }
    }

    lexicographicalComparerOfArrays(['a', 'g', 'e', 'm', 'z', 'f', 'j'], ['w', 'c', 'g', 'p', 'z', 'r']);
    // End of task
}