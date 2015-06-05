//Problem 6. Quadratic equation
//Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots). Calculates and prints its real roots. Note: Quadratic equations may have 0, 1 or 2 real roots.
var problem6 = document.getElementById('problem6');

function quadraticEquation() {
    var a = document.getElementById('coefficient-a').value,
        b = document.getElementById('coefficient-b').value,
        c = document.getElementById('coefficient-c').value,
        x1,
        x2,
        quadratic = (b * b) - (4 * a * c);

    a = +a;
    b = +b;
    c = +c;

    if (a == 0) {
        x1 = (-c) / b;
        console.log("The equation has one root: x1 = " + x1);
        problem6.innerHTML = ("The equation has one root: x1 = " + x1);
    } else if (quadratic < 0) {
        console.log("The equation has no real roots");
        problem6.innerHTML = ("The equation has no real roots");
    } else if (quadratic == 0) {
        x1 = (-b) / (2 * a);
        console.log("The eqation has one root: x1 = " + x1);
        problem6.innerHTML = ("The eqation has one root: x1 = " + x1);
    } else {
        x1 = ((-b) - Math.sqrt(quadratic)) / (2 * a);
        x2 = ((-b) + Math.sqrt(quadratic)) / (2 * a);
        console.log("The roots of this equations are: x1 = " + x1 + " , x2 = " + x2);
        problem6.innerHTML = ("The roots of this equations are: x1 = " + x1 + " , x2 = " + x2);
    }
}