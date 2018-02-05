var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#arithmetic-form').submit(function(event) {
    event.preventDefault();
    var numberOneString = $('#numberOne').val();
    var numberOne = parseInt(numberOneString);
    console.log(numberOne);
    var numberTwoString = $('#numberTwo').val();
    var numberTwo = parseInt(numberTwoString);
    var operator = $('#operator').val();
    console.log(operator);
    var simpleCalc = new Calculator(numberOne, numberTwo, operator);
    var result = simpleCalc.arithmetic(numberOne, numberTwo, operator);
    console.log(result);
  });
});
