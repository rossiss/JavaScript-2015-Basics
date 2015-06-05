//Problem 6. Point in Circle
//Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). //{0,0} is the centre and 5 is the radius.
var problem6 = document.getElementById('problem6');

var pointX = 2.7,
	pointY = -2,
	coordinateX = 0,
	coordinateY = 0,
	radius = 5,
	pointWithin = ((pointX - coordinateX) * 2) + ((pointY - coordinateY) * 2) <= (radius * 2);

console.log('Is the given point P(' + pointX + ', ' + pointY + ') ' + 'within the circle K({0,0}, 5): ' + pointWithin);
problem6.innerHTML = ('Is the given point P(' + pointX + ', ' + pointY + ') ' + 'within the circle K({0,0}, 5): ' + pointWithin);