module.exports = function solveEquation(equation) {
    var splitedQuadraticEquation,
        a,
        b,
        c,
        D,
        x1,
        x2,
        roots;
    console.log('Initial string is: ' + equation);
    splitedQuadraticEquation = equation.split(' ');
    console.log('Array is: ' + splitedQuadraticEquation);
    a = parseInt(splitedQuadraticEquation[0]);
    console.log('Parameter A is: ' + a);
    b = parseInt(splitedQuadraticEquation[3] + splitedQuadraticEquation[4]);
    console.log('Parameter B is: ' + b);
    c = parseInt(splitedQuadraticEquation[7] + splitedQuadraticEquation[8]);
    console.log('Parameter C is: ' + c);
    D = b*b - 4*a*c;
    console.log('Parameter D is: ' + D);

    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);

    roots = [Math.round(x1), Math.round(x2)];
    return roots.sort(function (a, b) {return a - b});
}
