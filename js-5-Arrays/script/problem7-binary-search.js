//Problem 7. Binary search
//Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
var problem7 = document.getElementById('problem7');


var arr = [487, 3, 31, 4, 2, 5, 1, 8, 21, 13, 180],
	searchedElement = 21,
	indexOfElement;

arr.sort(sortNumbers);
indexOfElement = binaryIndexOf.call(arr, searchedElement);

console.log('The sorted array is: ' + arr.join(', '));
console.log('The index of the searched element "' + searchedElement + '" is ' + indexOfElement);
problem7.innerHTML = ('The sorted array is: ' + arr.join(', ') + '<br>' + 'The index of the searched element "' + searchedElement + '" is ' + indexOfElement);

function sortNumbers(a, b) {
	return a - b;
}

function binaryIndexOf(searchElement) {
    'use strict';

    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;
    var resultIndex;

    while (minIndex <= maxIndex) {
        resultIndex = currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        } else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }

    return ~maxIndex;
}