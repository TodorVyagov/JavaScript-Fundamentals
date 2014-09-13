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


    // Task 5
    writeTask('5. Write a function that finds the youngest person in a given array of persons and prints his/hers full name.<br />Each person have properties firstname, lastname and age.');

    var persons = [
        { firstname: 'Georgi', lastname: 'Petrov', age: 32 },
        { firstname: 'Bay', lastname: 'Ivan', age: 81 },
        { firstname: 'Kiril', lastname: 'Ivanov', age: 24 },
        { firstname: 'Petar', lastname: 'Petrov', age: 18 },
        { firstname: 'Petar', lastname: 'Krumov', age: 31 },
        { firstname: 'Stoyan', lastname: 'Kirilov', age: 27 },
    ];

    function youngestPersonFinder(personsArray) {
        var youngest = personsArray[0];
        
        for (var i = 0; i < personsArray.length; i++) {
            for (var attribute in personsArray[i]) {
                if (attribute === 'age' && (personsArray[i][attribute] < youngest[attribute])) {
                    youngest = personsArray[i];
                }
            }
        }

        writeLine(youngest.firstname + ' ' + youngest.lastname + ' is the youngest: ' + youngest.age);
    }

    youngestPersonFinder(persons);

    // Task 6
    writeTask('6. Write a function that groups an array of persons by age, first or last name. The function must return an associative array, with keys - the groups, and values -arrays with persons in this groups.<br />Use function overloading (i.e. just one function).');
    //we will use the persons array of objects from task 5.

    function group(personsArray, criteria) {
        if (criteria !== 'firstname' && criteria !== 'lastname' && criteria !== 'age') {
            writeLine('Invalid criteria!');
            return;
        }

        var resultArray = [];

        for (var i = 0; i < personsArray.length; i++) {
            var groupedElement = {};
            groupedElement.key = criteria;
            groupedElement.value = personsArray[i];
            resultArray.push(groupedElement);

        }
        return resultArray;
    }

    var grouped = group(persons, 'age');
    writeLine('Grouped by: ' + grouped[0]['key']);

    for (var i = 0; i < grouped.length; i++) {
        for (var attribute in grouped[i]) {
            if (grouped[i][attribute].hasOwnProperty('firstname')) {
                writeLine(grouped[i][attribute].firstname + ' ' + grouped[i][attribute].lastname);
            }
        }
    }
    
    grouped = group(persons, 'firstname');
    writeLine('Grouped by: ' + grouped[0]['key']);

    for (var i = 0; i < grouped.length; i++) {
        for (var attribute in grouped[i]) {
            if (grouped[i][attribute].hasOwnProperty('firstname')) {
                writeLine(grouped[i][attribute].firstname + ' ' + grouped[i][attribute].lastname);
            }
        }
    }
    // End of task
}