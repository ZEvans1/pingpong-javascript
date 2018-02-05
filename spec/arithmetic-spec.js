var Calculator = require('./../js/pingpong.js').calculatorModule;

describe('Calculator', function() {

  it('should store two numbers', function() {
    var calculator = new Calculator(3,4)
    expect(calculator.numberOne).toEqual(3)
    expect(calculator.numberTwo).toEqual(4)
  });

  it('should add two numbers', function() {
    var addition = new Calculator(3, 4)
    expect(addition.add()).toEqual(7);

  })

  it('should subtract two numbers', function() {
    var sub = new Calculator(4, 3)
    expect(sub.subtract()).toEqual(1);

  })

  it('should multiply two numbers', function() {
    var mult = new Calculator(3, 4)
    expect(mult.multiply()).toEqual(12);

  })
  it('should add two numbers', function() {
    var divi = new Calculator(4, 2)
    expect(divi.divide()).toEqual(2);

  })
});
