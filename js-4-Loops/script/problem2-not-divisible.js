//Problem 2. Numbers not divisible
//Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time.

var n = 30,
	i;

problem2.innerHTML = ('N is ' + n + ' -> please check the console (F12)');

for (i = 0; i <= n; i++) {
    if (i % (3 * 7) == 0) {
        continue;
    } else {
    	console.log(i);
    }
}