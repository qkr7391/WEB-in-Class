var Employee = {
    name: "",
    dob: new Date(),
    eid: Number(),
    position: "",
    salary: Number(),
    Promote: function(){
        this.salary *= 1.035;
    },
    forEach: function(){
        console.log("Employee info for '" + this.name + "' born on '" + this.dob + ", id is '"+ this.eid +"', in program '" + this.position + ", with a current salary of '" + this.salary +".");

    }
}

var Employee1 = Object.create(Employee);
Employee1.name = "John";
Employee1.dob = new Date(1989, 10, 03);
Employee1.eid = 1;
Employee1.position = "Manager";
Employee1.salary = 78000;

var Employee2 = Object.create(Employee);
Employee2.name = "Dulian";
Employee2.dob = new Date(1977, 11, 19);
Employee2.eid = 2;
Employee2.position = "Assistant";
Employee2.salary = 40000;

var Employee3 = Object.create(Employee);
Employee3.name = "Arora";
Employee3.dob = new Date(1993, 04, 08);
Employee3.eid = 3;
Employee3.position = "Regular";
Employee3.salary = 50000;

var Employee4 = Object.create(Employee);
Employee4.name = "Willson";
Employee4.dob = new Date(1999, 05, 21);
Employee4.eid = 4;
Employee4.position = "Intern";
Employee4.salary = 30000;

var Employee5 = Object.create(Employee);
Employee5.name = "Demie";
Employee5.dob = new Date(2000, 01, 07);
Employee5.eid = 5;
Employee5.position = "Co-op Intern";
Employee5.salary = 25000;


Employee1.Promote();
console.log(Employee1);


var employees = [Employee1, Employee2, Employee3, Employee4, Employee5];
console.log(employees);



for(var i = 0; i < employees.length; i++){
    console.log(employees[i].forEach());   
}
