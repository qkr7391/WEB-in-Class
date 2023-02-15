var course = {
    code: "", 
    name: "",
    hours: Number(),
    url: "",
}

var APS100 = Object.create(course);
APS100.code = "APS100";
APS100.name = "Applied professional communication";
APS100.hours = 3;
APS100.url = "http:/www.senecacollege.ca";

var IPC144 = Object.create(course);
IPC144.code = "IPC144";
IPC144.name = "AIntroduction to C programming";
IPC144.hours = null;
IPC144.url = "http:/www.senecacollege.ca/ipc";

var ULI101 = Object.create(course);
ULI101.code = "ULI101";
ULI101.name = "Linux and the Internet";
ULI101.hours = 4;
ULI101.url = "http:/www.senecacollege.ca/lin";

var courses = [APS100, IPC144, ULI101];
//array of objects

console.log("Courses object Check\n======================" );
console.log(courses);

console.log("\n\n=============================\nRemoved courses object check\n");
//courses.shift(APS100);
//console.log(courses);

var removed = courses.shift(APS100);
console.log(removed);

console.log("\n\n=============================\nCreate 3 course object\n");

var OOP244 = Object.create(course);
OOP244.code = "OOP244";
OOP244.name = "Introduction to Object Oriented Programming";
OOP244.hours = 4;
OOP244.url = "http:/www.senecacollege.ca/oop";

var WEB222 = Object.create(course);
WEB222.code = "WEB222";
WEB222.name = "Web programming principles";
WEB222.hours = 4;
WEB222.url = "http:/www.senecacollege.ca/web";

var DBS211 = Object.create(course);
DBS211.code = "DBS211";
DBS211.name = "Introduction to Database Systems";
DBS211.hours = 4;
DBS211.url = "http:/www.senecacollege.ca/dbs";

courses.unshift(OOP244, WEB222, DBS211);
console.log(courses);


console.log("\n\n=============================\nLoop hours\n");
var sum = 0;
for(var i = 0; i < courses.length ; i++){
      
    if  (courses[i].hours === null)
    {
        courses[i].hours = 0;
    }    
    sum += courses[i].hours;
   }
   console.log(sum);

   