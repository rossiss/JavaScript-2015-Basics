//Problem 4. Lexicographically smallest
//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.

problem4.innerHTML = ("Please check the console (F12)");

function findSmallest(object) {
    var smallest = "zzz",
    	property;

    for (property in object) {
        if (property < smallest) {
            smallest = property;
        }
    }
    console.log(object + "  The smallest lexicographically property is: " + smallest);
}

function findBiggest(object) {
    var biggest = "aaa",
    	property;

    for (property in object) {
        if (property > biggest) {
            biggest = property;
        }
    }
    console.log(object + "  The biggest lexicographically property is: " + biggest);
}

findSmallest(document);
findBiggest(document);
findSmallest(window);
findBiggest(window);
findSmallest(navigator);
findBiggest(navigator);

