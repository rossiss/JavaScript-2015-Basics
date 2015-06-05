//Problem 4. Sort 3 numbers
//Sort 3 real values in descending order. Use nested if statements. Note: Don’t use arrays and the built-in sorting functionality.
var problem4 = document.getElementById('problem4');

var a = 45,
    b = -23,
    c = 1.345,
    temp;

if (a == b && b == c) {
    console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => (equal numbers) ' + a + ' ' + b + ' ' + c);
    problem4.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => (equal numbers) ' + a + ' ' + b + ' ' + c);
}
else {
    if (a > b && b > c) {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + a + ' ' + b + ' ' + c);
        problem4.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + a + ' ' + b + ' ' + c);
    }
    else if (a > c && c > b) {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + a + ' ' + c + ' ' + b);
        problem4.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + a + ' ' + c + ' ' + b);
    }
    else if (b > a && a > c) {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + b + ' ' + a + ' ' + c);
        problem4.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + b + ' ' + a + ' ' + c);
    }
    else if (b > c && c > a) {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + b + ' ' + c + ' ' + a);
        problem4.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + b + ' ' + c + ' ' + a);
    }
    else if (c > a && a > b) {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + c + ' ' + a + ' ' + b);
        problem4.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + c + ' ' + a + ' ' + b);
    }
    else {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + c + ' ' + b + ' ' + a);
        problem4.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => ' + c + ' ' + b + ' ' + a);
    }
}