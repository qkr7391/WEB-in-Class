//Jan 23 / quiz 1
function test(number){
    
    if(arguments.length != 1 || isNaN(number))
    {
        console.log("ERROR, Wrong number of inputs!");
    }
    else{
        if(number < 0)
        {
            console.log("Negative");
        }
        else
        {
console.log("Positive");
        }
    }
}

test(1,2);
test(-2);
test(2);
test("n");