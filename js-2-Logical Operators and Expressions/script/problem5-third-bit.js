//Problem 5. Third bit
//Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer. The bits are counted from right to left, starting from bit #0. The result of the expression should be either 1 or 0.
var problem5 = document.getElementById('problem5');

var thirdBit = 2959,
	i = 1,
		bit = i << 3;

console.log('The bit at position #3 of ' + thirdBit + ' is: ' + ((thirdBit & bit) != 0 ? 1 : 0));
problem5.innerHTML = ('The bit at position #3 of ' + thirdBit + ' is: ' + ((thirdBit & bit) != 0 ? 1 : 0));
