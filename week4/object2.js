
var subject = {
    code:"",
    dateofbday: new Date(),
    prog: [],
    info: {}
}; 
//inside an object can create anything. 
//^^^^^^^^prototype


var web222 = Object.create(subject);
web222.code = "Fundamentals of Web";
web222.prog = ["CPP", "CPA"];


//once create object, can add infor

var oop244 = Object.create(subject);
oop244.code = "Object oriented Programming";
oop244.prog = ["CPP", "CPA"];

var mysubject = [web222, oop244];
//array of objects

var dbs211 = Object.create(subject);
dbs211.code = "My SQL";
dbs211.prog = ["CPP", "CPA"];

mysubject.unshift(dbs211);

for(var i = 0; i < mysubject.length ; i++){
console.log(mysubject[i].code);
}
//My SQL
//Fundamentals of Web
//Object oriented Programming