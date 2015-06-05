//Problem 3. The biggest of Three
//Write a script that finds the biggest of three numbers. Use nested if statements.
var problem3 = document.getElementById('problem3');

var a = 4.4,
    b = 89,
    c = -89,
    temp;

if (a == b == c) {
    console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => equal numbers');
    problem3.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => equal numbers');
} else {
    if (a > b && a > c) {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + a);
        problem3.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + a);
    } else if (b > a && b > c) {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + b);
        problem3.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + b);
    } else {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + c);
        problem3.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + c);
    }
}