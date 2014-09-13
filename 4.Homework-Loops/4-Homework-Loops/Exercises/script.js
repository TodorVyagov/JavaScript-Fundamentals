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
    writeTask('1. Write a script that prints all the numbers from 1 to N.');
    function printNumbersFrom1toN(N) {
        write('N = ' + N + ': ');
        for (var i = 1; i <= N; i++) {
            write(i + ' ');
        }

        writeLine('');
    }

    printNumbersFrom1toN(25);
    printNumbersFrom1toN(49);

    //Task 2.
    writeTask('2. Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time.');
    function printNonDivisableTo3and7NumbersFrom1toN(N) {
        write('N = ' + N + ': ');
        for (var i = 1; i <= N; i++) {
            if (!(i % 3 === 0 && i % 7 === 0)) {
                write(i + ' ');
            }
        }

        writeLine('');
    }

    printNonDivisableTo3and7NumbersFrom1toN(49); // 21 and 42 are not printed

    //Task 3.
    writeTask('3. Write a script that finds the max and min number from a sequence of numbers.');
    function minAndMaxFinder(arrayOfNumbers) {
        var minimalNumber = arrayOfNumbers[0];
        var maximalNumber = arrayOfNumbers[0];
        for (var i = 0; i < arrayOfNumbers.length; i++) {
            if (minimalNumber > arrayOfNumbers[i]) {
                minimalNumber = arrayOfNumbers[i];
            }

            if (maximalNumber < arrayOfNumbers[i]) {
                maximalNumber = arrayOfNumbers[i];
            }
        }

        write('In the array [' + arrayOfNumbers + ']');
        write(' --- Minimal number is ' + minimalNumber);
        write(' --- Maximal number is ' + maximalNumber);
    }

    minAndMaxFinder([2, 10, 25, 8, 13, 2]);

    //Task 4
    writeTask('4. Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.');
    function lexicographicallySmallestAndLargestPropertyInObjectFinder(obj) {
        var smallest = 'zzz';
        var largest = 'aaa';
        for (var property in obj) {
            if (isLexicographicallyFirst(property, smallest) === 1) {
                smallest = property;
            }

            if (isLexicographicallyFirst(property, largest) === -1) {
                largest = property;
            }
            //writeLine(property);
        }
        
        function isLexicographicallyFirst(wordOne, wordTwo) {
            var shorterWordLength;
            if (wordOne.length < wordTwo.length) {
                shorterWordLength = wordOne.length;
            }
            else {
                shorterWordLength = wordTwo.length;
            }

            for (var letterIndex = 0; letterIndex < shorterWordLength; letterIndex++) {
                if (wordOne[letterIndex].toLowerCase() > wordTwo[letterIndex].toLowerCase()) {
                    return -1;
                }
                else if (wordOne[letterIndex].toLowerCase() < wordTwo[letterIndex].toLowerCase()) {
                    return 1;
                }
                else if (letterIndex === shorterWordLength - 1) { //if all letters up to now are equal the shorter word is lexicographically before
                    if (wordOne.length < wordTwo.length) {
                        return 1;
                    }
                    else if (wordOne.length > wordTwo.length) {
                        return -1;
                    }
                }
            }

            return 0;
        }

        writeLine('In ' + obj + ' lexicographically smallest is: "' + smallest + '" and lexicographically largest is "' + largest + '"');
    }

    lexicographicallySmallestAndLargestPropertyInObjectFinder(document);
    lexicographicallySmallestAndLargestPropertyInObjectFinder(window);
    lexicographicallySmallestAndLargestPropertyInObjectFinder(navigator);
    // End of tasks
}