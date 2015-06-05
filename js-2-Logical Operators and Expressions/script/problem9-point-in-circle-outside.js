//Problem 9. Point in Circle and outside Rectangle
//Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).
var problem9 = document.getElementById('problem9');

var x = 10,
	y = 2,
	kX = 1,
	kY = 1,
	kRadius = 3,
	pointWithinK = ((x - kX) * 2) + ((y - kY) * 2) <= (kRadius * 2);

console.log('The provided coordinates of a point are P(' + x + ', ' + y + ').');
console.log('The point P is within the circle K((1,1), 3): ' + pointWithinK);

var pLeft = x < -1,
	pRight = x > 5,
	pTop = y > 1,
	pBottom = y < -1,
	checkPointP = pLeft === pRight === pTop === pBottom;

console.log('The point P is out of the rectangle R (top=1, left=-1, width=6, height=2): ' + checkPointP);
problem9.innerHTML = ('The provided coordinates of a point are P(' + x + ', ' + y + '). <br>' + 'The point P is within the circle K((1,1), 3): ' + pointWithinK + '. <br>The point P is out of the rectangle R (top=1, left=-1, width=6, height=2): ' + checkPointP);