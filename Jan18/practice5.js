/*create a function that takes 5 parameters
if more or less parameters, throw an error
if parameters are correct calculate the average of the parameters*/

/*//basic
function average(){
    var sum = 0;
    var avg = 0;
    if(arguments.length != 5){
        console.log("Wrong number of inputs!");
    }
    else{
        for (let i=0; i<arguments.length;i++){
            sum += arguments[i]; // arguments가 "2" 처럼 string으로 들어가면 값이 달라짐
            // >> sum += Numbeer(arguments[i]);
        }
        avg = sum/arguments.length;
        console.log("The average is: "+avg);
        
    }
}*/

/*
//1.
function average(){
    var sum = 0;
    var avg = 0;
    if(arguments.length != 5){
        console.log("Wrong number of inputs!");
    }
    else{
        for (let i=0; i<arguments.length;i++){
            sum += Number(arguments[i]); 
            // arguments가 "2" 처럼 string으로 들어가면 값이 달라짐
            //따라서 Number로만 값을 저장하도록 설정            
        }
        avg = sum/arguments.length;
        console.log("The average is: "+avg);
        
    }
}*/

/*
//2.
function average(){
    var sum = 0;
    var avg = 0;
    if(arguments.length != 5){
        console.log("Wrong number of inputs!");
    }
    else{
        for (let i=0; i<arguments.length;i++){
            sum += arguments[i]; // arguments가 "2" 처럼 string으로 들어가면 값이 달라짐
            // >> sum += Numbeer(arguments[i]);
        }
        avg = sum/arguments.length;

        if(isNaN(avg)){
            console.log("ERROR, ONE OF THE PARAMETERS IS NOT A NUMBER");
        }
        else{
            console.log("The average is: "+avg);
        }
    }
}*/

/*
//2-2.
function average(){
    var sum = 0;
    var avg = 0;
    if(arguments.length != 5){
        console.log("Wrong number of inputs!");
    }
    else{
        for (let i=0; i<arguments.length && !isNAN(arguments[i]);i++){
            sum += arguments[i]; // arguments가 "2" 처럼 string으로 들어가면 값이 달라짐
            // >> sum += Numbeer(arguments[i]);
        }
        avg = sum/arguments.length;

        if(isNaN(avg)){
            console.log("ERROR, ONE OF THE PARAMETERS IS NOT A NUMBER");
        }
        else{
            console.log("The average is: "+avg);
        }
    }
}*/


average(); //wrong
average(5,6,7,8,9); //7
//1.average(5,6,"2",8,9);
//2.average(5,6,7,"2","abcde1");
average(5,6,7,8,9,1); //wrong

//"2" 같은 경우 주의 *******