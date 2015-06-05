//Problem 7. The biggest of five numbers
//Write a script that finds the greatest of given 5 variables. Use nested if statements.
var problem7 = document.getElementById('problem7');

var a = 3,
    b = 3,
    c = -9388,
    d = 45,
    e = 0;

//I'm not using Math.max() as I don't know if it's allowed in the task
if (a > b && a > c && a > d && a > e) {
    console.log('The biggest number is: ' + a);
    problem7.innerHTML = ('The biggest number is: ' + a);
} else if (b > a && b > c && b > d && b > e) {
    console.log('The biggest number is: ' + b);
    problem7.innerHTML = ('The biggest number is: ' + b);
} else if (c > a && c > b && c > d && c > e) {
    console.log('The biggest number is: ' + c);
    problem7.innerHTML = ('The biggest number is: ' + c);
} else if (d > a && d > b && d > c && d > e) {
    console.log('The biggest number is: ' + d);
    problem7.innerHTML = ('The biggest number is: ' + d);
} else {
    console.log('The biggest number is: ' + e);
    problem7.innerHTML = ('The biggest number is: ' + e);
}