//Problem 1. Odd or even
//Write an expression that checks if given integer is odd or even.
var problem1 = document.getElementById('problem1');

var oddEvenInt = 3;

if (oddEvenInt % 2 === 1) {
	console.log(oddEvenInt + ' is an odd number');
	problem1.innerHTML = (oddEvenInt + ' % 2 === 1? If no, ' + oddEvenInt + ' is an odd number');
} else {
	console.log(oddEvenInt + ' is an even number');
	problem1.innerHTML = (oddEvenInt + ' % 2 === 1? If yes, ' + oddEvenInt + ' is an even number');
};