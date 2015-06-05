//Problem 2. Multiplication Sign
//Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it. Use a sequence of if operators.
var problem2 = document.getElementById('problem2');

var a = 4,
    b = -8,
    c = 9,
    count;

if (a == 0 || b == 0 || c == 0) {
    console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => no sign');
    problem2.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => no sign');
} else {
    //checks total number of minuses
    if (a < 0) {
        count++;
    }
    if (b < 0) {
        count++;
    }
    if (c < 0) {
        count++;
    }
    if (count == 1 || count == 3) {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => -');
        problem2.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => -');
    }
    else {
        console.log('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => +');
        problem2.innerHTML = ('a = ' + a + ' , b = ' + b + ' , c = ' + c + ' => +');
    }
}
