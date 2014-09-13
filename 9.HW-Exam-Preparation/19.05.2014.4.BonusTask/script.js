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

    function Solve(a) {
x=a[0]>0
y=a[1]>0
console.log(x + y == 1 ? x > 0 ? 3 : 0 : x > 0 ? 1 : 2)


    }

    s(a){return(a[0]>'.')+2*(a[1]<'.');}

    var test1 = ['1', '2'];

    var test2 = '10';

    var test3 = '40';

    Solve(test1);
    //Solve(test2);
    //Solve(test3);

    //End
}