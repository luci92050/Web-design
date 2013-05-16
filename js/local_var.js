///ex1
var w = 15;

var volume = function (w, l, h) {
    return w * l * h;
};

volume(2, 3, 4);
console.log(w);

////ex2
var volume = function (w, l, h) {
    var area = w * l;
    return area * h;
};

var area = 36;
console.log("Inside the function, area is 6");
console.log("The volume is " + volume(2, 3, 4));
console.log("Outside the function, area is " + area);

/////ex3
var area = 36;

var volume = function (w, l, h) {
    var area = w * l;
    return area * h;
};

console.log(volume(2, 3, 4));
console.log(area);