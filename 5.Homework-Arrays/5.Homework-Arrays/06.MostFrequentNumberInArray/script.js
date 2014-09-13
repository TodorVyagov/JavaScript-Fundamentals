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
	writeTask('6. Write a program that finds the most frequent number in an array.');
	writeLine('Example: {4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3} -> 4 (5 times)');

	function mostFrequentNumberInArrayFinder(array) {
	    var counter,
            maxCount = 0,
            mostFrequentElement = array[0];

	    for (var i = 0, len = array.length; i < len - 1; i++) {
	        counter = 1;
	        for (var j = i + 1; j < len; j++) {
	            if (array[i] === array[j]) {
	                counter++;
	            }
	        }

	        if (counter > maxCount) {
	            maxCount = counter;
	            mostFrequentElement = array[i];
	        }
	    }

	    writeLine('Most frequent number in array: [' + array.join(', ') + '] is "' + mostFrequentElement + '" - (' + maxCount + ' times).');
	}

	mostFrequentNumberInArrayFinder([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);

	mostFrequentNumberInArrayFinder([4, 1, 1, 4, 2, 3, 4, 3, 4, 1, 2, 4, 9, 3, 3, 3,3]);
    // End of task
}