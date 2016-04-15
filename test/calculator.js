var expect = require ("chai").expect;
var moduloCalculadora = require("../calculator.js");
var Calculator = moduloCalculadora.calculator;

describe ("hola",function () {
    it("multipica bien",function () {
        var calculadora = new Calculator/* definido en la linea 3*/;
        expect(calculadora.producto(4,5)).to.equal(20);
    })
} )
