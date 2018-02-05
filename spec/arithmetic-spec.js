var Calculator = require('./../js/pingpong.js').calculatorModule;

describe('Calculator', function() {

  it('should store two numbers', function() {
    var calculator = new Calculator(3,4, "add")
    expect(calculator.numberOne).toEqual(3)
    expect(calculator.numberTwo).toEqual(4)
  });

  it('should add two numbers', function() {
    var addition = new Calculator(3, 4, "add")
    expect(addition.arithmetic()).toEqual(7);

  })

  it('should subtract two numbers', function() {
    var sub = new Calculator(4, 3, "sub")
    expect(sub.arithmetic()).toEqual(1);

  })

  it('should multiply two numbers', function() {
    var mult = new Calculator(3, 4, "mult")
    expect(mult.arithmetic()).toEqual(12);

  })
  it('should divide two numbers', function() {
    var divi = new Calculator(4, 2, "div")
    expect(divi.arithmetic()).toEqual(2);

  })
});
