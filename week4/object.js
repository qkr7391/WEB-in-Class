var myodject = {};
//^create empty object

var person = {
    name: "Steven",
    age: 25,
    talk: function(){
        console.log("I am "+name+"and my age is " + age);
    }
}
//^create object
//like struct

console.log(person.name);
//console.log(person.talk()); >> not working because you can not use print to print
//talk function already have console.log

//person.talk(); >> error, becuas it needs [this]

var person = {
    name: "Steven",
    age: 25,
    talk: function(){
        console.log("I am "+this.name+"and my age is " + this.age);
    }
}

person.talk();
//I am Stevenand my age is 25  >> need [this]


person.salary = 98000;
console.log(person.salary);
//98000 >> can create 

delete person.age;
console.log(person.age);
//undefined >> delete the attribute
// if delete the value than show 0 for age

person.raise = function(){
    //do whatever 
}




