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
	writeTask('1. Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.<br />Print the obtained array on the console.');
	var arrayOfNumbers = [];
	for (var i = 0; i < 20; i++) {
	    arrayOfNumbers[i] = i * 5;
	}

	writeLine('The array is: ' + arrayOfNumbers.join(', '));
    // End of task
}