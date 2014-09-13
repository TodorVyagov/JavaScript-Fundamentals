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

    // Task 11
    writeTask('11. Write a function that formats a string using placeholders.');

    function stringFormat() {
        if (arguments === 0) {
            return undefined;
        }

        var text = arguments[0];
        var openBracket = '{';
        var closeBracket = '}';
        var indexOfOpenBracket = text.indexOf(openBracket);
        var indexOfCloseBracket = 0;
        var resultText = text.substring(0, indexOfOpenBracket);

        while (true) {
            indexOfCloseBracket = text.indexOf(closeBracket, indexOfOpenBracket);
            var placeHolder = parseInt(text.substring(indexOfOpenBracket + openBracket.length, indexOfCloseBracket));
            resultText += arguments[placeHolder + 1];
            indexOfOpenBracket = text.indexOf(openBracket, indexOfCloseBracket);

            if (indexOfOpenBracket >= 0) {
                resultText += text.substring(indexOfCloseBracket + closeBracket.length, indexOfOpenBracket);
            }
            else {
                resultText += text.substring(indexOfCloseBracket + closeBracket.length);
                break;
            }
        }

        return resultText;
    }

    var str = stringFormat("Hello {0}!", 'Pesho');
    writeLine('To format: "Hello {0}!", "Pesho"');
    writeLine('After FORMAT: ' + str);
    var format = "{0}, {1}, {0} text Strings: {2}, {3}; bool: {4}; Array: {5}; Undefined: {6}; Not a number: {7}";
    str = stringFormat(format, 1, "Pesho", "Gosho", "Telerik Software Academy", true, [1, 2, 4], undefined, NaN);
    writeLine('To format: "' + format + '", 1, "Pesho", "Gosho", "Telerik Software Academy", true, [1, 2, 4], undefined, NaN');
    writeLine('After FORMAT: ' + str);

    // Task 12
    writeTask('12. Write a function that creates a HTML UL using a template for every HTML LI. The source of the list should an array of elements. Replace all placeholders marked with –{…}–   with the value of the corresponding property of the object.');

    function generateList(people, template) {
        var replaced = [];
        var line;

        for (var i = 0; i < people.length; i++) {
            line = template.replace(/[-{ }-]/g, '');

            for (var property in people[i]) {
                line = line.replace(property, people[i][property]);
            }

            replaced.push(line);
        }

        var result = '<ul><li>';
        result += replaced.join('</li><li>');
        result += '</li></ul>';

        return result;
    }


    var people = [{ name: 'gosho', age: 3 }, { name: 'Pesho', age: 29 }, { name: 'bat asen', age: 30 }];
    var template = document.getElementById('list-item').innerHTML;
    var finalArr = generateList(people, template);
    writeLine('template = ' + template.replace(/</g, '&lt;'));

    writeLine(finalArr);
    // End of tasks
}