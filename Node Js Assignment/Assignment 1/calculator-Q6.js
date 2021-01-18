var sum = require('./operations/sum')
var sub = require('./operations/subtraction')
var multiply = require('./operations/multiplication')
var div = require('./operations/division')
var moment = require('moment');

var op1 = process.argv[2];
var op2 = process.argv[3];

console.log("Today is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
sum (op1, op2);
multiply (op1, op2);
sub(op1,op2);
div(op1,op2);