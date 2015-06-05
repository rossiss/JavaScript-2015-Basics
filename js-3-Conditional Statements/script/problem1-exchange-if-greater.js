//Problem 1. Exchange if greater
//Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second. As a result print the values a and b, separated by a space.
var problem1 = document.getElementById('problem1');

var a = 8.2,
    b = 456,
    temp;

if (a < b) {
    console.log(a + ' ' + b);
    problem1.innerHTML = (a + ' ' + b);
} else if ( a == b) {
    console.log('equal values => ' + a + ' ' + b);
    problem1.innerHTML = ('equal values => ' + a + ' ' + b);
} else {
    temp = a;
    a = b;
    b = temp;
    console.log(a + ' ' + b);
    problem1.innerHTML = (a + ' ' + b);
}