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

    // Tasks
    writeTask('1. Write an if statement that examines two integer variables and exchanges their values if the first one is greater than the second one.');
    function swapNumberValuesIfFirstIsGreater(firstNumber, secondNumber) {
        write('first number = ' + firstNumber);
        write(', second number = ' + secondNumber);
        if (firstNumber > secondNumber) {
            firstNumber ^= secondNumber;
            secondNumber ^= firstNumber;
            firstNumber ^= secondNumber;

            writeLine('First number is greater and their values were swapped.');
            writeLine('first number = ' + firstNumber);
            writeLine('second number = ' + secondNumber);
        } else {
            writeLine('First number is NOT greater than the second.')
        }
    }

    swapNumberValuesIfFirstIsGreater(4, 6);
    swapNumberValuesIfFirstIsGreater(1000, 2);

    writeTask('2. Write a script that shows the sign (+ or -) of the product of three real numbers without calculating it. Use a sequence of if statements.');
    function signOfProductOfThreeNumbers(a, b, c) {
        if (arguments.length !== 3) {
            writeLine('Incorrect number of arguments! You must enter three numbers!');
            return;
        }

        var isSignPlus;
        if (a >= 0) {
            if (b >= 0) {
                if (c >= 0) {
                    isSignPlus = true; // + * + * + = + It can be confusing, so I added some comments
                } else /* c < 0 */ {
                    isSignPlus = false; // + * + * - = -
                }
            } else /* b < 0 */ {
                if (c >= 0) {
                    isSignPlus = false; // + * - * + = -
                } else /* c < 0 */ {
                    isSignPlus = true; // + * - * - = +
                }
            }
        } else {/* a < 0 */
            if (b >= 0) {
                if (c >= 0) {
                    isSignPlus = false; // - * + * + = -
                } else /* c < 0 */ {
                    isSignPlus = true; // - * + * - = +
                }
            } else /* b < 0 */ {
                if (c >= 0) {
                    isSignPlus = true; // - * - * + = +
                } else /* c < 0 */ {
                    isSignPlus = false; // - * - * - = -
                }
            }
        }

        if (isSignPlus) {
            writeLine('The sign of product of: ' + a + ', ' + b + ' and ' + c + ' is Plus +.');
        } else {
            writeLine('The sign of product of ' + a + ', ' + b + ' and ' + c + ' is Minus -.');
        }
    }

    signOfProductOfThreeNumbers(-1, -24, 6);
    signOfProductOfThreeNumbers(-1, -24, -6);

    writeTask('3. Write a script that finds the biggest of three integers using nested if statements.');
    function findBiggestOfThreeNumbers(a, b, c) {
        if (arguments.length !== 3) {
            writeLine('Incorrect number of arguments! You must enter three numbers!');
            return;
        }

        writeLine('The three numbers are: ' + a + ', ' + b + ', ' + c);
        if (a > b) {
            if (a > c) {
                writeLine('The biggest number is a = ' + a);
                return;
            }
        } else if (a < b) {
            if (b > c) {
                writeLine('The biggest number is b = ' + b);
                return;
            }
        } else if (b < c) {
            if (a < c) {
                writeLine('The biggest number is c = ' + c);
                return;
            }
        }

        writeLine('Some of your numbers with highest value are equal!');
    }

    findBiggestOfThreeNumbers(2, 2, 10);
    findBiggestOfThreeNumbers(20, 40, 40);

    writeTask('4. Sort 3 real values in descending order using nested if statements.');
    function sortThreeRealNumbers(a, b, c) {
        if (arguments.length !== 3) {
            writeLine('Incorrect number of arguments! You must enter three numbers!');
            return;
        }

        function printResult(big, middle, small) {
            writeLine('Numbers ordered in descending order are: ' + big + ', ' + middle + ', ' + small);
        }

        writeLine('The three numbers are: ' + a + ', ' + b + ', ' + c);
        if (a > b) {
            if (b > c) {
                printResult(a, b, c);
            } else {
                if (a > c) {
                    printResult(a, c, b);
                } else {
                    printResult(c, a, b);
                }
            }
        } else if (a < b) {
            if (a > c) {
                printResult(b, a, c);
            } else {
                if (b > c) {
                    printResult(b, c, a);
                } else {
                    printResult(c, b, a);
                }
            }
        }
    }

    sortThreeRealNumbers(1, 30, -10);
    sortThreeRealNumbers(-1, 3, -5);

    writeTask('5. Write script that asks for a digit and depending on the input shows the name of that digit (in English) using a switch statement.');
    function printNameOfDigit(digit) {
        write(digit + ' is: ');
        switch (digit) {
            case 0: write('Zero'); break;
            case 1: write('One'); break;
            case 2: write('Two'); break;
            case 3: write('Three'); break;
            case 4: write('Four'); break;
            case 5: write('Five'); break;
            case 6: write('Six'); break;
            case 7: write('Seven'); break;
            case 8: write('Eight'); break;
            case 9: write('Nine'); break;
            default: write('not a digit!'); break;
        }
    }

    printNameOfDigit(5);
    writeLine('');
    printNameOfDigit(10);

    writeTask('6. Write a script that enters the coefficients a, b and c of a quadratic equation a*x2 + b*x + c = 0	and calculates and prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots.');
    function quadraticEquationSolver(a, b, c) {
        var discriminant = b * b - (4 * a * c);
        writeLine(a + '*x^2 + ' + b + '*x + ' + c  + ' = 0');
        if (discriminant < 0) {
            writeLine('The equation has not real roots.');
        } else if (discriminant === 0) {
            var root = -b / (2 * a);
            writeLine('The equation has one real root = ' + root);
        } else {
            var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            writeLine('The equation has two real roots: ' + root1 + ' and ' + root2);
        }
    }

    quadraticEquationSolver(1, 2, 2);
    quadraticEquationSolver(1, 2, 1);
    quadraticEquationSolver(-1, 1, 1);
        
    writeTask('7. Write a script that finds the greatest of given 5 variables.');
    function findGreatestOfVariables() {
        var greatest = arguments[0];
        write('Numbers are: ');
        for (var index in arguments) {
            write(arguments[index] + ' ');
            if (arguments[index] > greatest) {
                greatest = arguments[index];
            }
        }

        writeLine('The greatest number is: ' + greatest);
    }

    findGreatestOfVariables(1, 3, 10, 15, -10);
    findGreatestOfVariables(-20, -30, -10, -15, -10);

    writeTask('8. Write a script that converts a number in the range [0...999] to a text corresponding to its English pronunciation.');
    /* Examples:
	0  'Zero'
	273  'Two hundred seventy three'
	400  'Four hundred'
	501  'Five hundred and one'
	711  'Seven hundred and eleven'*/
    function convertNumberToText(number) {
        var hundreds = parseInt(number / 100);
        var decades = parseInt(number / 10) % 10;
        var ones = number % 10;
        if (number === 0) {
            writeLine('Zero');
            return;
        }

        var resultText = '';

        switch (hundreds) {
            case 1: resultText += 'One hundred '; break;
            case 2: resultText += 'Two hundred '; break;
            case 3: resultText += 'Three hundred '; break;
            case 4: resultText += 'Four hundred '; break;
            case 5: resultText += 'Five hundred '; break;
            case 6: resultText += 'Six hundred '; break;
            case 7: resultText += 'Seven hundred '; break;
            case 8: resultText += 'Eight hundred '; break;
            case 9: resultText += 'Nine hundred '; break;
        }

        if ((ones === 0 && decades !== 0) || (ones !== 0 && decades === 0)) {
            resultText += 'and ';
        }

        switch (decades) {
            case 2: resultText += 'twenty '; break;
            case 3: resultText += 'thirty '; break;
            case 4: resultText += 'fourty '; break;
            case 5: resultText += 'fifty '; break;
            case 6: resultText += 'sixty '; break;
            case 7: resultText += 'seventy '; break;
            case 8: resultText += 'eighty '; break;
            case 9: resultText += 'ninety '; break;
        }

        if (decades === 1) {
            resultText += 'and ';
            switch (ones) {
                case 0: resultText += 'ten'; break;
                case 1: resultText += 'eleven'; break;
                case 2: resultText += 'twelve'; break;
                case 3: resultText += 'thirteen'; break;
                case 4: resultText += 'fourteen'; break;
                case 5: resultText += 'fifteen'; break;
                case 6: resultText += 'sixteen'; break;
                case 7: resultText += 'seventeen'; break;
                case 8: resultText += 'eighteen'; break;
                case 9: resultText += 'nineteen'; break;
            }
        } else {
            switch (ones) {
                case 1: resultText += 'one'; break;
                case 2: resultText += 'two'; break;
                case 3: resultText += 'three'; break;
                case 4: resultText += 'four'; break;
                case 5: resultText += 'five'; break;
                case 6: resultText += 'six'; break;
                case 7: resultText += 'seven'; break;
                case 8: resultText += 'eight'; break;
                case 9: resultText += 'nine'; break;
            }
        }

        writeLine(number + ' = ' + resultText);
    }

    convertNumberToText(0);
    convertNumberToText(273);
    convertNumberToText(400);
    convertNumberToText(501);
    convertNumberToText(711);

    // End of tasks
}