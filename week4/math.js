//[about MATH]

/*
min(x, y) >> minimun
man(x, y) >> maximun
pow(x, y) >> x power y
sqrt(x) >> square ?
cel(x)
floor(y)
round(z)
*/

console.log(Math.min(5,8,0,2,7));
//0

console.log(Math.min(5,8,0,2,7,'p'));
//NaN

console.log(Math.min(5,8,0,2,7,'10'));
//0

console.log(Math.min(5,8,0,2,7,"0"));
//NaN

console.log(Math.min(5,8,0,2,7,"p"));
//0

console.log(Math.max(5,8,0,2,7));
//8


var myarr = [9, 7, 2, 0, 10, -5];
console.log(Math.min(myarr));
//NaN

console.log(Math.max(myarr));
//NaN

console.log(Math.min(...myarr));
//-5
// ... >>>> to indicate this is array
console.log(Math.max(...myarr));
//10

///////////////////////////////////////////
console.log(Math.pow(2, 5));
//32 >>v2*2*2*2*2
//order of value for pow function is important

console.log(Math.sqrt(9));
//3 >>> x*x = 9, what is x?


////////////////////////////////////////

//**********ceil is always round up

console.log(Math.ceil(1.1));
//2
console.log(Math.ceil(1.9));
//2

console.log(Math.ceil(1.25));
//2


/////////////////////////////////////////

//**********floor is always round down

console.log(Math.floor(1.1));
//1
console.log(Math.floor(1.9));
//1
console.log(Math.floor(1.25));
//1


/////////////////////////////////////////

//**********round is round up and down depands on the size

console.log(Math.round(1.1));
//1
console.log(Math.round(1.9));
//2
