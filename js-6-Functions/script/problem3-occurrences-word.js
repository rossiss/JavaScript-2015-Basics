//Problem 3. Occurrences of word
//Write a function that finds all the occurrences of word in a text.
//The search can be case sensitive or case insensitive.
//Use function overloading.

//for case-insensitive search - split
//for case-sensitive search - indexOf
function wordOccurances(text, word, isCaseSensitive) {
    var count = 0;
    isCaseSensitive = isCaseSensitive || false;

    if (isCaseSensitive == false) {
        var splitedText = text.split(word);

        for (var splited in splitedText) {
            count++;
        }
        console.log("Case-insensitive: The word '" + word + "' occurred " + count + " times.");
    } else {
        var position = text.indexOf(word);

        while (position >= 0) {
            count++;
            position = text.indexOf(word, (position + 1));
        }
        console.log("Case-sensitive: The word '" + word + "' occurred " + count + " times.");
    }
}

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus tortor, dignissim ut eleifend ut, dignissim in dolor. In sit amet eros vulputate nulla pulvinar volutpat vitae eu libero. Fusce ligula metus, dictum vitae scelerisque ac, fermentum ac dolor. Donec nec sapien dui. Proin vel lorem quam, vel sollicitudin ipsum.";
var word = "ipsum";

wordOccurances(text, word);
wordOccurances(text, word, true);
