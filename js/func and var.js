///ex1
// Write your function starting on line 3

var perimeterBox = function (length, width)
{
    return length*2 + width*2
}

perimeterBox(3, 8)

/////ex2

// Declare multiplied outside the function on line 3.
// This will mean it has global scope. 
var multiplied = 5

var timesTwo = function(number) {
    
    var multiplied = number * 2;
    
};

timesTwo(4);

// We cant access the variable multipled! 
// Do something so line 15 will work!
console.log(multiplied);



////ex3 ----aici am dubii..!?
var nameString = function(name) 
{
	console.log("Hi, I am"+ " " + name)
    return "Hi, I am"+ " " + name

};
nameString ("Stres")

////ex4
// Write your function below. 
// Don't forget to call your function!

var creditCheck = function(income)
{
    if (income >= 100)
    {
        return "You earn a lot of money! You qualify for a credit card."
    }
    else
    {
        return "Alas you do not qualify for a credit card. Capitalism is cruel like that."
    }
}

creditCheck (75)
//creditCheck (125)
//creditCheck (100)

