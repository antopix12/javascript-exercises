const add = function(x, y) {
	return x + y;
};

const subtract = function(y, x) {
	return y - x;
};

const sum = function(arr) {
	let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
};

const multiply = function(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(n) {
	if (n == 0) return 1;

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
