//Jan 18, 2023 >>> parseFloat || parseInt

var myvar1 = 15.79;
var myvar2 = 15;
var myvar3 = "15.79";
var myvar4 = "abcde";
var myvar5 = "15.19.56"; 
var myvar6 = "abcde56";
var myvar7 = "12abcde";

console.log(parseFloat(myvar1)); //15.79
console.log(parseFloat(myvar2)); //15
console.log(parseFloat(myvar3)); //15.79
console.log(parseFloat(myvar4)); //NaN
console.log(parseFloat(myvar5)); //15.19
console.log(parseFloat(myvar6)); //NaN
console.log(parseFloat(myvar7)); //12


console.log(parseInt(myvar1)); // 15
console.log(parseInt(myvar2)); // 15
console.log(parseInt(myvar3)); // 15
console.log(parseInt(myvar4)); //?? NaN
console.log(parseInt(myvar5)); //?? 15
console.log(parseInt(myvar6)); //?? NaN
console.log(parseInt(myvar7)); //?? 12


//Number(), String(), typeof

console.log(Number(myvar1)); // 15.79
console.log(Number(myvar2)); // 15
console.log(Number(myvar3)); // 15.79
console.log(Number(myvar4)); //?? NaN
console.log(Number(myvar5)); //?? NaN
console.log(Number(myvar6)); //?? NaN
console.log(Number(myvar7)); //?? NaN


//myvar1 = String(myvar1);
console.log(String(myvar1)); // 15.79
console.log(String(myvar2)); // 15
console.log(String(myvar3)); // 15.79
console.log(String(myvar4)); //abcde
console.log(String(myvar5)); //15.19.56
console.log(String(myvar6)); //abcde56
console.log(String(myvar7)); //12abcde

myvar1 = String(myvar1); // change typeof myvar1 to 'string'
console.log(typeof(myvar1)); // number
console.log(typeof(myvar2)); // number
console.log(typeof(myvar3)); // string
console.log(typeof(myvar4)); // string
console.log(typeof(myvar5)); // string
console.log(typeof(myvar6)); // string
console.log(typeof(myvar7)); // string

//True != num / False
console.log(isNaN(myvar1)); //f 
console.log(isNaN(myvar2)); //f
console.log(isNaN(myvar3)); //f //value로 판단하는데, value가 num이기때문에 num으로 인식
console.log(isNaN(myvar4)); //t
console.log(isNaN(myvar5)); //t
console.log(isNaN(myvar6)); //t
console.log(isNaN(myvar7)); //t

console.log(myvar1.toFixed(1)); // 15.8
console.log(myvar1.toFixed(5)); // 15.79000
console.log(myvar1.toFixed(10)); // 15.7900000000