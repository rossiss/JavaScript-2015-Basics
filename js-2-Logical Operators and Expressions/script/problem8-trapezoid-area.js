//Problem 8.Trapezoid area
//Write an expression that calculates trapezoid's area by given sides a and b and height h.
var problem8 = document.getElementById('problem8');

var a = 6,
	b = 2.3,
	h = 9;
	areaTrapezoid = (a + b) / 2 * h;

console.log('Trapezoid with sides ' + a + ' and ' + b + ' and height ' + h + ' has area of: ' + areaTrapezoid);
	problem8.innerHTML = ('Trapezoid with sides ' + a + ' and ' + b + ' and height ' + h + ' has area of: ' + areaTrapezoid);