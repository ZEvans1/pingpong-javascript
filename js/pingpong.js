function Calculator(numberOne, numberTwo) {
  this.numberOne = numberOne;
  this.numberTwo = numberTwo;

}

Calculator.prototype.add = function () {
  var summand = this.numberOne + this.numberTwo;
  return summand;
};

Calculator.prototype.subtract = function () {
  var difference = this.numberOne - this.numberTwo;
  return difference;
};

Calculator.prototype.multiply = function () {
  var product = this.numberOne * this.numberTwo;
  return product;
};

Calculator.prototype.divide = function () {
  var quotient = this.numberOne / this.numberTwo;
  return quotient;
};

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}

exports.calculatorModule = Calculator;
