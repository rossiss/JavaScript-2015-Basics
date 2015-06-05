//Problem 2. Lexicographically comparison
//Write a script that compares two char arrays lexicographically (letter by letter).
var problem2 = document.getElementById('problem2');

var firstArray = ['k', 'z', 'd', 'm', 'a', 'n'],
	secondArray = ['k', 'z', 'l', 'q', 'a', 'b', 'z', 'b'];
	equal = true;
	lengthArrays = Math.min(firstArray.length, secondArray.length);

	Compare2CharArrays(firstArray, secondArray);

function Compare2CharArrays(arrayOne, arrayTwo) {
    for (var i = 0; i < lengthArrays; i+=1) {
        //check if the chars at the current position are equal and if not which is earlier (smaller)
        if (firstArray[i] != secondArray[i]) {
            if (firstArray[i] < secondArray[i]) {
                console.log("The first array is lexicographically earlier!");
            } else {
                console.log("The second array is lexicographically earlier!");
            }
            //if they are not equal there is no need for the loop to continue
            equal = false;
            break;
        }
    }

    //in case all the compared chars are equal, check for the size of the two arrays
    if (equal) {
        if (firstArray.length == secondArray.length) {
            console.log("The two arrays are the same!");
        } else {
            if (firstArray.length < secondArray.length) {
                console.log("The first array is lexicographically earlier because it's shorter!");
            } else {
                console.log("The second array is lexicographically earlier because it's shorter!");
            }
        }
    }
}

problem2.innerHTML = ('Please, check the console (F12)');