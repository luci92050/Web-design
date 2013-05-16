///ex1
// Accepts a number x as input and returns its square
var square = function(x) {
    return x * x;
};

// Accepts a number x as input and returns its cube
var cube = function(x) {
    return square(x) * x;
};

cube(7);

///////ex2
var multiply = function (x, y) {
    return x * y;
};

multiply(2, 5);

var volume = function (w, l, h ) {
    return w * l * h;
};

volume(2, 3, 4);
////ex3

// Change the argument name from x to n
var cube = function (n) {
    return n * n * n;
};

// When you call cube with the new argument name,
// it should still return the same result.
cube(5);

/////////ex3

var cube = function(x) {
    return x * x * x;
};

// The cube function works fine with a number...
console.log(cube(5));

// ...but if it's called with a string, it returns NaN!
console.log(cube("test"));

///////ex4

var cube = function (x) {
    if (typeof(x) !== 'number') return 0;
    return x * x * x;
};

// Once you uncomment the type check in line 2,
// the cube() function should return 0.
cube("test");

