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
	writeTask('1. Write a function that returns the last digit of given integer as an English word.<br />Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine"');
	function isInt(n) {
	    //Checks if number is integer
	    return parseInt(n) === n;
	};

	function printLastLetterOfNumberAsWord(number) {
	    var isInteger = isInt(number);
	    if (!isInteger) {
	        writeLine('You have to enter integer number!');
	        return;
	    }

	    write('Last digit of number ' + number + ' is ');
	    var digit = number % 10;
	    switch (digit) {
            case 0: write('zero'); break;
            case 1: write('one'); break;
            case 2: write('two'); break;
            case 3: write('three'); break;
            case 4: write('four'); break;
            case 5: write('five'); break;
	        case 6: write('six'); break;
	        case 7: write('seven'); break;
	        case 8: write('eight'); break;
	        case 9: write('nine'); break;
	    }

	    write('(' + digit + ')');
	    writeLine('');
	}

	printLastLetterOfNumberAsWord(512);
	printLastLetterOfNumberAsWord(1024);
	printLastLetterOfNumberAsWord(12309);
    
    //Task 2
	writeTask('2. Write a function that reverses the digits of given decimal number. Example: 256 -> 652');
	function digitReverser(number) {
	    var isInteger = isInt(number);
	    if (!isInteger) {
	        writeLine('You have to enter integer number!');
	        return;
	    }

	    var reversedNumber = 0,
	        multiplier = 1;
	        arrayOfDigits = number.toString().split('');

	    for (var i = arrayOfDigits.length - 1; i >= 0; i--) {
	        var currentDigit = arrayOfDigits[i];
	        multiplier = Math.pow(10, i);
	        reversedNumber += currentDigit * multiplier;
	    }

	    writeLine('Number ' + number + ' reversed is ' + reversedNumber);
	}

	digitReverser(100);
	digitReverser(12345);
	digitReverser(1024);

    // End of tasks
}