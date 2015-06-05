//Problem 3. Min/Max of sequence
//Write a script that finds the max and min number from a sequence of numbers.

var array = [14, -5, 145, 6, 5,0, 1, -57, -6, 17, 23];
	min = array[0],
	max = array[0],
	i;

for (i in array) {
    currentNumber = array[i];

    if (max < currentNumber) {
        max = currentNumber;
    }
    if (min > currentNumber) {
        min = currentNumber;
    }
}

console.log("The min number of that sequence is " + min);
console.log("The max number of that sequence is " + max);
problem3.innerHTML = ('Sequence numbers are ' + array + ' => min = ' + min + ', max = ' + max);