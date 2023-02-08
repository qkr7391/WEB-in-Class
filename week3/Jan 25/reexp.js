var test = "let us practice regular expressions";
//[a-zA-Z]{3} = [a-zA-Z][a-zA-Z][a-zA-Z]

var pattern = /[a-zA-Z]{4,}/
//up) passwords - only Alp, at least 4 ==> {4,} / exatly 4 {4}

//space is alpa
var test2 = "hello bye 12345"
var pattern = /[a-zA-Z]{4,}/ //typeof(pattern) == object
var mytest1 = pattern.test(test2);
console.log(mytest1); //true
//up) 


var test2 = "hello bye 12345"
var pattern2 = /^[a-zA-Z]{4,}$/
var mytest2 = pattern2.test(test22);
console.log(mytest); //false

console.log(">>>>>>>>>>>>>>>>>>>>>>>");

//phone num > 647-775-9876
var pattern3 = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}&/
//^ & >>>>> 문자입력 방지 
var pattern4 = /^([0-9]{3}[-]){2}[0-9]{4}&/
//pattern3=pattern4
var pattern5 = /\d{3}-\d{3}-\d{4}/
//pattern3=4=5
//\d == [0-9]

