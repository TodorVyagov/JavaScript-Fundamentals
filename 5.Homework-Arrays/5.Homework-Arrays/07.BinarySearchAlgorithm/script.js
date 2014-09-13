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
    writeTask('7. Write a program that finds the index of given element in a sorted array of integers by using the binary search algorithm.');

    function binarySearch(array, key) {
        //the array has to be sorted
        writeLine('Initial array: ' + array.join(', '));
        array = array.sort(function (a, b) { return a - b });
        writeLine('Sorted array: ' + array.join(', '));
        writeLine('Element to search for: ' + key);

        function search() {
            // continue searching while [imin,imax] is not empty
            var imin = 0,
                imid,
                imax = array.length - 1;
            while (imax >= imin) {
                // calculate the midpoint for roughly equal partition
                imid = Math.floor((imin + imax) / 2);
                if (array[imid] === key) {
                    // key found at index imid
                    return imid;
                }   // determine which subarray to search
                else if (array[imid] < key) {
                    // change min index to search upper subarray
                    imin = imid + 1;
                }
                else { // change max index to search lower subarray
                    imax = imid - 1;
                }
            }

            // key was not found
            return -1;
        }

        var indexOfElement = search();

        if (indexOfElement >= 0) {
            writeLine('Element was found: array[' + indexOfElement + '] = ' + key);
        }
        else {
            writeLine(key + ' was not found in the array!');
        }
    }

    binarySearch([3, 21, 1, 100, 13, 24, 11, 10], 24);
    writeLine('.');
    binarySearch([3, 21, 1, 100, 13, 24, 11, 10], 240);

    // End of task
}