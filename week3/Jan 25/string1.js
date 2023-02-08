var test = "This is JS week 3"; //declare string
console.log(typeof(test)); //string
console.log(test.length); //17
console.log("1>>>>>>>>>>>>>>>>>>>>>>>>");

var test = "   This is JS week 3   "; //declare string
console.log(typeof(test)); //string
console.log(test.length); //23 (space is charcter)
console.log("2>>>>>>>>>>>>>>>>>>>>>>>>");

//what if I dont want to cal space?
var test = "   This is JS week 3   "; //declare string
console.log(test.length); //23 (space is charcter)
console.log(test);
console.log(test.trim()); //does not affect to orig 
console.log(test.length); //not change
console.log(test);
console.log("3>>>>>>>>>>>>>>>>>>>>>>>>");


console.log(test.trim());
console.log(test.concat(", and we are having fun"));
console.log(test);
console.log("4>>>>>>>>>>>>>>>>>>>>>>>>");


console.log(test.trim());
console.log(test.concat(", and we are having fun"));
console.log(test);
console.log(test.trim().concat(", and we are having fun"));
console.log("5>>>>>>>>>>>>>>>>>>>>>>>>");


console.log(test + ", and we are having fun");
console.log(test.trim() + ", and we are having fun");
console.log("6>>>>>>>>>>>>>>>>>>>>>>>>");


console.log(test + ", and we are having fun");
console.log(test.trim() + ", and we are having fun");
console.log(test.toLowerCase()); //  this is js week 3
console.log(test.toUpperCase()); //  THIS IS JS WEEK 3
console.log("7>>>>>>>>>>>>>>>>>>>>>>>>");