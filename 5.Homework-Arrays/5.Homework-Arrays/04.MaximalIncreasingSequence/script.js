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
	writeTask('4. Write a script that finds the maximal increasing sequence in an array.');
	writeLine('Example: {3, 2, 3, 4, 2, 2, 4} -> {2, 3, 4}.');

	function maximalIncreasingSequenceInArrayFinder(array) {
	    var counter = 1,
            maxCount = 0,
            indexOfMaxElement;

	    for (var index = 1, len = array.length; index < len; index++) {
	        var currentElement = array[index],
	            lastElement = array[index - 1];

	        if (currentElement > lastElement) { // they do not need to be consecutive
	            counter++;
	        }
	        else {
	            if (counter > maxCount) {
	                maxCount = counter;
	                indexOfMaxElement = index - 1;
	            }

	            counter = 1;
	        }
	    }

	    write('Maximal increasing sequence of elements in array: [' + array.join(', ') + '] is [');
	    for (var i = indexOfMaxElement - maxCount + 1; i <= indexOfMaxElement; i++) {
	        write(array[i] + ' ');
	    }

	    write(']');
	    writeLine('');
	}

	maximalIncreasingSequenceInArrayFinder([3, 2, 3, 4, 2, 2, 4]);
	maximalIncreasingSequenceInArrayFinder([68, 3, 20, 30, 40, 2, 60, 28, 32]);

    // End of task
}