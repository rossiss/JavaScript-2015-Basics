//Problem 4. Number of elements
//Write a function to count the number of div elements on the web page
// var problem4 = document.getElementById('problem4');

function countTagElements(tag) {
    tagSearched = document.getElementsByTagName(tag);
    var count = tagSearched.length;     //provides the number of elements
    return count;
}

var element = 'div';
var divCount = countTagElements(element);
console.log("The 'div' tag occurred in this HTML " + divCount + " times.");
problem4.innerHTML = ("The 'div' tag occurred in this HTML " + divCount + " times.");