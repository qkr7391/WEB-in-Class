/*function updateScore(current, value, bonus){
    return current + value*bonus;
}

console.log(updateScore(50,1,1));*/

//fix the errors
/* defalut value (c++ too possible)
1.function updateScore(current, value, bonus=3){
    return current + value*bonus;
}

console.log(updateScore(50,1));*/

/*
2.function updateScore(current, value, bonus){
    ///if(isNaN(bonus)){

    }else{

    }///
    return bonus? current + value*bonus : current;
    //if bonus exist == true / otherwise false;
}
console.log(updateScore(50,1));*/

function updateScore(){
 console.log(arguments.length); 
}

updateScore(2,6,8); //3
updateScore(); //0
updateScore(9); //1
updateScore(2, "sasafsa",13213,"abcdes"); //4


