//web - Feb 1, 2023 week4


//[about DATE]

var tday = new Date();
//create object
//automatically fetch

console.log(tday); 
//2023-02-01T14:56:20.799Z 
// >> format is weird

console.log(tday.toString());
//Wed Feb 01 2023 09:57:08 GMT-0500 (Eastern Standard Time) 
// >> change format with toString()

console.log(tday.toLocaleString());
//2/1/2023, 9:58:00 a.m.
// >> change format with toLocaleString()

//******************************************* *//

console.log(tday.getDate()); 
//1
//1-31 >> start from ONE*******

console.log(tday.getDay()); 
//3
//will get num zero(sundaty)-six(saturday)

console.log(tday.getMonth()); 
//1
// return value of month
// will get num zero(Jan) to eleven(December)

console.log(tday.getFullYear()); 
//2023
//2023 >> show the year

////////////////////////////////////////////////////////

var bday = new Date(1990, 5, 10);
console.log(bday.toString());
//Sun Jun 10 1990 00:00:00 GMT-0400 (Eastern Daylight Saving Time)
//Jun >> because month start from 0(ZERO)
//can create specific date

var nbday = new Date("Sep 12, 1991");
console.log(nbday.toString());
//Thu Sep 12 1991 00:00:00 GMT-0400 (Eastern Daylight Saving Time)
//more readable


