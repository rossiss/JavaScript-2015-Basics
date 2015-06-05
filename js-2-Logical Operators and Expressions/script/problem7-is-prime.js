//Problem 7. Is prime
//Write an expression that checks if given positive integer number n (n ≤ 100) is prime.
var problem7 = document.getElementById('problem7');

var n = 76,
	divider = 2,
	maxDivider = Math.sqrt(n),
		prime = true;

while (prime && (divider <= maxDivider)) {
    if (n % divider == 0)
    {
        prime = false;
    }
    divider++;
};

console.log(n + ' is prime: ' +  prime);
problem7.innerHTML = (n + ' is prime: ' +  prime);