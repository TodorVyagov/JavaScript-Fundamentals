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


    // Task 3
    writeTask('3. Write a function that makes a deep copy of an object. The function should work for both primitive and reference types.');

    function clone(obj) {
        if (obj == null || "object" !== typeof obj) {
            return obj;
        }

        if (obj instanceof Array) {
            var copy = [];
            for (var i = 0 ; i < obj.length ; i++) {
                copy[i] = clone(obj[i]);
            }

            return copy;
        }

        if (obj instanceof Object) {
            var copy = {};
            for (var attribute in obj) {
                if (obj.hasOwnProperty(attribute)) {
                    copy[attribute] = clone(obj[attribute]);
                }
            }

            return copy;
        }
    }

    var student = {
        name: 'Pesho',
        age: 29,
        marks: [5, 6, 6]
    };

    var copiedStudent = clone(student);


    for (var attr in student) {
        writeLine('original: ' + attr + ' ' + student[attr]);
        writeLine('copied: ' + attr + ' ' + copiedStudent[attr]);
    }

    writeLine('Changing copy attributes to show that the copy is deep.');
    copiedStudent.age = 20;
    copiedStudent.name = 'Gosho';
    copiedStudent.marks[1] = 4;

    for (var attr in student) {
        writeLine('original: ' + attr + ' ' + student[attr]);
        writeLine('copied: ' + attr + ' ' + copiedStudent[attr]);
    }

    // Task 4
    writeTask('4. Write a function that checks if a given object contains a given property');

    function hasProperty(obj, property) {
        for (var prop in obj) {
            if (prop === property) {
                return true;
            }
        }

        return false;
    }

    //Using the student object from 3 taks.
    writeLine('Student has property "name": ' + hasProperty(student, 'name'));
    writeLine('Student has property "garden": ' + hasProperty(student, 'garden'));

    // End of task
}