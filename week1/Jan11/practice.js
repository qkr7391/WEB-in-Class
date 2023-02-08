console.log("Welcome to WEB222"); //print out in java scripts
console.log("We are having fun");

var x = 9; //no need type for the variable //for global scope , front
var y = "Web222";
let z = 10; //similar with var //limit scope, back

console.log("This is " + z + " and value of x is " + x);

var a = 9.2;
var b = 7.7;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;

var h = "7.7";
var i = a + h;


console.log("Sum is " + c);
console.log("+ " + c + " || - " + d + " || * "  + e + " || / "  + f + " || % "  + g);
console.log("char " + i);


for(var n = 0; n < 10; n++)
{
    console.log("I inside is: " + n);
}
console.log("I outside is: " + n);

/*for(let n = 0; n < 10; n++)
{
    console.log("I inside is: " + n);
}
console.log("I outside is: " + n);*/

var l = 9;
var m = "9";

if(l==m)
{
    console.log("Equal");
}
else
{
    console.log("Not Equal");
}

if(l===m)
{
    console.log("Equal");
}
else
{
    console.log("Not Equal");
}


if(w = 8)
{
    console.log(w)
};