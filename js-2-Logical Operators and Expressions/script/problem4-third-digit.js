//Problem 4. Third digit
//Write an expression that checks for given integer if its third digit (right-to-left) is 7.
var problem4 = document.getElementById('problem4');

var thirdDigit = 985756,
	checkThird1 = thirdDigit / 100,
	checkThird2 = checkThird1 % 10,
	checkThird3 = parseInt(checkThird2);

console.log('The third digit of ' + thirdDigit + ' from right to left is seven: ' + (checkThird3 === 7));
problem4.innerHTML = ('The third digit of ' + thirdDigit + ' from right to left is seven: ' + (checkThird3 === 7));