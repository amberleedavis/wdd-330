    "use strict";

    /* Defining Table
     * Input: Ask user for age
     * Processing: max = (220-age);
     *   Slowest max * 65%
     *   Fastest max * 85%
     * Output: slowest and fastest beneficial heart rates
     */

    function beneficialHeartRates() {
        // Ask user for age
        var age = parseInt(document.getElementById('age').value);

        // Compute the slowest and fastest benefical heart rates
        var max = 220 - age;
        var slowest = max * 0.65;
        var fastest = max * 0.85;


        // Display the beneficial rates for user to see
        document.getElementById('outputDiv1').innerHTML = slowest;
        document.getElementById('outputDiv2').innerHTML = fastest;

    }

    function calculateHeartRate() {
        // Ask user for heart beat
        var beat = parseInt(document.getElementById('beat').value);

        // Compute the heart beat

        var calculate = beat * 6;
        localStorage.setItem("heartRate", calculate);
        console.log(localStorage);

        // display the heart rate
        document.getElementById('outputDiv3').innerHTML = calculate;
    }

    function clearStorage() {
        localStorage.clear();
        location.reload();
    }

  
