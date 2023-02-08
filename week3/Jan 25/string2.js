var test = "This is JS week 3";

console.log(test.substr(1,5)); //his i >> include 5th
console.log(test.substring(1,5)); //his >> not include 5th
console.log("1>>>>>>>>>>>>>>>>>>>>>>>>");

console.log(test.substr(2,5)); //is is >> include 5th
console.log(test.substring(2,5)); //is>> not include 5th
console.log("2>>>>>>>>>>>>>>>>>>>>>>>>");

//includes >> 정확하게 일치하는 내용만 true
var test = "This*is JS week 3";
console.log(test.includes("P")); //false
console.log("3>>>>>>>>>>>>>>>>>>>>>>>>");


var test = "This*is JS week 3";
console.log(test.includes(" w ")); //false
console.log("4>>>>>>>>>>>>>>>>>>>>>>>>");


var test = "This*is JS week 3";
console.log(test.includes("w")); //true
console.log("5>>>>>>>>>>>>>>>>>>>>>>>>");


var test = "This*is JS week 3";
console.log(test.includes("W")); //false
console.log("6>>>>>>>>>>>>>>>>>>>>>>>>");

//정확하게 일치하는 것으로 시작되는 것
var test = "This*is JS week 3";
console.log(test.startsWith(" W")); //false
console.log("7>>>>>>>>>>>>>>>>>>>>>>>>");


var test = "This*is JS week 3";
console.log(test.startsWith("w")); //false
console.log("8>>>>>>>>>>>>>>>>>>>>>>>>");


var test = "This*is JS week 3";
console.log(test.endsWith("k")); //false
console.log("9>>>>>>>>>>>>>>>>>>>>>>>>");


var test = "This*is JS week 3";
console.log(test.endsWith(" k")); //false
console.log("10>>>>>>>>>>>>>>>>>>>>>>>>");


var test = "This*is JS week 3";
console.log(test.endsWith("k ")); //false
console.log("11>>>>>>>>>>>>>>>>>>>>>>>>");

