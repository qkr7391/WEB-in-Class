var test = "This*is JS week 3";

var x = test.split('w'); //구분자
console.log(x); //[ 'This*is JS ', 'eek 3' ]
console.log("1>>>>>>>>>>>>>>>>>>>>>>>>");


var x = test.split(' '); //구분자
console.log(x); //[ 'This*is', 'JS', 'week', '3' ]
console.log("2>>>>>>>>>>>>>>>>>>>>>>>>");


var x = test.indexOf(' '); 
console.log(x); //7 - 처음으로 나오는 index
console.log("3>>>>>>>>>>>>>>>>>>>>>>>>");


var x = test.indexOf('js'); 
console.log(x); //-1 - case sensetive
console.log("4>>>>>>>>>>>>>>>>>>>>>>>>");


var x = test.indexOf('JS'); 
console.log(x); //8
console.log("5>>>>>>>>>>>>>>>>>>>>>>>>");


var x = test.lastIndexOf(' '); 
console.log(x); //15
console.log("6>>>>>>>>>>>>>>>>>>>>>>>>");

var x = test.lastIndexOf('JS'); 
console.log(x); //8 - because J index = 8
console.log("7>>>>>>>>>>>>>>>>>>>>>>>>");