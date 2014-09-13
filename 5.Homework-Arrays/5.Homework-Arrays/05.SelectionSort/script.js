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
    writeTask('5. Sorting an array means to arrange its elements in increasing order.<br />Write a script to sort an array.<br />Use the "selection sort" algorithm:<br />Find the smallest element, move it at the first position,<br />find the smallest from the rest, move it at the second position, etc.');

    function selectionSort(array) {
        writeLine('This is array: ' + array.join(', '));
        var len = array.length,
            indexOfSmallestElement;
        for (var indexOfSortedArray = 0; indexOfSortedArray < len - 1; indexOfSortedArray++) {
            indexOfSmallestElement = indexOfSortedArray;
            for (var index = indexOfSortedArray; index < len; index++) {
                if (array[indexOfSmallestElement] > array[index]) {
                    swapValuesInArray(indexOfSmallestElement, index);
                }
            }
        }

        function swapValuesInArray(indexOne, indexTwo) {
            var oldValue = array[indexOne];
            array[indexOne] = array[indexTwo];
            array[indexTwo] = oldValue;
        }

        writeLine('The is sorted array: ' + array.join(', '));
    }

    selectionSort([10, 8, 9, -20, 4, 5]);
    // End of task
}