//Problem 5. Appearance count
//Write a function that counts how many times given number appears in given array.
//Write a test function to check if the function is working correctly.

function frequencyCount(array) {
    var count = 0,
    	currentNumber,
    	mostFrequentCurrentNumber,
    	mostFrequenceCount = 1;

    for (var i = 0; i < array.length; i += 1) {
        currentNumber = array[i];

        //counts appearance of the current number in the array
        for (var j = 0; j < array.length; j += 1) {
            if (currentNumber == array[j]) {
                count += 1;

                //saves the best result
                if (count > mostFrequenceCount) {
                    mostFrequentCurrentNumber = currentNumber;
                    mostFrequenceCount = count;
                }
            }
        }
        count = 0;
    }

    console.log("Given array: " + array);
    console.log(mostFrequentCurrentNumber + " appearce " + mostFrequenceCount + " times.");
}

var arr = [8,9,5,15,15,9,9,9,9,5,5,1,151];
frequencyCount(arr);