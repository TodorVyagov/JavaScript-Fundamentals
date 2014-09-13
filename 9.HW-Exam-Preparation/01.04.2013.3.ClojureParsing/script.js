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

    // Task 2
    function Solve(args) {
        //remove unnecessary white spaces
        var stringCommands = [];

        for (var i = 0; i < args.length; i++) {
            stringCommands[i] = args[i].trim();
        }

        //console.log('"' + stringCommands[0] + '"');
        var result = 0;

        //read numbers and operators
        for (var i = 0; i < stringCommands.length; i++) {
            var currentRow = stringCommands[i];
            var operator = '';
            var nestedOperator = '';
            //var isDefiningFunction = false;
            //var isNested = false;
            var parameters = [];
            var nestedParameters = [];
            //var functions = [];
            //var functionName = '';
            //var functionValue = undefined;

            for (j = 0; j < currentRow.length; j++) {
                var symbol = currentRow[j];


                if (symbol === ' ') {
                    //if (isDefiningFunctionName) {
                    //    var newFunction = functionMaker(functionName, 0);
                    //    functionName = '';
                    //}
                    continue;
                }
                else if (isNumber(symbol) && symbol !== ' ') {
                    var number = symbol;

                    //checks if number is negative and adds '-'
                    if (j > 0 && currentRow[j - 1] === '-') {
                        number = '-' + number;
                    }

                    //adds all digits of longer numbers
                    while (j < currentRow.length - 1 && isNumber(currentRow[j + 1]) && currentRow[j + 1] !== ' ') {
                        number += currentRow[j + 1];

                        j++;
                    }

                    parameters.push(parseInt(number));
                    continue;
                }
                else if (symbol === '(') {
                    isNested = true;
                    continue;
                }
                else if (symbol === ')') {
                    result = calculateExpression(parameters, operator);
                    if (result === 'ERROR!') {
                        writeLine('Division by zero! At Line:' + (i + 1));//!!!!!!!!!!!!!!!!!!!!!!!!!

                        return 'Division by zero! At Line:' + i;
                    }
                }
                else if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
                    operator = symbol;
                    continue;
                }
                //else if (currentRow.substr(j, 'def'.length) === 'def') {
                //    j += 'def'.length;
                //    isDefiningFunction = true;
                //    continue;
                //}

                //if (isDefiningFunction) {
                //    functionName += symbol;
                //}



            }

            //writeLine(result);

        }

        return result;

        function calculateExpression(params, operator) {
            var result = params[0];

            //writeLine(operator + parameters); //!!!!!!!!!!!!!!!!!!!!!!!!!!

            if (params.length === 1) {
                return result;
            }

            for (var i = 1; i < params.length; i++) {
                switch (operator) {
                    case '+': result += params[i]; break;
                    case '-': result -= params[i]; break;
                    case '*': result *= params[i]; break;
                    case '/':
                        if (params[i] === 0) {
                            return 'ERROR!';
                        }
                        result = parseInt(result / params[i]);
                        break;
                }
            }

            return result;
        }

        function isNumber(word) {
            return word == Number(word);
        }

        function functionMaker(funcName, funcValue) {
            return {
                name: funcName,
                value: funcValue
            }
        }
    }

    var zeroTest = [
        '   (+ -10 3 -2)   ',
        '   (* 10 0 2)   ',
        '   (/ 5 0)   '
    ];

    var test1 = [
        '(def func 10)',
        '(def newFunc (+  func 2))',
        '(def sumFunc (+ func func newFunc 0 0 0))',
        '(* sumFunc 2)'
    ];

    var test2 = [
        '(def func (+ 5 2))',
        '(def func2 (/  func 5 2 1 0))',
        '(def func3 (/ func 2))',
        '(+ func3 func)'
    ];

    var test3 = [
        '(def func (+ 5 2))',
        '(def func2 (/  func 5 2 1 0))',
        '(def func3 (/ func 2))',
        '(+ func3 func)'
    ];

    Solve(zeroTest);
    //Solve(test1);
    //Solve(test2);
    //Solve(test3);

    //End
}