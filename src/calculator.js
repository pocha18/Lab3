/**
 * Node.js CLI Calculator App
 * 
 * This calculator supports the following basic arithmetic operations:
 * - Addition (+): Adds two numbers
 * - Subtraction (-): Subtracts one number from another
 * - Multiplication (*): Multiplies two numbers
 * - Division (/): Divides one number by another
 * 
 * And the following advanced operations:
 * - Modulo (%): Returns the remainder of division
 * - Exponentiation (^): Raises a number to a power
 * - Square Root (√): Calculates the square root of a number
 */

/**
 * Addition operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction operation
 * @param {number} a - First number (minuend)
 * @param {number} b - Second number (subtrahend)
 * @returns {number} The difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division operation
 * @param {number} a - Dividend (numerator)
 * @param {number} b - Divisor (denominator)
 * @returns {number} The quotient of a divided by b
 * @throws {Error} If attempting to divide by zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Calculate result based on operation and two operands
 * @param {number} operand1 - First number
 * @param {string} operation - Operation to perform (+, -, *, /)
 * @param {number} operand2 - Second number
 * @returns {number} The result of the calculation
 * @throws {Error} If operation is invalid or division by zero
 */
function calculate(operand1, operation, operand2) {
  switch (operation) {
    case '+':
      return add(operand1, operand2);
    case '-':
      return subtract(operand1, operand2);
    case '*':
      return multiply(operand1, operand2);
    case '/':
      return divide(operand1, operand2);
    default:
      throw new Error(`Invalid operation: ${operation}. Supported operations are: +, -, *, /`);
  }
}

/**
 * Modulo operation
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The remainder of a divided by b
 * @throws {Error} If attempting modulo by zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Error: Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Exponentiation operation (power)
 * @param {number} base - The base number
 * @param {number} exponent - The exponent (power)
 * @returns {number} The result of base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square root operation
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 * @throws {Error} If attempting to find square root of a negative number
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Error: Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// Export functions for use as a module
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate
};
