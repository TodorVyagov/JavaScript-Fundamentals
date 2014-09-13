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

    function Solve(args) {
        var numberOfWheels = parseInt(args);
        var trikeWheels = 3;
        var carWheels = 4;
        var truckWheels = 10;
        var combinationsCounter = 0;

        for (var truck = 0; truck <= numberOfWheels; truck += truckWheels) {

            var wheelsLeftAfterTrucks = numberOfWheels - truck;
            for (var car = 0; car <= wheelsLeftAfterTrucks; car += carWheels) {

                var wheelsLeftAfterCars = wheelsLeftAfterTrucks - car;
                for (var trike = 0; trike <= wheelsLeftAfterCars; trike += trikeWheels) {
                    var wheelsLeftAfterTrikes = wheelsLeftAfterCars - trike;

                    if (wheelsLeftAfterTrikes !== 0) {
                        continue;
                    }

                    if (trike === 0 && car === 0 && truck === 0) {
                        continue;
                    }

                    combinationsCounter += 1;
                }
            }
        }
    }

    var test1 = '7';

    var test2 = '10';

    var test3 = '40';

    Solve(test1);
    Solve(test2);
    Solve(test3);

    //End
}