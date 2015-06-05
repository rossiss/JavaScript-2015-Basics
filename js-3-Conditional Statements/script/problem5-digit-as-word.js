//Problem 5. Digit as word
//Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English). Print “not a digit” in case of invalid input. Use a switch statement.
var problem5 = document.getElementById('problem5');

function getDigitFunc() {
    var digit = document.getElementById('get-digit').value,
        digitName;

    digit = +digit;

    switch (digit) {
        case 1: digitName = "One"; break;
        case 2: digitName = "Two"; break;
        case 3: digitName = "Three"; break;
        case 4: digitName = "Four"; break;
        case 5: digitName = "Five"; break;
        case 6: digitName = "Six"; break;
        case 7: digitName = "Seven"; break;
        case 8: digitName = "Eight"; break;
        case 9: digitName = "Nine"; break;
        case 0: digitName = "Zero"; break;
        default: digitName = "Not a digit!"; break;
    }

    console.log(digitName);
    problem5.innerHTML = (digitName);
}