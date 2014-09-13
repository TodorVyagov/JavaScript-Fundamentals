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
	writeTask('3. Write a script that finds the maximal sequence of equal elements in an array.');
	writeLine('Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1} -> {2, 2, 2}.');
	writeLine('<br />');

	function maximalEqualElementSequenceInArrayFinder(array) {
	    var counter = 1,
            maxCount = 0,
            maxElement;

	    for (var index = 1, len = array.length; index < len; index++) {
	        var currentElement = array[index],
	            lastElement = array[index - 1];
                
	        if (currentElement === lastElement) {
	            counter++;
	        }
	        else {
	            if (counter > maxCount) {
	                maxCount = counter;
	                maxElement = lastElement;
	            }

	            counter = 1;
	        }
	    }

	    writeLine('Maximal sequence of equal elements in array: [' + array.join(', ') + '] is "' + maxElement + '" - ' + maxCount + ' times repeated.');
	}

	maximalEqualElementSequenceInArrayFinder([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
    // End of task
}