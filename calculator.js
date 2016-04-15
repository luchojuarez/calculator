// defino la "clase"
function Calculator() {}

Calculator.prototype.producto = function (a,b) {
    return a*b;
};

//exporto el modulo (la clase)
module.exports.calculator = Calculator;
