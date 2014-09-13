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
    writeTask('1. Assign all the possible JavaScript literals to different variables.');
    writeLine('JavaScript has six different types: Number, String, Boolean, Null, Undefined and Object');
    writeLine('See the JS file.');
    var number = 555,
        word = 'javascript',
        isTrue = true,
        noValue = null,
        notDefined = undefined,
        person = {
            name: 'pesho',
            age: 25
        };
    writeLine('number = ' + number);
    writeLine('word = ' + word);
    writeLine('isTrue = ' + isTrue);
    writeLine('noValue = ' + noValue);
    writeLine('notDefined = ' + notDefined);
    writeLine('person: ' + person + '. Name: ' + person.name + ', Age: ' + person.age);

    writeTask("2. Create a string variable with quoted text in it. For example: 'How you doin'?', Joey said.");
    var sentence = "'What's new in Telerik Academy?', Ivaylo said.";
    writeLine('var sentence = ' + sentence);

    writeTask('3. Try typeof on all variables you created.');
    writeTask('4. Create null, undefined variables and try typeof on them.');
    writeLine(number + ' is ' + typeof (number));
    writeLine(word + ' is ' + typeof (word));
    writeLine(isTrue + ' is ' + typeof (isTrue));
    writeLine(noValue + ' is ' + typeof (noValue));
    writeLine(notDefined + ' is ' + typeof (notDefined));
    writeLine(person + ' is ' + typeof (person));
    // End of tasks
}