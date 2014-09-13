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
    writeTask('1. Write functions for working with shapes in  standard Planar coordinate system:');
    writeLine('Points are represented by coordinates P(X, Y)');
    writeLine('Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))');
    writeLine('Calculate the distance between two points');
    writeLine('Check if three segment lines can form a triangle');

    function buildPoint(Xcoordinates, Ycoordinates) {
        return {
            X: Xcoordinates,
            Y: Ycoordinates,
            toString: function() {return '(' + Xcoordinates + ', ' + Ycoordinates + ')'}
        }
    }

    function calculateDistanceBetweenPoints(point1, point2) {
        var x = (point1.X - point2.X) * (point1.X - point2.X);
        var y = (point1.Y - point2.Y) * (point1.Y - point2.Y);
        var result = Math.sqrt(x + y);
        return result;
    }

    var P1 = buildPoint(4, 5);
    var P2 = buildPoint(1, 1);
    writeLine('Point P1' + P1);
    writeLine('Point P2' + P2);
    writeLine('Distance between these points is: ' + calculateDistanceBetweenPoints(P1, P2));

    function buildLine(point1, point2) {
        return {
            P1: point1,
            P2: point2,
            toString: function () { return '(' + point1 + ', ' + point2 + ')' }
        }
    }

    var line1 = buildLine(buildPoint(1, 1), buildPoint(4, 4));
    var line2 = buildLine(buildPoint(3, 7), buildPoint(2, 5));
    var line3 = buildLine(buildPoint(6, 4), buildPoint(1, 6));
    writeLine('line L1' + line1);
    writeLine('line L2' + line2);
    writeLine('line L3' + line3);


    function isPossibleLinesToFormTriangle(L1, L2, L3) {
        /*How can you tell whether three line segments will form a triangle?
        If any one of them is longer than or equal to the sum of the other two, they can't form a triangle.
        If the lengths of the line segments are a, b and c, they form a triangle iff:
        a + b > c
        a + c > b
        b + c > a*/
        var a = calculateDistanceBetweenPoints(L1.P1, L1.P2);
        writeLine(a);
        var b = calculateDistanceBetweenPoints(L2.P1, L2.P2);
        writeLine(b);

        var c = calculateDistanceBetweenPoints(L3.P1, L3.P2);
        writeLine(c);

        var canForm = false;

        if ((a + b > c) && (a + c > b) && (b + c > a)) {
            canForm = true;
        }

        return canForm;
    }

    var canForm = isPossibleLinesToFormTriangle(line1, line2, line3) ? 'CAN' : 'CANNOT';
    writeLine('These three lines ' + canForm + ' form a triangle.');

    // Task 2
    writeTask('2. Write a function that removes all elements with a given value. Attach it to the array type.');
    //var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
    //arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];

    Array.prototype.remove = function (elementToRemove) {
        for (var i in this) {
            if (this[i] === elementToRemove) {
                this.splice(i, 1);
            }
        }

    }

    var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
    writeLine(arr);
    writeLine('Removing all numbers with value = 1');
    arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
    writeLine(arr + ' - Last "1" is string');

    // End of task
}