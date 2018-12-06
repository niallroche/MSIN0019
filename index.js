'use strict';

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  var calculationResult = 0;

  //check that query String Parameters are present
  if (typeof event.queryStringParameters !== "undefined" &&
    typeof event.queryStringParameters['num1'] !== "undefined" &&
    typeof event.queryStringParameters['num2'] !== "undefined") {

    var num1 = event.queryStringParameters['num1'];
    var num2 = event.queryStringParameters['num2'];

    //check that the params are numbers
    if (!isNaN(num1) && !isNaN(num2)) {
      calculationResult = Number(num1) + Number(num2);
    } else {
      calculationResult = "expected values were not numeric";
    }
  } else {
    calculationResult = "expected values were not present";
  }

  var result = {
    statusCode: 200,
    body: calculationResult.toString(),
    headers: {'content-type': 'application/json'}
  };

  callback(null, result);
};
