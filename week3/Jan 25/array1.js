var myarr = [10,5,"Blue", "red", 9]; //dont care type and size

var emtarr = []; //declare empty array but dont do it;

//var newarr = new Array(10,5,"Blue", "red", 9);
//up) another way to declare array but dont use it.

console.log(myarr); //dont need loop for print full array
//up) [ 10, 5, 'Blue', 'red', 9 ]

console.log(myarr.length); //5
console.log("1>>>>>>>>>>>>>>>>>>>>>>>>");


var x = myarr.pop(); // -remove,elimate last eliment in array
console.log(myarr);
console.log(x); //9
console.log(myarr.length); //4 
console.log("2>>>>>>>>>>>>>>>>>>>>>>>>");

var myarr = [10,5,"Blue", "red", 9];
var x = myarr.shift(); // -remove,elimate first eliment in array
console.log(myarr);
console.log(x); //10
console.log(myarr.length); //4
console.log("3>>>>>>>>>>>>>>>>>>>>>>>>");

myarr.push("happy"); // add eliment to end of array
console.log(myarr);
console.log(myarr.length); //5
console.log("4>>>>>>>>>>>>>>>>>>>>>>>>");

myarr.unshift("always"); // -remove,elimate last eliment in array
console.log(myarr);
console.log(myarr.length); //6
console.log("5>>>>>>>>>>>>>>>>>>>>>>>>");


/*for(var i = 0; i < myarr.length; i++){
    console.log(myarr[i]);
} //can do as c++
*/


