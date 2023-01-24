/****************************************************************************
*	Assignment 1
*	I declare that this assignment is my own work in accordance with Seneca Academic Policy.
*	No part of this assignment has been copied manually or electronically from any other source
*	(including web sites) or distributed to other students.
*	Name: Sae-mi Park       Student ID: 121333223           Date: Jan 24, 2023
****************************************************************************/

/***************************** Task1 *************************/
function playNumbers() {
    var sum = 0;
    var avg = 0;
    var count = 0;
    var arr = new Array();
    //check argument is more than one. if not, print error message
    if (arguments.length < 1) {
        console.log("There are no inputs");
    }
    else {
        for (let i = 0; i < arguments.length; i++) {
            // when arguments[i] is not number
            if (isNaN(arguments[i])) {
                console.log(arguments[i] + " is not a number");
                count++;
                //count is for checking arguments[i] are only numbers
            }
        }
        //if count is 0, it means arguments are numbers
        if (count == 0) {
            for (let i = 0; i < arguments.length; i++) {
                //make sum
                sum += arguments[i];
                // save arguments to array for print
                arr[i] = arguments[i];
            }
            console.log("The sum of (" + arr + ") is " + sum);
        }
    }
}

console.log("/***************************** Task1 *************************/");

playNumbers();
playNumbers("abc", 3, "hello");
playNumbers(9, 3, 6);
playNumbers(3, 5, 1, 3, 5);
playNumbers("Good day!", 3, 4, 32, "hi", "we");



/***************************** Task2 *************************/
//val : American dollar value needed to convert - google
function convertCurrency(val, cf) {
    var convertedMoney;
    var vaildNum;
    vaildNum = Number(val);

    if (arguments.length == 2) {
        //val is number and val is Number type
        if (!isNaN(val) && vaildNum === val) {
            if (cf != "C" && cf != "E") {
                console.log("I am confused :(");
            }
            else {
                if (cf === "C") {
                    convertedMoney = val * 1.34;
                    console.log(val + "US$ is equivalent to " + convertedMoney + " in CAD");
                }
                else {
                    convertedMoney = val * 0.92
                    console.log(val + "US$ is equivalent to " + convertedMoney + " in EURO");
                }
            }
        }
        //val is not number or val is not Number type
        else {
            console.log("I need a number");
        }
    }

    else {
        console.log("Incorrect Number of Inputs :(");
    }
}

console.log("/***************************** Task2 *************************/"); convertCurrency(100);
convertCurrency(100, "M");
convertCurrency(100, "C");
convertCurrency(100, "E");
convertCurrency("100", "E");
