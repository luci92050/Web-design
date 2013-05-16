////ex1
var balance = 20.97;

// Complete the condition in the ()s on line 4
if (balance < 10) 
{
    console.log(balance-5)
	
} else 
{
	console.log(balance)
}

//ex2
// This is what a function looks like:

var divideByThree = function (number) 
{
    var val = number / 3;
    console.log(val);
};

// On line 11, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then uses the code inside the function!
divideByThree(14);

///ex3
// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) 
{
    console.log("Great to see you," + " " + name);
};

greeting("string")

////ex4

// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)
var foodDemand = function (food)
{
    console.log("I wanna eat"+ " " +food)  
};

foodDemand("ice cream")
/////ex5
// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!

var greeting = function(name)
{
    console.log(name)
    
}

//greeting var func{name}(console.log(name)))} 
greeting("nume")
