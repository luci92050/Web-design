///ex1
var orangeCost = function (price)
{
    console.log(price*5)
}

orangeCost(5)
///ex2
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) 
{
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(4)
console.log(newNumber);
////ex3
// Define quarter here.
var quarter = function (number)
{
    return number/4
}


if (quarter(24) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}
