//Problem 2. Divisible by 7 and 5
//Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
var problem2 = document.getElementById('problem2');

var divisibleNumber = 40;

if ((divisibleNumber % 5 === 0) && (divisibleNumber % 7 === 0)) {
	console.log(divisibleNumber + ' is divisible by 5 and 7 in the same time');
	problem2.innerHTML = (divisibleNumber + ' is divisible by 5 and 7 in the same time');
} else {
	console.log(divisibleNumber + ' is not divisible by 5 and 7 in the same time');
	problem2.innerHTML = (divisibleNumber + ' is not divisible by 5 and 7 in the same time');
};
