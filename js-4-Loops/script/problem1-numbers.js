//Problem 1. Numbers
//Write a script that prints all the numbers from 1 to N.

var n = 8,
	print = 1;

n = +n;

while (n >= 1) {
	console.log(print);
	problem1.innerHTML = ('N is ' + print + ' -> please check the console (F12)');

	print += 1;
	n -= 1;
}

