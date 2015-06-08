//Problem 2. Reverse number
//Write a function that reverses the digits of given decimal number.
var problem2 = document.getElementById('problem2');

function reverseNumber(number) {
	number = number.toString();

	var result = '',
		i;

	//if it's a negative number puts the sign in front of the reversed number
	if (number[0] === '-') {
		result += number[0];
	}

	for (i = number.length - 1; i >= 0; i -= 1) {
		if (number[i] === '-') {
			break;
		}
		result += number[i];
	}

	return result;
}

var decimalNum = -640.21,
	reversed = reverseNumber(decimalNum);

console.log('The decimal number ' + decimalNum + ' revesed is: ' + reversed);
problem2.innerHTML = ('The decimal number ' + decimalNum + ' revesed is: ' + reversed);