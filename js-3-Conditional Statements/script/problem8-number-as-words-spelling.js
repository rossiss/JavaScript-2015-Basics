//Problem 8. Number as words
//Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
var problem8 = document.getElementById('problem8');

function getNumberFunc() {
    var number = document.getElementById('get-number').value,
        hundreds = Math.floor(number / 100),
        tens = Math.floor((number - hundreds * 100) / 10),
        ones = number % 10,
        spellHundreds,
        spellTens,
        spellOnes;

    number = +number;

    if ((number < 0) || (number > 999)) {
        console.log("Please enter a valid number!");
        problem8.innerHTML = ("Please enter a valid number!");
    } else {
        switch (hundreds) {
            case 1: spellHundreds = 'one hundred'; break;
            case 2: spellHundreds = 'two hundred'; break;
            case 3: spellHundreds = 'three hundred'; break;
            case 4: spellHundreds = 'four hundred'; break;
            case 5: spellHundreds = 'five hundred'; break;
            case 6: spellHundreds = 'six hundred'; break;
            case 7: spellHundreds = 'seven hundred'; break;
            case 8: spellHundreds = 'eight hundred'; break;
            case 9: spellHundreds = 'nine hundred'; break;
            default: spellHundreds = ''; break;
        }

        if (tens != 1) {
            switch (tens) {
                case 2: spellTens = 'twenty'; break;
                case 3: spellTens = 'thirty'; break;
                case 4: spellTens = 'forty'; break;
                case 5: spellTens = 'fifty'; break;
                case 6: spellTens = 'sixty'; break;
                case 7: spellTens = 'seventy'; break;
                case 8: spellTens = 'eighty'; break;
                case 9: spellTens = 'ninety'; break;
                default: spellTens = ''; break;
            }
            switch (ones) {
                case 1: spellOnes = 'one'; break;
                case 2: spellOnes = 'two'; break;
                case 3: spellOnes = 'three'; break;
                case 4: spellOnes = 'four'; break;
                case 5: spellOnes = 'five'; break;
                case 6: spellOnes = 'six'; break;
                case 7: spellOnes = 'seven'; break;
                case 8: spellOnes = 'eight'; break;
                case 9: spellOnes = 'nine'; break;
                default: spellOnes = ''; break;
            }
        } else {
            spellTens = '';
            switch (ones) {
                case 1: spellOnes = 'eleven'; break;
                case 2: spellOnes = 'twelve'; break;
                case 3: spellOnes = 'thirteen'; break;
                case 4: spellOnes = 'fourteen'; break;
                case 5: spellOnes = 'fifteen'; break;
                case 6: spellOnes = 'sixteen'; break;
                case 7: spellOnes = 'seventeen'; break;
                case 8: spellOnes = 'eighteen'; break;
                case 9: spellOnes = 'nineteen'; break;
                default: spellOnes = 'ten'; break;
            }
        }

        //spelling the numbers properly
        if (hundreds != 0 && tens != 0 && tens != 1 && ones != 0) {
            //876
            console.log(spellHundreds + ' ' + spellTens + '-' + spellOnes);
            problem8.innerHTML = (spellHundreds + ' ' + spellTens + '-' + spellOnes);
        } else if (hundreds != 0 && (tens == 0 || tens == 1) && ones != 0) {
            //102
            console.log(spellHundreds + ' ' + spellOnes);
            problem8.innerHTML = (spellHundreds + ' ' + spellOnes);
        } else if (hundreds != 0 && tens == 0 && ones == 0) {
            //700
            console.log(spellHundreds);
            problem8.innerHTML = (spellHundreds);
        } else if (hundreds != 0 && tens != 0 && ones == 0) {
            //130
            console.log(spellHundreds + ' ' + spellTens);
            problem8.innerHTML = (spellHundreds + ' ' + spellTens);
        } else if (hundreds == 0 && tens != 0 && tens != 1) {
            //94
            console.log(spellTens + '-' + spellOnes);
            problem8.innerHTML = (spellTens + '-' + spellOnes);
        } else {
            //5
            console.log(spellOnes);
            problem8.innerHTML = (spellOnes);
        }
    }
}