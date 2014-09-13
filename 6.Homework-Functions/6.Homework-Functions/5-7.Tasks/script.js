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
    // Task 5
    writeTask('5. Write a function that counts how many times given number appears in given array. Write a test function to check if the function is working correctly.');
    function numberInArrayCounter(array, number) {
        if (arguments.length !== 2 || !Array.isArray(array) || (typeof (number) !== 'number')) {
            writeLine('You must enter array and number to search for as  parameters!');
            return;
        }

        var counter = 0;
        for (var index = 0, len = array.length; index < len; index++) {
            if (array[index] === number) {
                counter++;
            }
        }

        writeLine('In array [' + array.join(', ') + '] number ' + number + ' is repeated ' + counter + ' times.');
        return counter;
    }

    numberInArrayCounter([1, 2, 12, 34, 17, 9, 2, 6, 2, 7, 3, 9, 2], 2);

    function test() {
        writeLine('Test function:');
        var arrTest = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
        var test1 = numberInArrayCounter(arrTest, 1);
        var test2 = numberInArrayCounter(arrTest, 2);
        var test3 = numberInArrayCounter(arrTest, 3);
        var test4 = numberInArrayCounter(arrTest, 4);
        var test5 = numberInArrayCounter(arrTest, 5);
        if ((test1 === 1) && (test2 === 2) && (test3 === 3) && (test4 === 4) && (test5 === 5)) {
            writeLine('All the tests returned true!');
        }
    }

    test();

    // Task 6
    writeTask('6. Write a function that checks if the element at given position in given array of integers is bigger than its two neighbors (when such exist).');
    function isBiggerThanNeighbors(array, index) {
        if (arguments.length !== 2 || !Array.isArray(array) || (typeof (index) !== 'number')) {
            writeLine('You must enter array and index to search for as  parameters!');
            return;
        }

        if (index >= array.length || index < 0) {
            writeLine('Index is out of range!');
            return;
        }

        if (array[index] > array[index - 1] && array[index] > array[index + 1]) {
            return true;
        }
        else {
            return false;
        }
    }

    // Task 7
    writeTask('7. Write a function that returns the index of the first element in array that is bigger than its neighbors, or -1, if there’s no such element.<br />Use the function from the previous exercise.');
    function indexOfElementBiggerThanNeighbors(array) {
        for (var index = 1, len = array.length - 1; index < len; index++) { //not including 1-st and last element in the array
            if (isBiggerThanNeighbors(array, index)) {
                return index;
            }
        }

        return -1;
    }

    function testindexOfElementBiggerThanNeighbors(array) {
        var index = indexOfElementBiggerThanNeighbors(array);
        writeLine('Array is: [' + array.join(', ') + ']');
        if (index >= 0) {
            writeLine('First element that is bigger than its neighbors is array[' + index + '] = ' + array[index]);
        }
        else {
            writeLine('There is no element bigger than its neighbors in the array.');
        }
    }

    testindexOfElementBiggerThanNeighbors([1, 2, 5, 6, 7, 8, 9]);
    testindexOfElementBiggerThanNeighbors([1, 20, 5, 6, 7, 8, 9]);
    testindexOfElementBiggerThanNeighbors([1, 2, 5, 6, 7, 10, 9]);
    // End of tasks
}