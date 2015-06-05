//Problem 3. Rectangle area
//Write an expression that calculates rectangle’s area by given width and height.
var problem3 = document.getElementById('problem3');

var rectWidth = 35.3,
	rectHeight = 16,
	rectArea = rectWidth * rectHeight;

console.log('The rectangle area is ' + rectArea);
problem3.innerHTML = ('The area of a rectangle with width ' + rectWidth + ' and height ' + rectHeight + ' is ' + rectArea);