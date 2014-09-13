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
    writeTask('1. Write a JavaScript function reverses string and returns it.<br />Example: "sample" -> "elpmas".');
    function stringReverser(str) {
        if (typeof (str) !== 'string') {
            writeLine('You must enter string!');
        }
        var reversed = '';
        for (var i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }

        return reversed;
    }

    writeLine('Reversed string of "sample" is "' + stringReverser('sample') + '".');
    writeLine('Reversed string of "christmas" is "' + stringReverser('christmas') + '".');
    
    // Task 2
    writeTask('2. Write a JavaScript function to check if in a given expression the brackets are put correctly.<br />Example of correct expression: ((a+b)/5-d).<br />Example of incorrect expression: )(a+b)).');
    function areBracketsCorrect(expression) {
        if (typeof (expression) !== 'string') {
            writeLine('Invalid input expression.')
        }

        var bracketCounter = 0;

        for (var char = 0; char < expression.length; char++) {
            if (expression[char] === '(') {
                bracketCounter++;
            }
            else if (expression[char] === ')') {
                bracketCounter--;
                if (bracketCounter < 0) {
                    return false;
                }
            }
        }
        
        return true;
    }

    writeLine('In the expression ((a+b)/5-d) brackets are put: ' + (areBracketsCorrect('((a+b)/5-d)') ? 'correctly' : 'incorrect'));
    writeLine('In the expression )(a+b)) brackets are put: ' + (areBracketsCorrect(')(a+b))') ? 'correctly' : 'incorrect'));

    // End of task
}