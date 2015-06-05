//Problem 1. Increase array members
//Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
//Print the obtained array on the console.
var problem1 = document.getElementById('problem1');

var arr = new Array(20);

for (var i = 0; i < arr.length; i+=1) {
	arr[i] = i * 5;
}

for (var element in arr) {
	console.log(element + ' * 5 = ' + arr[element]);
}

problem1.innerHTML = (arr.join(', '));