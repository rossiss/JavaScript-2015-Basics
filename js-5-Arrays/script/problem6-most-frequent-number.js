//Problem 6. Most frequent number
//Write a script that finds the most frequent number in an array.
//Example: {4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3} --> 4 (5 times)
var problem6 = document.getElementById('problem6');

var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

mostFrequentNumber(arr);

function mostFrequentNumber(array) {
	var tempNumber = 0,
    	frequentNumber = 0,
    	mostFrequentNumber = 0,
    	tempFrequency = 1,
    	bestFrequency = 0;

    //pass over each element in the array and checks if it appears again and if so it counts the appearances
    for (var index in array) {
        tempNumber = array[index];

        for (var i = 1; i < array.length; i += 1) {
            if (tempNumber == array[i]) {
                frequentNumber = tempNumber;
                tempFrequency += 1;

                if (tempFrequency > bestFrequency) {
                    bestFrequency = tempFrequency;
                    mostFrequentNumber = tempNumber;
                }
            }
        }
        tempFrequency = 0;
    }

    console.log("The number " + mostFrequentNumber + " appears in the array " + bestFrequency + " times.");
    problem6.innerHTML = ("The number " + mostFrequentNumber + " appears in the array " + bestFrequency + " times.");

    //In case we want to return the number and use it outside the function
    //return mostFrequentNumber;
}