//Problem 5. Selection sort
//Sorting an array means to arrange its elements in increasing order.
//Write a script to sort an array.
//Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
var problem5 = document.getElementById('problem5');

var numbers = [-9, 9, -1, 6, 2, -7, 4, -1, 6, 5, 8, -8];

numbers.sort(sortNumbers);
console.log('Sorted numbers: ' + numbers.join(', '));
problem5.innerHTML = ('Sorted numbers: ' + numbers.join(', '));

function sortNumbers(a, b) {
    return a - b;
}
