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

    // Task 1.
	writeTask('1. Write an expression that checks if given integer is odd or even.');
	function oddOrEvenChecker(number) {
	    writeLine('var number = ' + number + ';');
	    if (number % 2 === 0) {
	        writeLine('Number ' + number + ' is even.');
	    } else {
	        writeLine('Number ' + number + ' is odd.');
	    }
	};

	oddOrEvenChecker(24);
	oddOrEvenChecker(61);

    // Task 2.
	writeTask('2. Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.');
	function divideBy7and5Checker(number) {
	    writeLine('var number = ' + number + ';');
	    if (number % 5 === 0 && number % 7 === 0) {
	        write('Number ' + number + ' can ');
	    } else {
	        write('Number ' + number + ' cannot ');
	    }
	    write('be divided by 5 and 7 at the same time.');
	}

	divideBy7and5Checker(70);
	divideBy7and5Checker(36);

    // Task 3.
	writeTask('3. Write an expression that calculates rectangle’s area by given width and height.');
	function calculateRectangleArea(width, height) {
	    if (arguments.length !== 2) {
	        writeLine('Incorrect number of parameters! You have to enter 2 parameters: width and height.');
	        return;
	    }

	    var area = width * height;
	    writeLine('Rectangle area = width * height = ' + width + ' * ' + height + ' = ' + area);
	    return area;
	}

	calculateRectangleArea(2, 10);
	calculateRectangleArea(1, 2, 4);

    // Task 4.
	writeTask('4. Write an expression that checks for given integer if its third digit (right-to-left) is 7. E. g. 1732 -> true.');
	function isSevenThirdDigit(number) {
	    var dividedBy100 = parseInt(number / 100),
            isTrue = false;
        
	    if (dividedBy100 % 10 === 7) {
	        isTrue = true;
	    }

	    writeLine('The statement: "Third digit (right-to-left) of number ' + number + ' is 7." is : ' + isTrue);
	}

	isSevenThirdDigit(1789);
	isSevenThirdDigit(79);


    // Task 5.
	writeTask('5. Write a boolean expression for finding if the bit 3 (counting from 0) of a given integer is 1 or 0.');
	function thirdBitOfNumber(number) {
	    writeLine(number + ' in binary numeral system is: ' + number.toString(2));
	    var bitValue = (number >> 3) & 1;
	    writeLine('The value of 3-rd bit of number ' + number + ' is: ' + bitValue);
	}

	thirdBitOfNumber(111);
	thirdBitOfNumber(4096);

    // Task 6.
	writeTask('6. Write an expression that checks if given point (x,  y) is within a circle K(O, 5).');
	function isPointInCircle(x, y) {
	    if (arguments.length !== 2) {
	        writeLine('Incorrect number of parameters! You have to enter 2 parameters: width and height.');
	        return;
	    }

	    var isInCircle = (x * x + y * y) <= 5 * 5;
	    if ( isInCircle ) {
	        writeLine('The point (' + x + ',' + y + ') is in the circle(O, 5).');
	    } else {
	        writeLine('The point (' + x + ',' + y + ') is NOT in the circle(O, 5).');    
	    }
	}

	isPointInCircle(3, 4);
	isPointInCircle(1, 5);
    
    // Task 7.
	writeTask('7. Write an expression that checks if given positive integer number n (n ≤ 100) is prime. E.g. 37 is prime.');
	function isNumberPrime(number) {
	    var maxCheckingNumber = Math.floor(Math.sqrt(number) + 0.5); //Math.floor will make 8.1 -> 8, also 8.9 -> 8 so if we add 0.5 it will round correctly
	    for (var i = 3; i <= maxCheckingNumber; i++) {
	        if (number % i === 0) {
	            writeLine('Number ' + number + ' is not prime.');
	            return;
	        }
	    }

	    writeLine('Number ' + number + ' is prime.');
	}

	isNumberPrime(51);
	isNumberPrime(37);

    // Task 8.
	writeTask('8. Write an expression that calculates trapezoid\'s area by given sides a and b and height h.');
	function trapezoidArea(a, b, h) {
	    if (arguments.length !== 3) {
	        writeLine('Incorrect number of parameters! You must enter two sides and height.');
	        return;
	    }

	    var area = (a + b) * h / 2;
	    writeLine('Trapezoid with sides a = ' + a + ', b = ' + b + ' and height h = ' + h + ' has area = ' + area);
	}

	trapezoidArea(1, 5, 2);
	trapezoidArea(1, 5);
    
    // Task 9.
	writeTask('9. Write an expression that checks for given point (x, y) if it is within the circle K((1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).');
	function isPointInCircleAndOutOfRectangle(x, y) {
	    if (arguments.length !== 2) {
	        writeLine('Incorrect number of parameters! You have to enter 2 parameters: width and height.');
	        return;
	    }

        var isInCircle = (x + 1) * (x + 1) + (y + 1) * (y + 1) <= 3 * 3;	    
        //Only one of these conditions needs to be true and the point is out of the rectangle.
        var isOutOfRectangle = x < -1 || x > 5 || y > 1 || y < -1;
        
        if (isInCircle && isOutOfRectangle) {
            writeLine('The point (' + x + ',' + y + ') is in the circle and is out of the rectangle.');
        } else if (!isInCircle && isOutOfRectangle) {
            writeLine('The point (' + x + ',' + y + ') is NOT in the circle and is out of the rectangle.');
        } else if (isInCircle && !isOutOfRectangle) {
            writeLine('The point (' + x + ',' + y + ') is in the circle and is NOT out of the rectangle.');
        } else /*(!isInCircle && !isOutOfRectangle)*/ {
            writeLine('The point (' + x + ',' + y + ') is NOT in the circle and is NOT out of the rectangle.');
        }
	}
    
	isPointInCircleAndOutOfRectangle(0, 1.5);
	isPointInCircleAndOutOfRectangle(1, 5);
	isPointInCircleAndOutOfRectangle(1, 1);
	isPointInCircleAndOutOfRectangle(4, 0);

    // End of tasks
}