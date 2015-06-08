//Problem 1. English digit
//Write a function that returns the last digit of given integer as an English word.
var problem1 = document.getElementById('problem1');

function lastDigitOfNumber(number) {
	number = +number;

	//checks for negative number and returns positive
	if (number < 0) {
		number *= -1;
	}

	var lastDigit = number;

	if (number > 10) {
		lastDigit = number % 10;
	}

	return digitName(lastDigit);
}

function digitName(digit) {
	var spellOnes;

	switch(digit) {
		case 1: spellOnes = 'one'; break;
	    case 2: spellOnes = 'two'; break;
	    case 3: spellOnes = 'three'; break;
	    case 4: spellOnes = 'four'; break;
	    case 5: spellOnes = 'five'; break;
	    case 6: spellOnes = 'six'; break;
	    case 7: spellOnes = 'seven'; break;
	    case 8: spellOnes = 'eight'; break;
	    case 9: spellOnes = 'nine'; break;
	    default: spellOnes = 'zero'; break;
	}

	return spellOnes;
}

var checkDigit = -109084747474,
	spelling = lastDigitOfNumber(checkDigit);

console.log('Last digit of ' + checkDigit  + ' is: ' + spelling);
problem1.innerHTML = ('Last digit of ' + checkDigit  + ' is: ' + spelling);